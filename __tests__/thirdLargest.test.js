const thirdLargest = require("../problems/thirdLargest");

describe("thirdLargest", () => {
  test("does not use the built in sort", () => {
    expect(thirdLargest.toString().includes("sort")).toBe(false);
  });
  test("returns null for arrays less than length 3", () => {
    expect(thirdLargest([4, 6])).toBe(null);
  });
  test("finds the third largest", () => {
    expect(thirdLargest([12, 3, 8, 2, 1, 14])).toBe(8);
    expect(thirdLargest([12, 3, 8, 2, 1, 10])).toBe(8);
    expect(thirdLargest([12, 3, 8, 2, 1, 7])).toBe(7);
    expect(thirdLargest([19, 14, 12, 10])).toBe(12);
    expect(thirdLargest([10, 13, 14, 17, 20, 25])).toBe(17);
  });

});
