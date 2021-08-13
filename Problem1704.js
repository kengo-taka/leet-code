var halvesAreAlike = function (s) {

  let array = s.toLowerCase().split("")
  let count1 = 0
  let count2 = 0

  for (i = 0; i <= array.length / 2 - 1; i++) {
    if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u") {
      count1 += 1
    }
  }

  for (i = array.length / 2 ; i <= array.length - 1; i++) {
    if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u") {
      count2 += 1
    }
  }

  if (count1 === count2) {
    return true
  } else {
    return false
  }
};

let s = "book"
console.log(halvesAreAlike(s))