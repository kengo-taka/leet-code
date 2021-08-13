var nextGreaterElement = function (nums1, nums2) {

  let array = []

  check: for (i = 0; i <= nums1.length - 1; i++) {
    if (nums2.indexOf(nums1[i]) === nums2.length - 1) {
      array.push(-1)
    } else {
      for (j = nums2.indexOf(nums1[i]) + 1; j <= nums2.length - 1; j++) {
        if (nums2[j] > nums1[i]) {
          array.push(nums2[j])
          break check;
        }
      }
      array.push(-1)
    }
  }

  return array
};

var nums1 = [4, 1, 2]
var nums2 = [1, 3, 4, 2]

console.log(nextGreaterElement(nums1, nums2))