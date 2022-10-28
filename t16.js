/**
 * Remove duplicates in array
 * @param {*} arr 
 * @returns []
 */

const removeDuplicates = (arr) => [... new Set(arr)];

console.log(removeDuplicates([1,3,5,7,5,4,0,7,12,23,53,5,67,98,657,43,645,3]));