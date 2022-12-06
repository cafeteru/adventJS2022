import { describe, expect, test } from "@jest/globals";

describe("sum module", () => {
  test("getMaxGifts([12, 3, 11, 5, 7], 20, 3)", () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toEqual(20);
  });

  test("getMaxGifts([50], 15, 1)", () => {
    expect(getMaxGifts([50], 15, 1)).toEqual(0);
  });

  test("getMaxGifts([50], 100, 1)", () => {
    expect(getMaxGifts([50], 100, 1)).toEqual(50);
  });

  test("getMaxGifts([50, 70], 100, 1)", () => {
    expect(getMaxGifts([50, 70], 100, 1)).toEqual(70);
  });
});

function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  if (giftsCities.length === 1) {
    if (giftsCities[0] <= maxGifts) {
      return giftsCities[0];
    }
    return 0;
  }
  let max = 0;

  giftsCities.forEach((x) => {
    const value = [x];
    giftsCities.filter((y) => y !== x).forEach((y) => {
      value.push(y);
      const result = 
    });
  });

  if (max <= maxGifts) {
    return max;
  }
  return 0;
}
