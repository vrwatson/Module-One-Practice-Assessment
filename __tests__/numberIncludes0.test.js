const numberIncludes0 = require("../problems/numberIncludes0");

describe("numberIncludes0", () => {
  test("returns true for numbers with a 0", () => {
    expect(numberIncludes0(0)).toBe(true);
    expect(numberIncludes0(102)).toBe(true);
    expect(numberIncludes0(1302)).toBe(true);
  });
  test("returns false for numbers without a 0", () => {
    expect(numberIncludes0(4)).toBe(false);
    expect(numberIncludes0(12)).toBe(false);
    expect(numberIncludes0(132)).toBe(false);
  });

});
