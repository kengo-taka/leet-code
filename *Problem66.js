var plusOne = function(digits) {
//  digits[digits.length - 1] += 1
    let num = (digits.join(""))
    // console.log(num)

    num = +num + 1
    // console.log(digits)
    // console.log(num)
    return String(num).split("")
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
console.log(plusOne(digits))