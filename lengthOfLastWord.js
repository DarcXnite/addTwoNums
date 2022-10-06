/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const wordArr = s.split(' ')
  const filteredWordArr = wordArr.filter(el => el != '')
  const lastWord = filteredWordArr[filteredWordArr.length - 1]
  return lastWord.length
}
