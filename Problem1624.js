var maxLengthBetweenEqualCharacters = function (s) {

  let array = s.split("")
  let array2 = [...new Set(array)];

  if (array.length === array2.length) {
    return -1
  }
  let max = 0

  for (i = 0; i <= array.length - 1; i++) {
    if (max < array.lastIndexOf(array[i]) - i - 1) {
      max = array.lastIndexOf(array[i]) - i - 1
    }
  }

  return max
};

let s = "cbzxc"
console.log(maxLengthBetweenEqualCharacters(s))
