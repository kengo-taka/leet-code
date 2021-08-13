var areAlmostEqual = function (s1, s2) {

  if (s1 === s2) {
    return true
  }

  let array1 = s1.split("")
  let array2 = s2.split("")
  let check = []

  for (i = 0; i <= array1.length - 1; i++) {
    if (array1[i] !== array2[i]) {
      check.push(i)
    }
  }

  if (check.length >= 3 || check.length === 1) {
    return false
  }

  if (s1[check[0]] === s2[check[1]] &&
    s1[check[1]] === s2[check[0]]) {
    return true
  } else {
    return false
  }
};

let s1 = "attack"
let s2 = "defend"

console.log(areAlmostEqual(s1, s2))