var isPalindrome = function (s) {

  let str = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  if (str === str.split("").reverse().join("")) {
    return true
  }

  return false;
};

let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s))