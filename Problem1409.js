var processQueries = function (queries, m) {

  let permutation = [...Array(m)].map((_, i) => i + 1);
  let result = []

  for (i = 0; i <= queries.length - 1; i++) {
    for (j = 0; j <= permutation.length - 1; j++) {
      if (queries[i] === permutation[j]) {
        let temp = permutation.splice(j, 1)
        permutation.unshift(temp[0])
        result.push(j)
        console.log(temp)
        break
      }
    }
  }

  return result
};

let queries = [3, 1, 2, 1]
let m = 5

console.log(processQueries(queries, m))