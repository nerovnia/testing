/*
* Speed sort
*/

let arrInt = [54,68,1,32,77,5,9,3,8,9,4,4,7,65,8,11,37,96,7,44];
let arrSort = [];
function rand(max) {
  return Math.floor(Math.random() * max);
}

let sort = (arr) => {
  if(arr.length < 2) return arr[0];
  let num = rand(arr.length);
  let arrMin = [];
  let arrMax = [];
  let arrRes = [];
  arr.forEach(el => {
    if(el <= arr[num] )
      arrMin.push(el);
    else
      arrMax.push(el);
  })
  if(arrMax)
}