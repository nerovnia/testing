/*
 *  Add array elements with number
*/

let arr1 = [9,9,9,9,9,9,9,9,9];

const sum = (arr_term1, term2) =>{
  const arr_term2 = term2.toString().split('').map(n => Number.parseInt(n));
  
  let acc = 0;
  for (let i = arr_term1.length - 1, j = arr_term2.length -1; i >= 0; i--, j--) {
    let num = arr_term1[i] + acc;
    acc = 0;
    if (j >= 0) num+=arr_term2[j];
    if (num > 9) {
      acc += 1;
      arr_term1[i] = num - 10;
      continue;
    }
    arr_term1[i] = num;
  }
  if (acc > 0) arr_term1 = [1, ...arr_term1];
  return [...arr_term1];
}

console.log(sum(arr1, 7));

