/*
 *  Add array elements with number 0-9
*/

let arr1 = [9,9,9,9,9,9,9,9,9];

const sum = (arr, term) =>{
  let acc = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let num = arr[i] + acc;
    acc = 0;
    if (i === arr.length - 1) num+=term;
    if (num > 9) {
      acc += 1;
      arr[i] = num - 10;
      continue;
    }
    arr[i] = num;
  }
  if (acc > 0) arr = [1, ...arr];
  return [...arr];
}

console.log(sum(arr1, 4));