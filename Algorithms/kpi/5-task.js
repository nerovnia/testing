/* 
 * Підрахувати кількість цифр у заданому реченні.
*/

const countNumbers = (str) => {
  if (typeof str !== 'string') return 0;
  let counter = 0;
  for(const letter of str) {
    if (!Number.isNaN(Number.parseInt(letter))) counter++;
  }
  return counter;
}
