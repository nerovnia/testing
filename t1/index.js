/*
* Plus Minus
*/

function PlusMinus(num) {
  if(isNaN(num) || (Number(num) < 10))
    return 'not possible';
  let rsa = [];  // Result sign array
  let arr = num.toString().split('');
  // Розрахунок кількості варіантів
  let  arr_zn = [];
  // Формування масиву всіх можливих варіантів знаків
  for(let i=0; i < (1 << arr.length-1); i++) {
    arr_zn.push(i.toString(2).padStart(arr.length - 1, '0'));
  }
  // Визначення випадку коли арифметичні операції з числами дають нуль
  arr_zn.forEach(sz => {
    let t = sz.replace(/0/g, '+').replace(/1/g, '-');
    sz = ('0' + sz).split('');
    console.log(sz);
    let res = arr.reduce((p, n) => {
      console.log(`${p} ${sz[0]} ${Number(n)}`);
      return (Number(sz.shift()) != 0) ? p - Number(n) : p + Number(n);
    }, 0);
    if(res == 0)
      rsa.push(t);
    console.log(res);
  })
  // Вибір і видача єдиного правильного результату
  console.log(`Кількість варіантів: ${rsa.length}`);
  if(rsa.length == 0)
    return 'not possible';
  else if(rsa.length > 1) {
    let maxsub = 0;
    let zn_str = '';
    rsa.forEach(szn => {
      let max = 0;
      szn.split('').forEach(zn => {
        if(zn === '1')
          max++;
      });
      if(max > maxsub) {
        maxsub = max;
        zn_str = szn;
      }
    })
    return zn_str;//.replace(/0/g, '+').replace(/1/g, '-');
  } else
    return rsa[0];//.replace(/0/g, '+').replace(/1/g, '-');
}

// keep this function call here 
//console.log(PlusMinus(26712));

console.log(PlusMinus(26712));