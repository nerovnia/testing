/* 
 * Вивести знаки арифметичних операцій, які входять в рядок символів, у зворотному порядку.
*/

const znSet = new Set(['+', '-', '/', '*']);

const arev = (str) =>{
  let arr = {
    zn: [],
    pos: [],
  }
  if (typeof str !== 'string') return ''; 
  for (let i = 0; i < str.length; i++) {
    if (znSet.has(str[i])) {
      arr.zn.push(str[i]);
      arr.pos.push(i);
    }
  }
  arr.pos = arr.pos.reverse();
  const arrStr = str.split('');
  for (let i = 0; i < arr.pos.length; i++) {
    arrStr[arr.pos[i]] = arr.zn[i];
  }
  return arrStr.join('');
}
