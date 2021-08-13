var partitionLabels = function (s) {

  array = s.split("")
  outputArray = []

  while (array.length !== 0) {
    let start = array[0]
    let lastIndex = array.lastIndexOf(start, array.length - 1)

    if (array.length === 1) {
      outputArray.push(array[0])
      break
    } else if (lastIndex === 0) {
      outputArray.push(array.splice(start, 1))
    } else {
      for (i = 1; array.length - 1; i++) {
        if (i === lastIndex) {
          break
        }

        if (array.lastIndexOf(array[i], array.length - 1) > lastIndex) {
          lastIndex = array.lastIndexOf(array[i], array.length - 1)
        }
      }
      outputArray.push(array.splice(start, lastIndex + 1))
    }
  }

  let output = []

  for (i = 0; i <= outputArray.length - 1; i++) {
    output.push(outputArray[i].length)
  }

  return output
};

let s = "caedbdedda"

console.log(partitionLabels(s))