const isObject = (value) => {
  return typeof value === 'object'
  && value !== null
  && !Array.isArray(value)
  && !(value instanceof RegExp)
  && !(value instanceof Date)
  && !(value instanceof Set)
  && !(value instanceof Map)
}

const totalIntegers = function(object, total = 0) {
    if(!(isObject(object) || Array.isArray(object))) return undefined
    const values = Object.values(object)
    values.forEach(value=>{
        if(Number.isInteger(value))
            total+=1
        else if(isObject(value) || Array.isArray(value)) 
            total += totalIntegers(value)
    })
    return total
};
  
// Do not edit below this line
module.exports = totalIntegers;
