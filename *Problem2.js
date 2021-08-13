var addTwoNumbers = function (l1, l2) {
    
    let l1Reverse = Number(l1.reverse().join(""))
    let l2Reverse = Number(l2.reverse().join(""))

    let output = String(l1Reverse + l2Reverse).split("").reverse().map(i => Number(i))

    return output
};

l1 = [2, 4, 3]
l2 = [5, 6, 4]

console.log(addTwoNumbers(l1, l2))