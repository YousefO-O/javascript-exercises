const meaningOfLifeArray = [42];
  const object = {
    data: {
      duplicate: "e",
      stuff: {
        thing: {
          banana: NaN,
          moreStuff: {
            something: "foo",
            answer: meaningOfLifeArray,
          },
        },
      },
      info: {
        duplicate: "e",
        magicNumber: 44,
        empty: null,
      },
    },
  };

// Checker function from: https://dev.to/alesm0101/how-to-check-if-a-value-is-an-object-in-javascript-3pin
// It's Amazing!!!!!
const isObject = (value) => {
  return typeof value === 'object'
  && value !== null
  && !Array.isArray(value)
  && !(value instanceof RegExp)
  && !(value instanceof Date)
  && !(value instanceof Set)
  && !(value instanceof Map)
}

function flattenObject(object, flatArray = []) {
  const arraysAndObjects = []
  if(Array.isArray(object)) {
    object.forEach(item => {
      if(Array.isArray(item) || isObject(item)) arraysAndObjects.push(item)
      else flatArray.push(item)
    })
  }
  else if(isObject(object)) {
    Object.entries(object).forEach(item => {
      if(Array.isArray(item) || isObject(item)) arraysAndObjects.push(item)
      else flatArray.push(item)
    })
  }
  arraysAndObjects.forEach(item => {
    flatArray.push(item)
    return flattenObject(item, flatArray)
  })

  return flatArray
}

const contains = function(object, value) {
  const flatArray = flattenObject(object)
  // if(isObject(value) || Array.isArray(value)) value = flattenObject(value)
  console.log(flatArray, value)
  const result = flatArray.find(item => Object.is(item, value))
  if(result === undefined) return false
  return true   
};

contains(object, meaningOfLifeArray)
  
// Do not edit below this line
module.exports = contains;
