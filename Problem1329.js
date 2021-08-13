var diagonalSort = function (mat) {

  for (i = 0; i <= mat[0].length - 1; i++) {

    let array = []
    let j = 0
    let k = i

    while (j <= mat.length - 1 && k <= mat[0].length - 1) {
      array.push(mat[j][k])
      j += 1
      k += 1
    }

    array.sort(
      function (a, b) {
        return a - b;
      }
    )

    j = 0
    k = i

    while (j <= mat.length - 1 && k <= mat[0].length - 1) {

      mat[j][k] = array[j]
      j += 1
      k += 1
    }
  }

  for (i = 1; i <= mat.length - 1; i++) {

    let array = []
    let j = i
    let k = 0

    while (j <= mat.length - 1 && k <= mat[0].length - 1) {

      array.push(mat[j][k])
      j += 1
      k += 1
    }

    array.sort(
      function (a, b) {
        return a - b;
      }
    )

    j = i
    k = 0

    while (j <= mat.length - 1 && k <= mat[0].length - 1) {

      mat[j][k] = array[k]
      j += 1
      k += 1
    }
  }
  
  return mat
};

let mat = [[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]

console.log(diagonalSort(mat))