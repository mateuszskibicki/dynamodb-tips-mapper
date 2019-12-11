import { isNonEmptyString } from "./is-non-empty-string.function";

describe("isNonEmptyString", () => {
  it("should be defined and a function", () => {
    expect(isNonEmptyString).toBeDefined();
    expect(typeof isNonEmptyString === "function").toBeTruthy();
  });

  it("should return true when value isn't correct string", () => {
    const arr = ["", 123, {}, []];

    for (const item in arr) {
      expect(isNonEmptyString(item)).toBeTruthy();
    }
  });
});
