var findUnique = function (arr) {

  let array1 = arr.sort((a, b) => {
    return a - b
  })

  let array2 = [...new Set(array1)];

  let count = []

  for (i = 0; i <= array2.length - 1; i++) {
    count.push(0)
  }

  for (i = 0; i <= arr.length - 1; i++) {
    for (j = 0; j <= array2.length - 1; j++) {
      if (arr[i] === array2[j]) {
        count[j] += 1
      }
    }
  }

    let count2 = [...new Set(count)];

    if (count.length === count2.length) {
      return true
    } else {
      return false
    }

  }

  let arr = [1, 2];
  console.log(findUnique(arr))
