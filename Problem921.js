var minAddToMakeValid = function (s) {

  let array = s.split("")
  let check = true

  if (s === "(" || s === ")") {
    return 1
  } else if (s === "()") {
    return 0
  } else {
    check : while (check) {

      for (i = 0; i <= array.length - 2; i++) {
        if (array[i] === "(" && array[i + 1] === ")") {
          array.splice(i, 2)
          continue check
        }
      }
      console.log(array)

      check = false
    }
  }

  return array.length
};

s = "()()"

console.log(minAddToMakeValid(s))