var isPalindrome = function (x) {

  let str = x.toString()

  if (str[0] === "-" || (str[str.length - 1] === "0" && str.length !== 1)) {
    return false
  }

  let array = Array.from(str.split(""))
  let reversedArray = str.split("").reverse()

  if (array.join("") === reversedArray.join("")) {
    return true
  }
  return false
};

let x = 123

console.log(isPalindrome(x))