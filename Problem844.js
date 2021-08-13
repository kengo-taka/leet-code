var backspaceCompare = function (s, t) {

  let arrayS = s.split("")
  let arrayT = t.split("")

  while (arrayS.includes("#")) {
    if (arrayS.indexOf("#") === 0) {
      arrayS.splice(0, 1)
    } else {
      arrayS.splice(arrayS.indexOf("#") - 1, 2)
    }
  }

  while (arrayT.includes("#")) {
    if (arrayT.indexOf("#") === 0) {
      arrayT.splice(0, 1)
    } else {
      arrayT.splice(arrayT.indexOf("#") - 1, 2)
    }
  }
console.log(arrayS,arrayT)
  if (arrayS.join("") === arrayT.join("")) {
    return true
  } else {
    return false
  }

};

var s = "ab##"
var t = "c#d#"

console.log(backspaceCompare(s, t))