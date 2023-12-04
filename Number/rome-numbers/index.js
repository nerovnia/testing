const romanToInt = (s) => {
  if (!(s.length > 0 && s.length <= 15)) {
    return "Out of range!";
  }
  const eq = new Map();

  eq.set("I", 1);
  eq.set("V", 5);
  eq.set("X", 10);
  eq.set("L", 50);
  eq.set("C", 100);
  eq.set("D", 500);
  eq.set("M", 1000);
  const res = s.split("").reduce((acc, curr, index) => {
    if (index > 0) {
      if (curr === "V" || curr === "X") {
        if (s[index - 1] === "I") acc -= 2;
      }
      if (curr === "L" || curr === "C") {
        if (s[index - 1] === "X") acc -= 20;
      }
      if (curr === "D" || curr === "M") {
        if (s[index - 1] === "C") acc -= 200;
      }
    }
    return (acc += eq.get(curr));
  }, 0);
  return res;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MMMDCCCLXXXVIII"));
/*

I             1
V             5
X             10
L             50
C             100
D             500
M             1000


Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
