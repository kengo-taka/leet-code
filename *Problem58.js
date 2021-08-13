var lengthOfLastWord = function (s) {

  let array = s.split(" ")
  return array[array.length - 1].length
};

let s = "a "
console.log(lengthOfLastWord(s))