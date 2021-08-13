var letterCombinations = function (digits) {

  if (digits === "") {
    return []
  }

  let array2 = ["a", "b", "c"]
  let array3 = ["d", "e", "f"]
  let array4 = ["g", "h", "i"]
  let array5 = ["j", "k", "l"]
  let array6 = ["m", "n", "o"]
  let array7 = ["p", "q", "r", "s"]
  let array8 = ["t", "u", "v"]
  let array9 = ["w", "x", "y", "z"]

  let temp = digits.split("")
  let array = [[], [], [], []]

  for (i = 0; i <= temp.length - 1; i++) {
    switch (temp[i]) {
      case "2":
        array[i] = array2
        break
      case "3":
        array[i] = array3
        break
      case "4":
        array[i] = array4
        break
      case "5":
        array[i] = array5
        break
      case "6":
        array[i] = array6
        break
      case "7":
        array[i] = array7
        break
      case "8":
        array[i] = array8
        break
      case "9":
        array[i] = array9
        break
    }
  }

  let output = []

  for (i = 0; i <= array[0].length - 1; i++) {
    if (digits.length === 1) {
      output.push(array[0][i])
    }
    for (j = 0; j <= array[1].length - 1; j++) {
      if (digits.length === 2) {
        output.push(array[0][i] + array[1][j])
      }
      for (k = 0; k <= array[2].length - 1; k++) {
        if (digits.length === 3) {
          output.push(array[0][i] + array[1][j] + array[2][k])
        }
        for (m = 0; m <= array[3].length - 1; m++) {
          if (digits.length === 4) {
            output.push(array[0][i] + array[1][j] + array[2][k] + array[3][m])
          }
        }
      }
    }
  }
  return output
};

let digits = "2345"
console.log(letterCombinations(digits))