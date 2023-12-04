// OCR Numbers
// https://exercism.org/tracks/javascript/exercises/ocr-numbers/edit
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (arg) => {
  const map = new Map();
  map.set(" _ \n| |\n|_|\n   ", "0");
  map.set("   \n  |\n  |\n   ", "1");
  map.set(" _ \n _|\n|_ \n   ", "2");
  map.set(" _ \n _|\n _|\n   ", "3");
  map.set("   \n|_|\n  |\n   ", "4");
  map.set(" _ \n|_ \n _|\n   ", "5");
  map.set(" _ \n|_ \n|_|\n   ", "6");
  map.set(" _ \n  |\n  |\n   ", "7");
  map.set(" _ \n|_|\n|_|\n   ", "8");
  map.set(" _ \n|_|\n _|\n   ", "9");

  arg.split("\n").map((number) => {
    for (const i = 0; i < number.length / 3; i + 3) {
      console.log(number.substring(i, i + 3));
    }
  });
  //console.log(arg.split("\n"));

  if (Array.isArray(arg)) {
    return arg.map((number) => map.get(number));
  }
  return map.get(arg);
};
