import xlsx from 'xlsx';

const workbook = xlsx.readFile('./export.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = xlsx.utils.sheet_to_json(sheet);

if (rows.length > 0) {
  console.log('=== ЗАГОЛОВКИ КОЛОНОК ===');
  console.log(Object.keys(rows[0]).join('\n'));
  console.log('\n=== ПРИМЕР ПЕРВОГО ТОВАРА ===');
  console.log(JSON.stringify(rows[0], null, 2));
} else {
  console.log('Файл пуст или прочитан неверно.');
}
