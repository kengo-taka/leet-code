var areOccurrencesEqual = function (s) {

  let array1 = s.split("")
  let array2 = Array.from(new Set(array1))
  let count = []

  for (i = 0; i <= array2.length - 1; i++) {
    count.push(0)
  }

  for (i = 0; i <= array2.length - 1; i++) {
    for (j = 0; j <= array1.length - 1; j++) {
      if (array2[i] === array1[j]) {
        count[i] += 1
      }
    }
  }

  for (i = 0; i <= count.length - 1; i++) {
    if (count[0] !== count[i]) {
      return false
    }
  }
  return true
};

let s = "aaabb"
console.log(areOccurrencesEqual(s))