var isThree = function (n) {

  let array = []

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      array.push(i)
    }
  }

  if (array.length === 3) {
    return true
  } else {
    return false
  }

};

let n = 17
console.log(isThree(n))