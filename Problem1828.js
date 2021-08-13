var countPoints = function (points, queries) {

  let count = Array(queries.length).fill(0)
  console.log(count)
  for (i = 0; i <= queries.length - 1; i++) {
    for (j = 0; j <= points.length - 1; j++) {

      if (Math.sqrt(Math.pow((queries[i][0] - points[j][0]), 2) + Math.pow((queries[i][1] - points[j][1]), 2)) <= queries[i][2]) {
        count[i] += 1
      }
    }
  }
  return count
};

let points = [[1, 3], [3, 3], [5, 3], [2, 2]]
let queries = [[2, 3, 1], [4, 3, 1], [1, 1, 2]]


console.log(countPoints(points, queries))