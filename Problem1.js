var twoSum = function (nums, target) {

  let array = Array.from(nums).sort(function (a, b) {
    return a - b
  })

  for (i = 0; i <= array.length - 2; i++) {
    for (j = i; j <= array.length - 1; j++) {
      if (array[i] + array[j] === target) {
        return [nums.indexOf(array[i]), nums.lastIndexOf(array[j])]
      }
    }
  }
};

let nums = [-3,4,3,90]
let target = 0

console.log(twoSum(nums, target))