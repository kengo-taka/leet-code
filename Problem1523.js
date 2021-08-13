var countOdds = function (low, high) {

  let count = 0
  for (i = low; i <= high; i++) {
    if (i % 2 === 1) {
      count += 1
    }
  }
  return count
};

let low = 8
let high = 10

console.log(countOdds(low, high))