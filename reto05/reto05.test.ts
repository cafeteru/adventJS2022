import { describe, expect, test } from "@jest/globals";
import { getMaxGifts } from "./reto05";

describe("reto05", () => {
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
  test("getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)", () => {
    expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toEqual(100);
  });
});
