/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1 || n === 0) return 1

  let firstSum = 1
  let secondSum = 2

  for (let i = 3; i <= n; i++) {
    let thirdSum = firstSum + secondSum
    firstSum = secondSum
    secondSum = thirdSum
  }
  return secondSum
}
