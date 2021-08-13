var restoreString = function (s, indices) {

  let array = s.split("")
  let answer = []

  for (i = 0; i <= array.length - 1; i++) {
    answer.push("")
  }

  for (i = 0; i <= array.length - 1; i++) {
    for (j = 0; j <= indices.length - 1; j++) {
      if (i === indices[j]) {
        answer[i] = array[j]
      }
    }
  }
  return answer.join("")
};

let s = "aaiougrt"
let indices = [4, 0, 2, 6, 7, 3, 1, 5]

console.log(restoreString(s, indices))