var groupThePeople = function (groupSizes) {

  if (groupSizes.length === 1) {
    return [[0]]
  }

  let count = Array(groupSizes.length + 1).fill(0)

  for (i = 0; i <= groupSizes.length - 1; i++) {
    count[groupSizes[i]] += 1
  }

  let groupBox = []

  for (i = 1; i <= count.length - 1; i++) {
    if (count[i] > 0) {
      for (j = 1; j <= count[i] / i; j++) {
        groupBox.push(Array(i).fill(0))
      }
    }
  }

  for (i = 0; i <= groupSizes.length - 1; i++) {
    outer:
    for (j = 0; j <= groupBox.length - 1; j++) {
      for (k = 0; k <= groupBox[j].length - 1; k++) {
        if (groupSizes[i] === groupBox[j].length) {
          if (groupBox[j][k] === 0) {
            groupBox[j][k] = i
            break outer;
          }
        }
      }
    }
  }

  return groupBox
}

var groupSizes = [3, 3, 3, 3, 3, 1, 3]
var groupSizes2 = [8, 8, 8, 8, 8, 8, 8, 8]


console.log(groupThePeople(groupSizes2))