var maxCoins = function (piles) {

  piles.sort(function (a, b) {
    return b - a
  })

  let count = 0

  for (i = 0; i <= piles.length / 3 - 1; i++) {
    count += piles[2 * i + 1]
  }

  return count
};

piles = [9,8,7,6,5,1,2,3,4]

console.log(maxCoins(piles))