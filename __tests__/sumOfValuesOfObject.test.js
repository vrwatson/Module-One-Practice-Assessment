const sumOfValuesOfObject = require("../problems/sumOfValuesOfObject");

describe("sumOfValuesOfObject", () => {
  test("returns 0 for empty objects", () => {
    expect(sumOfValuesOfObject({})).toBe(0);
  });
  test("returns the sum of all values", () => {
    expect(sumOfValuesOfObject({corey: 5, sam: 10, peter: 3, sparky: 9})).toBe(27);
    expect(sumOfValuesOfObject({corey: 0, sam: 1, peter: 3, sparky: 9})).toBe(13);
  });

});
