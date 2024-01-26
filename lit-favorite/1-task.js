/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
  if (numRows === 1) {
      return s;
  }

  const table = new Array(numRows).fill("");
  let isBeginning = false;
  let ptr = 0;

  for (let i = 0; i < s.length; i++) {
      if ((ptr === 0) || ptr === numRows - 1){
          isBeginning = !isBeginning;
      }

      if (ptr < numRows && isBeginning) {
          table[ptr] += s[i];
          ptr += 1;
      }

      if (!isBeginning) {
          table[ptr] += s[i];
          ptr -= 1;
      }
  }

  return table.join("");
};


console.log(convert("PAYPALISHIRING", 4));
