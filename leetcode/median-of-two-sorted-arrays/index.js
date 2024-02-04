/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  return (nums1.reduce((acc, el) => acc + el, 0)  + nums2.reduce((acc, el) => acc + el, 0)) / (nums1.length + nums2.length);
};
