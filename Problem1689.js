var minPartitions = function(n) {
  return Math.max(...[...n].map(i => Number(i)))
};

console.log(minPartitions("82734"))

// 1, convert given String to array of String
//
// 2, convert array of String to array of Int
//
// 3, return max value of array of Int
//
//
// We can increase each digit by only one when we add other deci-ninary. So the biggest digit number is the answer.
//