import xlsx from 'xlsx';
import fs from 'fs';

console.log('Начинаю углубленный анализ Excel-файла (ищем все размеры и массу)...');
const workbook = xlsx.readFile('./export.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = xlsx.utils.sheet_to_json(sheet);

const headerRow = rows[0]; 
const rawHeaders = Object.keys(headerRow);

const findKeyByContent = (searchText) => {
  return rawHeaders.find(key => key.includes(searchText) || (headerRow[key] && String(headerRow[key]).includes(searchText)));
};

// Более точный поиск колонок для характеристик
const keysMap = {
  name: findKeyByContent('название товара/услуги'),
  images: findKeyByContent('30 ссылок на изображения'),
  desc: findKeyByContent('Полное описание поможет'),
  chars1: findKeyByContent('соответствуют данному товару, через точку с запятой'), // Характеристики на сайте
  chars2: findKeyByContent('соответствуют данному товару в данной рубрике'), // Характеристики на портале
  group1: findKeyByContent('Группа 1 уровня'),
  group2: findKeyByContent('Группа 2 уровня'),
};

const products = [];
const categories = new Map();

for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  const name = row[keysMap.name];
  if (!name || name === 'Название*') continue;

  const g1 = row[keysMap.group1] || 'Прочее';
  const g2 = row[keysMap.group2] || '';
  
  const catId = g1.toLowerCase().replace(/[^a-zа-я0-9]/g, '_');
  
  if (!categories.has(catId)) {
    categories.set(catId, {
      id: catId,
      title: g1,
      desc: `Изделия категории ${g1}`
    });
  }

  let image = null;
  const imgStr = row[keysMap.images];
  if (imgStr) {
    image = imgStr.split(/[\s,;]+/)[0];
    if (image && image.startsWith('//')) image = 'https:' + image;
  }

  // ОБЪЕДИНЯЕМ ВСЕ ВОЗМОЖНЫЕ ДАННЫЕ ДЛЯ ПОИСКА ХАРАКТЕРИСТИК
  const charBlock1 = row[keysMap.chars1] || '';
  const charBlock2 = row[keysMap.chars2] || '';
  const description = row[keysMap.desc] || '';
  
  // Создаем единый массив всех характеристик вида "Ключ: Значение"
  const allPropsStr = `${charBlock1}; ${charBlock2}; ${description}`;
  const propsPairs = allPropsStr.split(';').map(p => p.trim()).filter(Boolean);
  
  let dVal = null, wVal = null, hVal = null, sizeVal = null, weightVal = null;
  
  // Парсим пары ключ-значение
  propsPairs.forEach(pair => {
    const parts = pair.split(':');
    if (parts.length >= 2) {
      const key = parts[0].toLowerCase().trim();
      const val = parts.slice(1).join(':').trim();
      
      if (key.includes('длина')) dVal = val;
      if (key.includes('ширин')) wVal = val;
      if (key.includes('высот')) hVal = val;
      if (key.includes('размер') || key.includes('габарит')) sizeVal = val;
      if (key.includes('масса') || key.includes('вес')) weightVal = val;
    }
  });

  // Если ключ-значение не сработало, пытаемся найти просто текстом в описании (Regex)
  if (!sizeVal && !dVal && !wVal) {
     const sizeMatch = allPropsStr.match(/(?:размер|габарит)ы?[\s=:]+([\dхx\.\* ]+)/i);
     if (sizeMatch) sizeVal = sizeMatch[1].trim();
  }
  if (!weightVal) {
     const weightMatch = allPropsStr.match(/(?:масса|вес)[\s=:]+([\d\.\, ]+\s*(?:кг|т))/i);
     if (weightMatch) weightVal = weightMatch[1].trim();
  }

  // Формируем финальную строку Размеров
  let finalDims = '-';
  if (sizeVal) {
    finalDims = sizeVal; // Если есть объединяющее "Размер: 100х200х300"
  } else if (dVal || wVal || hVal) {
    // Собираем из кусочков
    finalDims = [dVal, wVal, hVal].filter(Boolean).join(' x ');
  }

  products.push({
    id: `p_${i}`,
    categoryId: catId,
    subCategory: g2,
    name: name,
    dimensions: finalDims,
    weight: weightVal || '-',
    image: image
  });
}

console.log(`Итог: ${products.length} товаров в ${categories.size} категориях с полными размерами.`);

fs.writeFileSync('./src/data/catalog.json', JSON.stringify({ 
  categories: Array.from(categories.values()),
  products 
}, null, 2));

console.log('✅ catalog.json успешно обновлен! Все характеристики детально разобраны.');
