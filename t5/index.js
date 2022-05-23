/*
  isPrime
*/


function ismyPrime(num) {
  if (num < 2) return false;
  for(let i = 2; i < num; i++) {
    if(num % i == 0) return false;
  }
  return true;
}



function iswikiPrime(num) {
  if (num <= 3) {
      return num > 1;
  } else if (num % 2 == 0 || num % 3 == 0) {
      return false;
  } else {
      for (let i = 5; i * i <= num; i += 6) {
        console.log(i);
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
      }
      return true;
  }
}

console.log('******************** Test 1 ****************************');
[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113 , 127, 131, 137, 139, 149].forEach(e => {
  console.log(`${e} ${isPrime(e)}`);
})


console.log('******************** Test 2 ****************************');
[0,1,2,73,75,-1].forEach(e => {
  console.log(`${e} ${isPrime(e)}`);
})

console.log('******************** Test 3 ****************************');
[3,5,7,41,5099].forEach(e => {
  console.log(`${e} ${isPrime(e)}`);
})

console.log('******************** Test 4 ****************************');
[4,6,8,9,45,-5,-8,-41].forEach(e => {
  console.log(`${e} ${isPrime(e)}`);
})
