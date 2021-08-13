var searchRange = function (nums, target) {

  if (nums.length === 0) {
    return [-1, -1]
  }

  let start = -1
  let end = -1

  for (i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === target) {
      start = i
      break
    }
  }

  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      end = i
      break
    }
  }
  return [start, end]
};


let nums = [5, 7, 7, 8, 8, 10]
let target = 8

console.log(searchRange(nums,target))