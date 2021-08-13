var romanToInt = function (s) {
  let count = 0

  let array = s.split("")

  while (array[0] === "M") {
    array.shift()
    count += 1000
  }

  while (array[0] === "C" && array[1] === "M") {
    array.shift()
    array.shift()
    count += 900
  }

  while (array[0] === "D") {
    array.shift()
    count += 500
  }

  while (array[0] === "C" && array[1] === "D") {
    array.shift()
    array.shift()
    count += 400
  }

  while (array[0] === "C") {
    array.shift()
    count += 100
  }

  while (array[0] === "X" && array[1] === "C") {
    array.shift()
    array.shift()
    count += 90
  }

  while (array[0] === "L") {
    array.shift()
    count += 50
  }

  while (array[0] === "X" && array[1] === "L") {
    array.shift()
    array.shift()
    count += 40
  }

  while (array[0] === "X") {
    array.shift()
    count += 10
  }

  while (array[0] === "I" && array[1] === "X") {
    array.shift()
    array.shift()
    count += 9
  }

  while (array[0] === "V") {
    array.shift()
    count += 5
  }

  while (array[0] === "I" && array[1] === "V") {
    array.shift()
    array.shift()
    count += 4
  }

  while (array[0] === "I") {
    array.shift()
    count += 1
  }

  return count
};

let s = "LVIII"

console.log(romanToInt(s))