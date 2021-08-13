var maxArea = function (height) {

  let max = 0

  for (i = 0; i <= height.length - 2; i++) {
    for (j = i + 1; j <= height.length - 1; j++) {
      if (max < (j - i) * Math.min(height[i], height[j])) {
        max = (j - i) * Math.min(height[i], height[j])
      }
    }
  }
  return max
};


let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))