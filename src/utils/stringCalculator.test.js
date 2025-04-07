import { add } from "./stringCalculator.js";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("adds two comma-separated numbers", () => {
    expect(add("1,4")).toBe(5);
  });
});