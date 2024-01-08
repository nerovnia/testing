/*
const add = (a,b,callback) => callback(a + b);

const res = add(2, 4, (res) => {
  console.log(res);
})

console.log(res);
*/

const add = (a,b,callback) => callback(a + b);

const res = add(2, 4, (res) => {
  console.log(res);
  return res;
})

console.log(res);