var strStr = function (haystack, needle) {

  if (needle.length === 0) {
    return 0
  } else if (haystack.length < needle.length) {
    return -1
  } else {
    for (i = 0; i <= haystack.length - needle.length; i++) {
      if (haystack.substr(i, needle.length) === needle) {
        return i
      }
    }
  }
  return - 1
};

let haystack = "hello"
let needle = "ll"

console.log(strStr(haystack, needle))
