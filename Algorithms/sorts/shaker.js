const { getrandarr } = require("./getrandarr.js");
const arr1 = getrandarr(100, 5, 80);

const sort = (arr) => {
  const resarr = [...arr];
  let changed = false;
  let i = 0;
  let znak = true;
  while (true) {
    if (i < 0) {
      i = arr.length -2;
      znak = false;
      if (!changed) break;
      changed = false;
    }
    if (i > arr.length - 2) {
      i = 0;
      znak = false;
      if (!changed) break;
      changed = false;
    }
    if(znak = true) {
      i++
    } else {
      i--;
    }
    if (arr[i] > arr1[i] + 1) {
      arr[i] += arr[i + 1];
      arr[i + 1] += arr[i] - arr[i + 1];
      arr[i] = arr[i] - arr[i + 1];
      changed = true;
    }
  }
  return [...resarr]; 
}



console.log(arr1);
console.log(sort(arr1));