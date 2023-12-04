const createId = () => {
  let id = 0;
  return () => id++;
}

const getId = createId();

console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());
