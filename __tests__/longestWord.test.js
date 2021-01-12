const longestWord = require("../problems/longestWord");

describe("longestWord", () => {
  test("returns the longest word", () => {
    expect(longestWord(["do", "you", "love"])).toBe("love");
    expect(longestWord(["do", "you", "popcorn", "love"])).toBe("popcorn");
  });
  test("returns the first longest word when tied", () => {
    expect(longestWord(["cat", "bird", "hello", "corey", "do"])).toBe("hello");
    expect(longestWord(["I", "cat", "am", "dog", "boy"])).toBe("cat");
  });


});
