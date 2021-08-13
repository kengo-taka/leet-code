var findingUsersActiveMinutes = function (logs, k) {

  let output = Array(k).fill(0)
  let max = 0

  let array = []
 
 while (logs.length > 0) {
    let temp = [logs[0][1]]

    for (i = 0; i <= logs.length - 1; i++) {
      if (logs[0][0] === logs[i][0]) {
        if (logs[0][1] !== logs[i][1]) {
          temp.push(logs[i][1])
        }
      }
    }

    array.push(temp)
   logs.filter((item) => {
     return(item[0] !== logs[0][0])
   })
   
  }

  for (i = 0; i <= array.length - 1; i++) {
    if (array[i].length > 0) {
      output[array[i].length - 1] += 1
    }
  }
  return output
};


logs = 
[[305589003,4136],[305589004,4139],[305589004,4141],[305589004,4137],[305589001,4139],[305589001,4139]]
k = 9

console.log(findingUsersActiveMinutes(logs, k))