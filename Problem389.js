var findTheDifference = function (s, t) {

  let arrayS = s.split("")
  let arrayT = t.split("")
  let check = []

  for (i = 0; i <= arrayT.length - 1; i++) {
    check.push(false)
  }


for (i = 0; i <= arrayS.length - 1; i++) {
  back: for (j = 0; j <= arrayT.length - 1; j++) {
      if (arrayS[i] === arrayT[j] && check[j] !== true) {
        check[j] = true
       break back;
      }
    }
  }

  return arrayT[check.indexOf(false)]
};



let s = "ae"
let t = "aea"

console.log(findTheDifference(s, t))