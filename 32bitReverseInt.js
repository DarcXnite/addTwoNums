/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = ''
  let temp = x.toString().split('')
  if (x === 0) {
    return 0
  }
  if (x < 0) {
    temp.shift()
    rev = '-' + temp.reverse().join('')
    if (Number(rev) < Math.pow(-2, 31)) {
      return 0
    } else {
      return Number(rev)
    }
  }

  if (x > 0) {
    rev = temp.reverse()
    for (let i = 0; i < temp.length; i++) {
      if (rev[i] !== 0) {
        rev = temp.join('')
      } else {
        temp.shift()
      }
    }
    if (Number(rev) > Math.pow(2, 31)) {
      return 0
    } else {
      return Number(rev)
    }
  }
}
useEffect(() => {
  first

  return () => {
    second
  }
}, [third])
