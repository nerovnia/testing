const set = new Set([1,2,3,4,5]);
const map = new Map([
  [ 1, 'fbvcvb'],
  [ 2, 'sddsfsd'],
  [ 3, 'vb'],
  [ 4, 'dfgrte'],
  [ 5, 'cxvcv'],
  [ 6, 'ertet'],
  [ 7, 'werwe'],
  [ 8, 'werfg'],
  [ 9, 'sdfewr'],
]);
const arrMap = [
  { key: 1, name: 'fbvcvb'},
  { key: 2, name: 'sddsfsd'},
  { key: 3, name: 'vb'},
  { key: 4, name: 'dfgrte'},
  { key: 5, name: 'cxvcv'},
  { key: 6, name: 'ertet'},
  { key: 7, name: 'werwe'},
  { key: 8, name: 'werfg'},
  { key: 9, name: 'sdfewr'},
];
for (const item of arrMap) {
  map.set(item.key, item.name);
}

console.dir(set.entries());
console.dir(map.entries());
