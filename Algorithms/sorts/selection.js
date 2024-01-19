/*
  Алгоритм сортировки выбором:
  Алгоритм сортировки выбором находит наименьший элемент в массиве и помещает его в начало. 
  Затем он находит следующий наименьший элемент и помещает его на следующую позицию, и так далее, 
  пока все элементы не будут упорядочены.
*/

'use strict'

const { getrandarr } = require("./getrandarr.js");

const sort = (arr) => {
  const resarr = [...arr];
  for (let i = 0; i < resarr.length; i++) {
    let minval = resarr[i];
    let posminval = i;
    for (let j = i; j < resarr.length; j++) {
      if (resarr[j] < minval) {
        minval = resarr[j];
        posminval = j;
      }
    }
    if (posminval === i) continue;
    resarr[i] += minval;
    resarr[posminval] = resarr[i] - minval;
    resarr[i] -= resarr[posminval]; 
  }
  return [...resarr];
}

const arr1 = getrandarr(500, 15, 800);

console.log(arr1);
console.log(sort(arr1));