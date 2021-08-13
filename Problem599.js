var findRestaurant = function (list1, list2) {

  let count = []
  let answer = []
  for (i = 0; i <= list1.length - 1; i++) {
    count.push(2000)
  }

  for (i = 0; i <= list1.length - 1; i++) {
    for (j = 0; j <= list2.length - 1; j++) {
      if (list1[i] === list2[j]) {
        count[i] = i + j
      }
    }
  }

  let temp = Math.min(...count)

  for (i = 0; i <= list1.length - 1; i++) {
    if (count[i] === temp) {
      answer.push(list1[i])
    }
  }

  return answer
};

let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
let list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

console.log(findRestaurant(list1, list2))