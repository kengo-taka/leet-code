var isPowerOfThree = function (n) {
  if (n === 0) {
    return false
  }

  if (n === 1) {
    return true
  }

  while (n >= 3) {

    if (n / 3 === 1 && n % 3 === 0) {
      return true
    }
    n = n / 3
  }
  return false
};

var n = 27
console.log(isPowerOfThree(n))