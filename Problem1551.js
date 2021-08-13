var minOperations = function (n) {

  let array = []

  for (i = 0; i <= n - 1; i++) {
    array.push(i * 2 + 1)
  }

  let count = 0
  for (i = 0; i <= array.length - 1; i++) {
    count += Math.abs(array[i] - n)
  }

  return count / 2
};


let n = 6

console.log(minOperations(n))