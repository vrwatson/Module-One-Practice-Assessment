const onlyStringsGreaterThanOrEqualTo5 = require("../problems/onlyStringsGreaterThanOrEqualTo5");

describe("onlyStringsGreaterThanOrEqualTo5", () => {
  test("returns correct result", () => {
    expect(
      onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"])
    ).toEqual(["hello", "corey"]);
    expect(
      onlyStringsGreaterThanOrEqualTo5(["cat", "bird", "corey", "dog"])
    ).toEqual(["corey"]);
  });
});
