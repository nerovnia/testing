'use strict'

const arr1 = [3,5,8,5,4,8,5,8,95,4,55,4,6,34,75,456,7867,54,4];

const sort = (arr) => {
  let changed = false;
  for (let i = 0; i < arr.length; i++) {
    if(i < arr.length && arr[i] > arr[i + 1]) {
      arr[i] += arr[i + 1];
      arr[i + 1] = arr[i] - arr[i + 1];
      arr[i] -= arr[i + 1];
      changed = true;
    }
  }
  if (changed) sort(arr);
  return [...arr]
}

console.log(sort([...arr1]));