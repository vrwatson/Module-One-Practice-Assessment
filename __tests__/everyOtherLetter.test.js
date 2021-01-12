const everyOtherLetter = require("../problems/everyOtherLetter");

describe("everyOtherLetter", () => {
    test("returns the correct new string", () => {
        expect(everyOtherLetter("mississippi")).toBe("msispi");
        expect(everyOtherLetter("cat")).toBe("ct");
        expect(everyOtherLetter("")).toBe("");
    })
})