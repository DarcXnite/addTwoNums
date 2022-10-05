/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let ans = nums.indexOf(target)

  if (ans === -1) {
    nums.push(target)
    nums.sort((a, b) => a - b)
    return nums.indexOf(target)
  } else {
    return ans
  }
}
