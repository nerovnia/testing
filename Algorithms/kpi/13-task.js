/* 
 * Вивести символи першого слова , яке починається на “a”.
*/

const outAWord = (str) => {
  const arr = [];
  for(let i = str.indexOf('a'); i < str.length; i++) {
    if (str[i] !== ' ') {
      arr.push(str[i]);
    } else break;
  }
  return arr.join('');
}
