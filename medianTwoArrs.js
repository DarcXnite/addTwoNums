/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const total = 0
  const mergedArr = nums1.concat(nums2)
  mergedArr.sort((a, b) => a - b)

  if (mergedArr.length % 2 === 0) {
    //even add the two middle and divide by 2
    const mid = mergedArr.length / 2
    const ans = (mergedArr[mid] + mergedArr[mid - 1]) / 2
    return ans
  } else {
    // odd return the middle index
    return mergedArr[Math.floor(mergedArr.length / 2)]
  }
}
