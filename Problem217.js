var containsDuplicate = function (nums) {

  const array = Array.from(new Set(nums))

  console.log(nums)
  console.log(array)

  if (array.length !== nums.length) {
    return true
  } else {
    return false
  }
};


var nums = [1, 2, 3, 4]

console.log(containsDuplicate(nums))