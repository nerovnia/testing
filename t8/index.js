/**
 * Realisation function some for Array
 */

const some = (arr) => {
  for(e of arr) {
    if(e === 'Java') 
      return true;
  }
  return false;
}

const someArr = (arr) => {
  const retArr = [];
  for(let i=0; i< arr.length; i++) {
    if(e === 'Java') 
      return true;
  }
  return false;
}



console.log(some(['C++','C','Java','Perl','Python']));
console.log(some(['C++','C','TypeScript','Perl','Python']));