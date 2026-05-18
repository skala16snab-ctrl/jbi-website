import https from 'https';
import fs from 'fs';

console.log('Начинаю парсинг реального каталога jbi-16.ru... Это займет пару минут.');

// Категории для парсинга (основные разделы, которые мы мапим в наш новый каталог)
const TARGETS = [
  { id: 'civil', url: '/catalog/k-10062146-svai' },
  { id: 'civil', url: '/catalog/k-10062142-fundamentnyye_bloki_fbs' },
  { id: 'civil', url: '/catalog/k-10062137-plity_perekrytiya_pk' },
  { id: 'network', url: '/catalog/k-10062157-koltsa_kolodtsev' },
  { id: 'network', url: '/catalog/k-10062161-lotki_teplotrass' },
  { id: 'roads', url: '/catalog/k-10062165-zhbi_dlya_dorozhnogo_zh_d_stroitelstva_blagoustroystva' },
  { id: 'energy', url: '/catalog/k-10062174-stoyki_sv' }
];

const fetchHtml = (path) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'www.jbi-16.ru',
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html'
      }
    };
    const req = https.request(options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchHtml(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.end();
  });
};

const extractProducts = (html, categoryId) => {
  const products = [];
  const regex = /<li class="company-product-listing__gallery-item[^>]*>([\s\S]*?)<\/li>/g;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const block = match[1];

    // Extract name
    const nameMatch = block.match(/<meta itemprop="name" content="([^"]+)">/);
    const name = nameMatch ? nameMatch[1] : 'Неизвестный товар';

    // Extract image
    const imgMatch = block.match(/data-original="([^"]+)"/) || block.match(/<img[^>]+src="([^"]+)"/);
    const image = imgMatch ? imgMatch[1] : null;

    // Extract description to get attributes
    const descMatch = block.match(/<meta itemprop="description" content="([^"]+)">/);
    let dims = '-', weight = '-';
    if (descMatch) {
      const desc = descMatch[1].replace(/&#xD;/g, ' ').replace(/\n/g, ' ');
      const dMatch = desc.match(/Размер:\s*([^\.]+)/i);
      if (dMatch) dims = dMatch[1].trim();
      const wMatch = desc.match(/Масса:\s*([^\.]+)/i);
      if (wMatch) weight = wMatch[1].trim();
    }

    products.push({ id: Math.random().toString(36).substr(2, 9), categoryId, name, dimensions: dims, weight, image });
  }
  return products;
};

const getPageCount = (html) => {
  const match = html.match(/data-pages="(\d+)"/);
  return match ? parseInt(match[1]) : 1;
};

const runScraper = async () => {
  const database = {
    products: []
  };

  for (const target of TARGETS) {
    console.log(`\nПарсинг раздела: ${target.url}`);
    try {
      const firstPageHtml = await fetchHtml(target.url);
      const limit = getPageCount(firstPageHtml);
      console.log(`Найдено страниц: ${limit}`);

      const p = extractProducts(firstPageHtml, target.id);
      database.products.push(...p);
      console.log(`- Страница 1: загружено ${p.length} товаров`);

      // Fetch remaining pages
      for (let i = 2; i <= limit; i++) {
        try {
          const pageStr = target.url.includes('?') ? `&page=${i}` : `?page=${i}`;
          const pageHtml = await fetchHtml(target.url + pageStr);
          const p = extractProducts(pageHtml, target.id);
          database.products.push(...p);
          console.log(`- Страница ${i}: загружено ${p.length} товаров`);
        } catch (e) {
          console.log(`Ошибка чтения страницы ${i}`);
        }
      }
    } catch(err) {
      console.error(`Ошибка при доступе к ${target.url}:`, err.message);
    }
  }

  const uniqueProducts = Array.from(new Map(database.products.map(item => [item.name, item])).values());

  console.log(`\nГотово! Всего уникальных товаров собрано: ${uniqueProducts.length}`);

  // Сохраняем результат
  fs.writeFileSync('./src/data/catalog.json', JSON.stringify({ products: uniqueProducts }, null, 2));
  console.log('Файл src/data/catalog.json успешно обновлен.');
  console.log('Теперь вы можете зайти на сайт в Каталог и увидеть все ваши реальные товары с картинками!');
};

runScraper();
