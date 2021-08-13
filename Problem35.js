var searchInsert = function (nums, target) {

  for (i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === target) {
      return i
    }
  }

  for (i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > target) {
      return i
    }
  }

  return nums.length
};


let nums = [1]
let target = 0

console.log(searchInsert(nums, target))