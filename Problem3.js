var lengthOfLongestSubstring = function (s) {

  let array = s.split("")

  if (array.length === 0 || array.length === 1) {
    return array.length
  } else {
    let max = 1
    check: for (i = 0; i <= array.length - 1; i++) {
      for (j = i + 1; j <= array.length - 1; j++) {
        let k = new Set(array.slice(i, j + 1))
        if (k.size !== array.slice(i, j + 1).length) {
          continue check
        } else if (max < array.slice(i, j + 1).length) {
          max = array.slice(i, j + 1).length
        }
      }
    }
    return max
  }
};

s = "aab"

console.log(lengthOfLongestSubstring(s))