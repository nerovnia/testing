/*
* Plus Minus
*/

function PlusMinus(num) {
  if(isNaN(num) || (Number(num) < 10))
    return 'not possible';
  const arr = num.toString().split('').map(el=> Number(el));
  let strBin = ''.padStart(arr.length-1, '1');
  let int = Number.parseInt(strBin,2);
  const resArr = [];
  const zeroArr = [];
  for(let i = 0; i < int; i++) {
    let accum = 0;
    let znArr = i.toString(2).padStart(arr.length, '0');
    arr.forEach((el, ind) => {
      if(ind <= znArr.length) {
        if(ind === 0) {
          accum = el;
        } else {
          if(znArr[ind] === '1') {
            accum += el; 
          } else {
            accum -= el;
          }
        }
      }
    })
    let strZn = znArr.substring(1).replaceAll('0', '-').replaceAll('1', '+')
    if(accum === 0) zeroArr.push({amount: [...strZn.matchAll(/\-/g)].length, str: strZn});
    resArr.push(accum);
  }

  if(zeroArr.length === 0) {
    return 'not possible';
  } else {
    return zeroArr.reduce((prev, curr)=> (prev.amount > curr.amount) ? prev : curr).str;
  }
}

// keep this function call here 
const num = 26712;
console.log("Input:" + num);
console.log('Output: '+ PlusMinus(num))


console.log();

