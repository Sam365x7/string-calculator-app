import { add } from "./stringCalculator.js";

describe("String Calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("adds two comma-separated numbers", () => {
    expect(add("1,4")).toBe(5);
  });

  test("adds multiple numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30")).toBe(60);
  });

  test("adds numbers separated by newlines", () => {
    expect(add("1\n2")).toBe(3);
    expect(add("1\n2\n3")).toBe(6);
  });

  test("adds numbers separated by both commas and newlines", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("10,20\n30\n40,50")).toBe(150);
  });
  test("ignores invalid entries and sums only valid numbers", () => {
    expect(add("1,483rf\n23,")).toBe(507);
  });
});