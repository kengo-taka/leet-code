var threeSum = function (nums) {

  let array = nums.sort(function (a, b) {
    return a - b
  })

  if (nums.length < 3) {
    return []
  } else {
    let output = []
    for (i = 0; i <= nums.length - 3; i++) {
      for (j = i + 1; j <= nums.length - 2; j++) {
        check: for (k = nums.length - 1; j < k; k--) {
          if (array[i] + array[j] + array[k] === 0) {
            for (m = 0; m <= output.length - 1; m++) {
              if (output[m].join("") === [array[i], array[j], array[k]].join("")) {
                continue check
              }
            }
            output.push([array[i], array[j], array[k]])
          }
        }
      }
    }
    return output
  }
};

nums = [-1, 0, 1, 2, -1, -4]

console.log(threeSum(nums))