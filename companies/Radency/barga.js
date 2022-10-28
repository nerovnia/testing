/*
Завдання і виконання
https://docs.google.com/document/d/e/2PACX-1vSyEz3j5WbXS9TfccYpwI5Eogd4oaNAbj-wTyNs7NQ7BbKCgqGUz-nk7gkjrBSRaBgeGJefu1eDPzMv/pub
*/

function getWithMaxBorts(levels, maxHeight, stPos, endPos) {
  let sumLevels = 0;
  for (let i = stPos; i < endPos; i++) {
    sumLevels += levels[i];
  }
  return (endPos - stPos) * maxHeight - sumLevels;
}

function fromMinToMax(levels, maxLevels) {
  let maxLeftBort = levels[0];
  let res = 0;
  for(let i = 1; i < maxLevels.positions[0]; i++) {
    if (maxLeftBort > levels[i]) {
      res += maxLeftBort - levels[i];
    } else {
      maxLeftBort = levels[i];
    }
  }
  return res;
}

function fromMaxToMin(levels, maxLevels) {
  let maxLeftBort = levels[levels.length-1];
  let res = 0;
  for(let i = levels.length-1; i > maxLevels.positions[maxLevels.positions.length-1]; i--) {
    if (maxLeftBort > levels[i]) {
      res += maxLeftBort - levels[i];
    } else {
      maxLeftBort = levels[i];
    }
  }
  return res;
}

function loadGrain(levels) {
  let res = 0;
  if(levels.length <= 2) {
    return 0;
  }

  let maxLevels = {
    max: 0,
    positions: []
  };
  // Визначення максимумів
  levels.forEach((level, id) => {
    if(level > maxLevels.max) {
      maxLevels.max = level;
      maxLevels.positions = [];
    }
    if(level === maxLevels.max) {
      maxLevels.positions.push(id);
    }
  });
  
  // Визначення кількості одиниць зерна між однаковими максимальними рівнями
  if (maxLevels.positions.length > 1) {
    for(let i = 0; i < maxLevels.positions.length-1; i++) {
      res += getWithMaxBorts(levels, maxLevels.max, maxLevels.positions[i], maxLevels.positions[i+1]);
    }
  }

  // Розрахунок лівої та правої частини
  res += fromMinToMax(levels, maxLevels);
  res += fromMaxToMin(levels, maxLevels);

  return res;
}



// Test left max
//loadGrain([2,1,3,0,5,2,7]) //  my

// Test Right max

// Test Between max



//loadGrain([2,5,3,0,2,6,2,0,4,0,3,6,1,3,1]) //  my
//loadGrain([2,0,3,0,2,6,2,0,6,0,3,6,1,3,1]) //  my
//loadGrain([7,0,1,0,2,6,2,0,5,0,3]) //  my

// console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
// console.log(loadGrain([4, 1, 3])); // 2
// console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
// console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
// console.log(loadGrain([2, 4, 2])); // 0
// console.log(loadGrain([7, 4])); // 0
// console.log(loadGrain([])); // 0
// console.log(loadGrain([0, 1, 0])); // 0



console.log(loadGrain([4, 1, 3])); // 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6
console.log(loadGrain([2, 4, 2])); // 0
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([])); // 0
