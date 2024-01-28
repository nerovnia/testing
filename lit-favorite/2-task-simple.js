/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea1 = function(height) {
  const resarr = [];
  for(let i = 0; i < height.length; i++) {
    for(let j = i + 1; j < height.length; j++) {
      resarr.push(Math.min(height[i], height[j]) * (j - i));
    }
  }
  return Math.max(...resarr);
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))