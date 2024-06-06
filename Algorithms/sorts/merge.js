'use strict'

const { getrandarr } = require("../../utils/arr.js");

const merge = (arr1, arr2) => {
  let arr = [];
  if(arr1[arr1.length - 1] < arr2[0]) {
    return [...arr1, ...arr2];
  }
  if(arr2[arr2.length - 1] < arr1[0]) {
    return [...arr2, ...arr1];
  }
  for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = 0; j < arr1.length - 1; j++) {
      if (i < arr1.length - 1) {

    }
      if (arr2[i] < arr1[j]) {
//        arr = [...arr2.slice(0, i), arr1[j], ...arr2.slice(i), ...arr1.slice(j)];
//        arr = [...arr1.slice(0, j), arr2[i], ...arr1.slice(j), ...arr2.slice(i)];
//console.log(arr1);
//console.log(arr2);
//console.log(arr);
        break;
      }
    }
    if (arr2.length > arr1.length) {
      arr = [...arr, arr2.slice(arr1.length)]
    }
  }
  return [...arr];
}


const sort = (arr) => {
  const resarr = []
  if (arr.length === 1) return arr;
  const part1 = arr.slice(0, Math.floor(arr.length/2));
  const part2 = arr.slice(Math.floor(arr.length/2));
  //console.log(part1);
  //console.log(part2);

  const rarr1 = sort(part1);
  const rarr2 = sort(part2);

  console.log(rarr1);
  console.log(rarr2);


  return merge(rarr1, rarr2);

  //return rarr1; 
}

const arr1 = getrandarr(10, 15, 800);

console.log(arr1);
console.log(sort(arr1));

module.exports = { sort };