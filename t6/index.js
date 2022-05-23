/*
  Read Symbol property
*/

const obj = {
  f: "sakjhkas",
  'second param': 8
}

const t = Symbol.for("second param");
console.log(obj['second param']);
console.log(obj[Symbol.keyFor(t)]);
