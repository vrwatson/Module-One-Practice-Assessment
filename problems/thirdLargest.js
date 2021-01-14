/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */

const thirdLargest = (nums) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element > largest) {
            largest = element
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element < largest && element > secondLargest) {
            secondLargest = element
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element < largest && element < secondLargest && element > thirdLargest) {
            thirdLargest = element
        } else if (nums.length <3) {
            return null
        }

    }
    return thirdLargest
}

module.exports = thirdLargest