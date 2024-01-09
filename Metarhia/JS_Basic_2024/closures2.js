const add = (x) => {
  let a = 0;
  return (y) => {
    const z = ++a + x + y;
    return z;
  }
}

const res = add(2);
console.log(res(3));
console.log(res(3));
console.log(res(3));
console.log(res(3));
console.log(res(3));
console.log(res(3));
