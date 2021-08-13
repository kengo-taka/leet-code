var smallestChair = function (times, targetFriend) {

  let count = 0

  for (i = 0; i < times[targetFriend][0]; i++) {
    for (j = 0; j <= times.length - 1; j++) {
      if (times[j][0] === i) {
        count += 1
      }
      if (times[j][1] === i) {
        count -= 1
      }
    }
  }

  return count 
};

let times = [[1,4],[2,3],[4,6]]
let targetFriend = 1
console.log(smallestChair(times, targetFriend))