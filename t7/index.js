/** 
 * Function filter
*/

const filter = (arr, func) => {
  let newArr = [];
  arr.forEach(el => {
    if(func(el)) {
      newArr.push(el);
    }
  });
  return newArr;
}

console.log(filter(['c','n','a','y','a','r','w','t','a','b'], (el) => el === 'a'));