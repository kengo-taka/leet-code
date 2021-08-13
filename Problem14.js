var longestCommonPrefix = function (strs) {

  let min = 200
  let array = strs.map(i => i.split(""))

  for (i = 0; i <= array.length - 1; i++) {
    if (array[i].length < min) {
      min = array[i].length
    }
  }

  let count = 0
  check:
  for (i = 0; i < min; i++) {
    for (j = 1; j <= array.length - 1; j++) {
      if (array[0][i] !== array[j][i]) {
        break check
      }
    }
    count += 1
  }

  return array[0].slice(0, count).join("")
};

let strs = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs))