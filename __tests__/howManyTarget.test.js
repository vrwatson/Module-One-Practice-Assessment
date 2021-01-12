const howManyTargets = require("../problems/howManyTargets");

describe("howManyTargets", () => {
  test("works for string arrays", () => {
    expect(howManyTargets(["cat", "bird", "dog", "cat"], "cat")).toBe(2);
    expect(howManyTargets(["cat", "bird", "dog", "cat"], "bird")).toBe(1);
    expect(howManyTargets(["cat", "bird", "dog", "cat"], "snake")).toBe(0);
  });
  test("works for number arrays", () => {
    expect(howManyTargets([1, 2, 3, 2, 1, 1], 1)).toBe(3);
    expect(howManyTargets([1, 2, 3, 2, 1, 1], 2)).toBe(2);
    expect(howManyTargets([1, 2, 3, 2, 1, 1], 5)).toBe(0);
  });
});
