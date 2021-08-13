var countSegments = function (s) {

  if (s.trim() === "") {
    return 0
  }

  let array = s.split(" ")
  let answerArray = []

  for (i = 0; i < array.length; i++) {
    if (array[i] !== "") {
      answerArray.push([array[i]])
    }
  }

  return answerArray.length
};

var s = "Of all the gin joints in all the towns in all the world,   "
console.log(countSegments(s))