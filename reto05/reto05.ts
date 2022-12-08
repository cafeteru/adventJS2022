export function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  let subsets: number[][] = [[]];
  for (let i = 0; i < giftsCities.length; i++) {
    var currentLength = subsets.length;
    for (let j = 0; j < currentLength; j++) {
      const element = [...subsets[j], giftsCities[i]];
      subsets.push(element);
    }
  }
  let result = 0;
  subsets
    .filter(({ length }) => length > 0 && length <= maxCities)
    .forEach((element) => {
      const total = element.reduce((a, b) => a + b);
      if (total <= maxGifts && result < total) {
        result = total;
      }
    });
  return result;
}
