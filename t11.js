num = 18

let arr = [];

const bin = (num) => {
  if(num < 2) {
    arr.unshift(num);
    return num;
  } else {
    arr.unshift(num % 2);
    bin(Math.floor(num / 2));
  }
}
bin(85);
console.log(arr.join(''))



function binary(decimal) {
  let arr = [];
  
  const bin = (num) => {
    if(num < 2) {
      arr.unshift(num);
      return num;
    } else {
      arr.unshift(num % 2);
      bin(Math.floor(num / 2));
    }
  }
    bin(decimal);
    return arr.join('');
  }