/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let isubstr = null;
  let res = null;
  for (let i = 0; i< haystack.length; i++) {
    if (isubstr) isubstr++;
    if (!isubstr && (haystack[i] === needle[0])) {
      isubstr = 0;
      trs = i;
    }

  }
  console.dir(needleMap);
};


console.log(strStr('sadbutsad', 'sad'))

/*
const needleMap = new Map();
for(let i = 0; i < needle.length; i++) {
  needleMap.set(needle[i], [...(needleMap.get(needle[i])) ?? [], i])
}
*/