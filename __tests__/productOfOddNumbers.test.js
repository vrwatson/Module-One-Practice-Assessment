const productOfOddNumbers = require("../problems/productOfOddNumbers");

describe("productOfOddNumbers", () => {
  test("returns 0 when there are no odd numbers", () => {
    expect(productOfOddNumbers([2, 4, 6, 8])).toBe(0);
  });
  test("returns product with only odd numbers", () => {
    expect(productOfOddNumbers([1, 2, 3, 4, 5])).toBe(15);
  });
});
