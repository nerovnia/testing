/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let i1 = 0;
  let i2 = 0;
  const arr = [];
  while (i1 < nums1.length || i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      arr.push(nums1[i1]);
      i1++;
    } else {
      arr.push(nums2[i2]);
      i2++;
    }
  }
  console.log(arr);
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  }
  return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1]) / 2;
};


//console.log(findMedianSortedArrays([1,3],[2,7]));

//console.log(findMedianSortedArrays([1,2],[3,4]));
console.log(findMedianSortedArrays([1, 4, 9, 25, 30, 48, 81],[6, 14, 27, 32, 58, 92, 97, 109]));
//console.log(findMedianSortedArrays([25, 30],[6, 14, 27, 32, 58, 92, 97, 109]));
