var sortColors = function (nums) {
  let zeros = 0
  let ones = 0
  let twos = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros += 1
    } else if (nums[i] === 1) {
      ones += 1
    } else {
      twos += 1
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (zeros !== 0) {
      nums[j] = 0
      zeros--
    } else if (ones !== 0) {
      nums[j] = 1
      ones--
    } else {
      nums[j] = 2
      twos--
    }
  }

  console.log(nums)
}

sortColors([2, 0, 2, 1, 1, 0])
