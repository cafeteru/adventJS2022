export function sum(giftsCities: number[]): number[] {
  const result = new Set<number>(giftsCities);
  giftsCities.reduce((a, b) => {
    const c = a + b;
    console.warn(a, b, c);
    result.add(c);
    return c;
  });

  giftsCities.forEach((element) => {
    const copy = [...giftsCities].filter((x1) => x1 !== element);
    if (copy.length > 0) {
      copy.reduce((a, b) => {
        const c = a + b;
        console.warn(copy, c);
        result.add(c);
        return c;
      });
    }
  });
  return [...result].sort((a, b) => a - b);
}

function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  const result = new Set<number>(giftsCities);
  giftsCities.reduce((a, b) => {
    const c = a + b;
    console.warn(a, b, c);
    result.add(c);
    return c;
  });

  giftsCities.forEach((element) => {
    const copy = [...giftsCities].filter((x1) => x1 !== element);
    if (copy.length > 0) {
      copy.reduce((a, b) => {
        const c = a + b;
        result.add(c);
        return c;
      });
    }
  });

  const aas = [...result].sort((a, b) => a - b);
  if (aas.includes(maxGifts)) {
    return maxGifts;
  }
  return 0;
}
