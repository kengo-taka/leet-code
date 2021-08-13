var removeDuplicates = function(nums) {
    
  const array = Array.from(new Set(nums))

// for (i = 0; i <= nums.length - array.length; i++) {
//   array = array.concat("_")
// }

return array
};

var nums = [1,1,2]
console.log(removeDuplicates(nums))