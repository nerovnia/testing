// 3.15 На складе товары находятся в 10-ярусном стеллаже, раз-
// битом на 8 секций. В каждой секции на каждом ярусе предусмот­
// рено 15 мест для товаров. Нумерация мест показана на рис. 3.1.
// Склад обслуживается роботом. Определить, в какой секции и на
// каком ярусе робот должен взять товар, находящийся на месте
// с заданным номером.

// Вариант 1
console.log('\n\n*** Вариант 1 ***');
let ярусів=10 
let секцій=8
const місць=15

const місцьВсього = ярусів * секцій * місць;
const місцьУЯрусі = місць * секцій;
let arr = [1,15,106,120,121,135,226,240,241,360,601,720,1081,1200];

arr.forEach(місце => {
  const ярус = Math.ceil(місце/місцьУЯрусі);
  const секція = Math.ceil((місцьУЯрусі-(місцьУЯрусі * ярус - місце))/місць);
  console.log('\nМісце:', місце);
  console.log('Всього місць:', місцьВсього);
  console.log('Місць у ярусі:',місцьУЯрусі);
  console.log('Ярус:', ярус);
  console.log('Секція:',секція);
})



// Вариант 2
console.log("\n\n*** Вариант 2 ***");
ярусів=10 
секцій=8
const місцьВСекції=150
const col = 15

arr = [1,2,3,4,5,6,7,9,10,11,15,106,120,121,135,150,151,226,240,241,360,601,720,1081,1200];

arr.forEach(місце => {
  const секція = Math.ceil(місце/місцьВСекції);
  const column = Math.ceil((місцьВСекції - (місцьВСекції * секція - місце))/ярусів);
  const ярус = (місцьВСекції - (місцьВСекції * секція - місце)) - ((column - 1) * ярусів);
  console.log('\nМісце:', місце);
  console.log('Секція:', секція);
  console.log('Колонка:', column);
  console.log('Ярус:', ярус);
})

