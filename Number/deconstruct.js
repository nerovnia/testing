function deconstruct(number) {
  let sign = 1;
  let coefficient = number;
  let exponent = 0;
  if (coefficient < 0) {
    coefficient = -coefficient;
    sign = -1;
  }
  if(Number.isFinite(number) && number !== 0) {
    exponent = -1128;
    let reduction = coefficient;
    while (reduction !== 0) {
      exponent += 1;
      reduction /=2;
    }
    reduction = exponent;
    while (reduction > 0) {
      coefficient /= 2;
      reduction -=1;
    }
    while(reduction < 0) {
      coefficient *= 2;
      reduction +=1;
    }
  }
  return {
    sign,
    coefficient,
    exponent,
    number,
    num: sign * coefficient * (2 ** exponent)
  };
}

//const num = Number.MAX_SAFE_INTEGER;
//const num = 1;
//const num1 = 0.3;
const num2 = 100/3;
//const a = deconstruct(num1);
const b = deconstruct(num2);
//console.log(a);
console.log(b);
/*

9007199254740991
9007199254740991
9007199254740991
9007199254740991

7205759403792794,
7205759403792794

*/