var threeConsecutiveOdds = function (arr) {

  if (arr.length < 3) {
    return false
  }

  for (i = 0; i <= arr.length - 3; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true
    }
  }
  return false
};

let arr = [1, 2, 34, 3, 4, 5, 7, 23, 12]
console.log(threeConsecutiveOdds(arr))