var canPlaceFlowers = function (flowerbed, n) {

  let count = 0

if (flowerbed.length === 1 && flowerbed[0] === 0) {
  if (n <= 1) {
    return true
  } else {
    return false
  }
} else if (flowerbed.length === 1 && flowerbed[0] === 1) {
  if (n === 0) {
    return true
  } else {
    return false
  }
}



  for (i = 0; i <= flowerbed.length - 1; i++) {
    if (i === 0) {
      if (flowerbed[0] === 0 && flowerbed[1] === 0) {
        flowerbed[0] = 1
        count += 1
      }
    } else if (i === flowerbed.length - 1) {
      if (flowerbed[flowerbed.length - 2] === 0 && flowerbed[flowerbed.length - 1] === 0) {
        flowerbed[flowerbed.length - 1] = 1
        count += 1
      }
    } else {
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
        flowerbed[i] = 1
        count += 1
      }
    }
  }

  if (count >= n) {
    return true
  } else {
    return false
  }
};

let flowerbed = [1, 0, 1, 0, 1, 0, 1]

let n = 1
console.log(canPlaceFlowers(flowerbed, n))