var isValid = function (s) {

  let array = s.split("")

  let check = true

  check: while (check) {
    for (i = 0; i <= array.length - 2; i++) {
      if (array[i] === "{" && array[i + 1] === "}") {
        array.splice(i, 2)
        continue check
      }

      if (array[i] === "[" && array[i + 1] === "]") {
        array.splice(i, 2)
        continue check
      }


      if (array[i] === "(" && array[i + 1] === ")") {
        array.splice(i, 2)
        continue check
      }
    }
    check = false
  }

  if (array.length === 0) {
    return true
  } else {
    return false
  }

};

let s = "()[]{}"
console.log(isValid(s))