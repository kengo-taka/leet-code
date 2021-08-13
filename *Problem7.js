var reverse = function (x) {

  if (x > 2147483647 || x < -2147483648) {
    return 0
  }
  let str = x.toString()
  let array = str.split("").reverse()

  if (array.length === 1) {
    return array[0]
  } else {
    while (array[0] === "0") {
      array.shift()
    }
  }
  if (array[array.length - 1] === "-") {
    array.splice(array.length - 1, 1)
    array.unshift("-")
  }
  return array.join("")
};

let x = -321

console.log(reverse(x))