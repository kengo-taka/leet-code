var longestPalindrome = function (s) {

  let array = s.split("")

  if (array.length === 1) {
    return s
  } else {
    let max = 0
    let output = []
    for (i = 0; i <= array.length - 1; i++) {
      for (j = i; j <= array.length - 1; j++) {
        let array1 = array.slice(i, j + 1).join("")
        let array2 = array.slice(i, j + 1).reverse().join("")
        if (array1 === array2 && array.slice(i, j + 1).length > max) {
          max = array.slice(i, j + 1).length
          output = array.slice(i, j + 1).join("")
        }
      }
    }
    return output
  }
};

s = "babad"

console.log(longestPalindrome(s))