var maxProductDifference = function (nums) {

  let array = nums.sort((a, b) => {
    return a - b
  })

  return array[array.length - 1] * array[array.length - 2] - array[0] * array[1]
};

let nums = [4, 2, 5, 9, 7, 4, 8]
console.log(maxProductDifference(nums))