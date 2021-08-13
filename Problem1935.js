var canBeTypedWords = function (text, brokenLetters) {

  let array1 = text.split(" ")
  let array2 = brokenLetters.split("")
  let check = []

  for (i = 0; i <= array1.length - 1; i++) {
    check.push(true)
  }

  for (i = 0; i <= array2.length - 1; i++) {
    for (j = 0; j <= array1.length - 1; j++) {
      if (array1[j].includes(array2[i])) {
        check[j] = false
      }
    }
  }

  let count = 0
  for (i = 0; i <= check.length - 1; i++) {
    if (check[i] === true) {
      count += 1
    }
  }

  return count
};

let text = "leet code"
let brokenLetters = "lt"
console.log(canBeTypedWords(text, brokenLetters))