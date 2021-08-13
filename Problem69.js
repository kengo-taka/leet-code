var mySqrt = function (x) {
  if (x === 0) {
    return 0
  }

  for (i = 0; i <= x; i++) {
    if (x === i*i) {
      return i
    } else if (x < i * i) {
      return i - 1
    } else {
      continue
    }
  }
};

var x = 8
console.log(mySqrt(x))