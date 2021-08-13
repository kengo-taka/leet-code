var maxSubArray = function (nums) {

  function add(start, last, nums) {
    let sum = 0
    for (i = start; i <= last; i++) {
      sum = sum + nums[i]
    }
    return sum
  }

  let startIndex = 0
  let lastIndex = 0
  let max = nums[0]

  if (nums.length === 1) {
    return nums[0]
  }
  
  for (i = 1; i <= nums.length - 1; i++) {
    if (max < add(startIndex,i,nums)) {
      max = add(startIndex,i,nums)
      lastIndex = i
    }
    if (max < nums[i]) {
      max = nums[i]
      startIndex = i
      lastIndex = i
    }
  }

  return max
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))

