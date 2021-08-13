var maxIncreaseKeepingSkyline = function (grid) {

  let viewFromTop = Array(grid.length).fill(0)
  let viewFromLeft = Array(grid.length).fill(0)

  for (i = 0; i <= grid.length - 1; i++) {
    let tallestBuilding = 0
    for (j = 0; j <= grid.length - 1; j++) {
      if (grid[j][i] >= tallestBuilding) {
        tallestBuilding = grid[j][i]
        viewFromTop[i] = tallestBuilding
      }
    }
  }

  for (i = 0; i <= grid.length - 1; i++) {
    let tallestBuilding = 0
    for (j = 0; j <= grid.length - 1; j++) {
      if (grid[i][j] >= tallestBuilding) {
        tallestBuilding = grid[i][j]
        viewFromLeft[i] = tallestBuilding
      }
    }
  }

  let count = 0

  for (i = 0; i <= grid.length - 1; i++) {
    for (j = 0; j <= grid.length - 1; j++) {
      let num = viewFromLeft[i] >= viewFromTop[j] ? viewFromTop[j] : viewFromLeft[i]
      count += num - grid[i][j]
    }
  }

  return count
};

grid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]

console.log(maxIncreaseKeepingSkyline(grid))