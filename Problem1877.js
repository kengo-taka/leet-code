var minPairSum = function (nums) {

  nums.sort(function (a, b) {
    return a - b
  })

  max = 0

  for (i = 0; i <= (nums.length / 2) - 1; i++) {
    if (max <= nums[i] + nums[nums.length - 1 - i]) {
      max = nums[i] + nums[nums.length - 1 - i]
    }
  }
  return max
};



let nums = [4, 1, 5, 1, 2, 5, 1, 5, 5, 4]

console.log(minPairSum(nums))