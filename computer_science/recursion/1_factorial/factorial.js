const factorial = function(number) {
    if(!(typeof number === 'number')) return undefined
    if(number.toString().includes('.')) return undefined
    if(number < 0) return
    if(number === 0) return 1
    return number*factorial(number-1)

};
// Hey yousef, you wrote this at 2026 nov 17 :)

// Do not edit below this line
module.exports = factorial;