const arr = [[1,2],[3,4],[5,6]];
const reduceFn = (result, current ) => result.concat(current);
let final = arr.reduceRight(reduceFn);
final = arr.reduce(reduceFn);
console.log(final);