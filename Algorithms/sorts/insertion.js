let arr1 = [51, 28, 52, 42, 31, 18, 77, 28, 58, 62, 81, 46, 53, 34, 72, 38, 33, 36, 39, 94, 69];

const setInRightPlace = (arr, value) => {
  const res = [...arr];
  for (let i = res.length - 1; i >= 0 ; i--) {
    if (res[i] < value) return [...res.slice(0, i + 1), value, ...res.slice(i + 1, res.length)];
  }
  return [value, ...res];
}

const sort = (arr) => {
  let res = [...arr];
  for(let i = 1; i < res.length; i++) {
    res = [...setInRightPlace(res.slice(0, i), res[i]), ...res.slice(i+1)];
  }
  return [...res];
}

console.log(sort(arr1));
