var merge = function(nums1, m, nums2, n) {
    
let array1 = nums1.slice(0,m)
let array2 = nums2.slice(0,n)

// let temp = array1.concat(array2)
// console.log(temp)
// let output = temp.sort(function(a,b) {
//   return a - b
// })

array1 = array1.concat(array2).sort(function(a,b) {
    return a - b
  })
return array1
};


let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

console.log(merge(nums1,m,nums2,n))