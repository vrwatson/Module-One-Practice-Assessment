/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

function letterCount(str) {
    let object = {};
    let newArr = str.toLowerCase().split(" ");
    let newString = newArr.join("");
    for (let i = 0; i <newString.length; i++) {
        const element = newString[i];
        if (object[element]) {
            object[element] += 1;
        } else {
            object[element] = 1;
        }
    }
    return object
}

module.exports = letterCount;
