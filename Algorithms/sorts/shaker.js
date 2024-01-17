'use strict'

const { getrandarr } = require("./getrandarr.js");
const arr1 = getrandarr(100, 15, 800);

const sort = (arr) => {
  const resarr = [...arr];
  let changed = true;
  let i = 0;
  let znak = true;
  while (true) {
    if (i < 1) {
      znak = true;
      if (!changed) break;
      changed = false;
    }
    if (i > resarr.length - 2) {
        znak = false;
      if (!changed) break;
      changed = false;
    }
    (znak) ? i++ : i--;
    if (resarr[i] > resarr[i + 1]) {
      resarr[i + 1] += resarr[i];
      resarr[i] = resarr[i + 1] - resarr[i];
      resarr[i + 1] = resarr[i + 1] - resarr[i];
      changed = true;
    }
  }
  return [...resarr]; 
}

console.log(sort(arr1));