var mostCommonWord = function (paragraph, banned) {

  let remove = []

  var temp = paragraph.replace(/\,/g, " ").replace(/\!/g, " ").replace(/\?/g, " ").replace(/\'/g, " ").replace(/\;/g, " ").replace(/\./g, " ").toLowerCase().split(" ")

  while (temp.includes("")) {
    temp.splice(temp.indexOf(""), 1)
  }

  for (i = 0; i <= banned.length - 1; i++) {
    while (temp.includes(banned[i])) {
      temp.splice(temp.indexOf(banned[i]), 1)
    }
  }

  var array = temp.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });

  let count = []
  for (i = 0; i <= array.length - 1; i++) {
    count.push(0)
  }

  for (i = 0; i <= temp.length - 1; i++) {
    count[array.indexOf(temp[i])] += 1
  }

  return array[count.indexOf(Math.max(...count))]
};

var paragraph = "Bob hit a ball, the hit BALL flew far, after it was hit."
var banned = ["hit"]

console.log(mostCommonWord(paragraph, banned))