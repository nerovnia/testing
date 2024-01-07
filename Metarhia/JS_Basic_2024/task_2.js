const items1 = [
  { price: 40 },
  { price: 120 },
  { price: 505 },
  { price: 350 },
];

const items2 = [
  { price: 100 },
  { price: 500 },
];


const sum = (goods) => {
  let total = 0;
  for (const { price } of goods) {
    if (typeof price !== 'number' ) throw Error("A price isn't a number");
    if (price < 0) throw Error('A price is less then 0');
    total += price;
  }
  return total;
}

console.log(`Total price: ${sum(items1)}`);
console.log(`Total price: ${sum(items2)}`);
