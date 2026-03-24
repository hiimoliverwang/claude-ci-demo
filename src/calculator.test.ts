import { average, percentChange, clamp } from "./calculator";

describe("average", () => {
  it("returns 0 for empty array", () => {
    expect(average([])).toBe(0);
  });

  it("computes the mean", () => {
    expect(average([2, 4, 6])).toBe(4);
  });
});

describe("percentChange", () => {
  it("computes increase", () => {
    expect(percentChange(100, 150)).toBe(50);
  });
});

describe("clamp", () => {
  it("clamps to max", () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });
  it("clamps to min", () => {
    expect(clamp(-1, 0, 5)).toBe(0);
  });
});
