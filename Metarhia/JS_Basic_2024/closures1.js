function add(x) {
  let a = 0;
  function closure (y) {
    return ++a + x  + y;
  }
  return closure;
}

let result = add(3)(5);
result = add(30)(5);

const res = add(3);
console.log(res(8));
console.log(res(18));
