/*
 * Підрахувати кількість входжень в рядок сполучення prog.
*/

'use strict'

const progCounter = (str, searchStr) => {
  if (typeof str !== 'string') return 0;
  let searchCounter = 0;
  let tempSearchCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if ((tempSearchCounter === 0) && (str[i] === searchStr[0])) {
      tempSearchCounter++;
      continue;
    }
    if ((tempSearchCounter !== 0) && (tempSearchCounter !== searchStr.length)) {
      if (searchStr[tempSearchCounter] === str[i])
        tempSearchCounter++;
      else  
        tempSearchCounter = 0;
    }
    if (tempSearchCounter === searchStr.length) {
      searchCounter++;
      tempSearchCounter = 0;
    }
}
  return searchCounter;
}
