var largestOddNumber = function (num) {

  let array = num.split("")
  let answerIndex = -1


  for (i = array.length - 1; i >= 0; i--) {
    if (Number(array[i]) % 2 === 1) {
      answerIndex = i
      break
    } else {
      continue
    }
  }

  if (answerIndex === -1) {
    return ""
  } else {
    return num.substr(0, answerIndex + 1)
  }

};

let num = "354272"

console.log(largestOddNumber(num))