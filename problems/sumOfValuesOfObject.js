/**
 * Takes in an object and returns the sum of all values
 * @param {Object} obj - an object with key value pairs
 * @returns {number} - sum of all values
 *
 * ex: sumOfValuesOfObject({corey: 5, sam: 10, peter: 3, sparky: 9})
 * returns 27
 */


const sumOfValuesOfObject = (obj) => {
    let sum = 0;
    let objArray = Object.values(obj)
    for (let i = 0; i < objArray.length; i++) {
        sum += objArray[i]
    }
    return sum
}

module.exports = sumOfValuesOfObject;