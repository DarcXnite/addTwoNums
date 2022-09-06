/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = String(x).split('').map(str => Number(str))
    const rev = []
    for(let i = 1;i <= arr.length;i++) {
        rev.push(arr[arr.length - i])
    }
    let xString = x.toString()
    let num = rev.join('')
    if(xString === num) {
        return true
    } else {
        return false
    }
};