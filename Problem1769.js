var minOperations = function (boxes) {

  let array = [...boxes].map(i => Number(i))
  let count = Array(array.length).fill(0)

  for (i = 0; i <= array.length - 1; i++) {
    for (j = 0; j <= array.length - 1; j++) {

      if (array[j] === 1) {
        count[i] += Math.abs(j - i)
      }
    }
  }
  return count
};

console.log(minOperations("001011"))