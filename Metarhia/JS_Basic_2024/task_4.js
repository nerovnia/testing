const purchase = {
  Electronix: [
    { name: 'laptop', price: 1500},
    { name: 'keyboard', price: 100},
    { name: 'usb-stick', price: 6 },
  ],
  Textile: [
    { name: 'bag', price: 50},
    { name: 'bagpack', price: 50},    
    { name: 'bag', price: 55},
    { name: 'bag', price: 52},
    { name: 'bag', price: 51},
  ]
}

const find = (goods, name) => {
  for(const cat in goods) {
    for (const tovar of goods[cat]) {
      if (tovar.name === name) {
        return tovar;
      }
    }
  }
}

console.dir(find(purchase, 'bag')); 