/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapa = {}
  const mapb = {}

  for (let i = 0; i < s.length; i++) {
    if (mapa[s[i]]) {
      if (mapa[s[i]] !== t[i]) {
        console.log(false)
        return false
      }
    } else {
      mapa[s[i]] = t[i]
    }

    if (mapb[t[i]]) {
      if (mapb[t[i]] !== s[i]) {
        console.log(false)
        return false
      }
    } else {
      mapb[t[i]] = s[i]
    }
  }

  console.log(true)
  return true
}
