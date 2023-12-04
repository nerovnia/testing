/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const reg = /[+|-]*[.]*\d+/;
  const str = reg.exec(s)[0];
  console.log(str);
  //const str = s.trim();
  let res = 0;
  let powInd = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    res += s[i] * Math.pow(10, powInd);
    powInd--;
  }
  return res;
};

console.log(myAtoi("123456"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
