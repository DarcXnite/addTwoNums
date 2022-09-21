/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let temp = 0
  for (let i = 0; i < nums.length; i++) {
    if (temp !== nums[i]) {
      temp = nums[i]
    }
  }
}
