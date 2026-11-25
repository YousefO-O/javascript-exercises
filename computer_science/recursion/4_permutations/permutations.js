function factorial(x) {
    if (x===1) return 1  
    return x * factorial(x-1)  
}

const areArraysEqual = (arrA, arrB) => {
    if (arrA.length !== arrB.length) return false
    for (let i = 0; i < arrA.length; i++) {
       if (arrA[i] !== arrB[i]) {
          return false
       }
    }
    return true
}

function shiftArray(array, shift) {
    if(!Number.isInteger(shift)) return
    const shiftedArray = []
    const addLast = []
    array.forEach((value, index)=>{
        const shiftedIndex = index-Math.abs(shift)
        if(shiftedIndex < 0) addLast.push(value)
        else shiftedArray[index-shift] = value
    })
    addLast.reverse()
    addLast.forEach(value => shiftedArray.push(value))
    return shiftedArray
}

const array = shiftArray([1,2,3], 1)
console.log(array)

const permutations = function(array = [], permutationsArray = []) {
    console.log('has been called')
    if(array.length <= 1) return [array]
    if(permutationsArray.length === 0) {
        permutationsArray.push(array)
        permutationsArray.push(array.toReversed())
    }
    const goal = factorial(array.length)
    if(permutationsArray.length === goal) return permutationsArray
    let shiftMax = array.length
    // console.log(shiftMax)
    let shift = 1
    while (shift <= shiftMax) {
        console.log(shift)
        permutationsArray.forEach((permutation)=>{
            let shiftedArray = shiftArray(permutation, shift)
            if(!permutationsArray.find(value=>areArraysEqual(value, shiftedArray))) {
                permutationsArray.push(shiftedArray)
            }
            if(permutationsArray.length === goal) return permutationsArray
        })
        shift++

    }
    console.log(permutationsArray, permutationsArray.length)
    if(permutationsArray.length === goal) return permutationsArray
    return permutations(array, permutationsArray)
};
  
// Do not edit below this line
module.exports = permutations;
