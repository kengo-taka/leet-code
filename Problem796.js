var rotateString = function (s, goal) {

  let arrayS = s.split("")
  // let arrayGoal = goal.split("")

  for (i = 0; i <= arrayS.length - 1; i++) {
    arrayS.push(arrayS[0])
    arrayS.shift()
    if (arrayS.join("") === goal) {
      return true
    }
  }

  return false
};

var s = "abcde"
var goal = "cdeab"

console.log(rotateString(s, goal))