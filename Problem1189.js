var findBaloons = function (str) {

  check = ["b", "a", "l", "o", "n"]
  count = [0, 0, 0, 0, 0]
  let array = str.split("")
  let answer = 0

  for (i = 0; i <= check.length - 1; i++) {
    for (j = 0; j <= array.length - 1; j++) {
      if (check[i] === array[j]) {
        count[i] += 1
      }
    }
  }

  while (count[0] >= 1 && count[1] >= 1 && count[2] >= 2 && count[3] >= 2 && count[4] >= 1) {
    if (count[0] >= 1 && count[1] >= 1 && count[2] >= 2 && count[3] >= 2 && count[4] >= 1) {
      count[0] -= 1
      count[1] -= 1
      count[2] -= 2
      count[3] -= 2
      count[4] -= 1
      answer += 1
    }
  }

  return answer
}

var str = "loonbalxballpon"
console.log(findBaloons(str))