function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let subsets = [[]];
  giftsCities.forEach((x) => {
    const currentLength = subsets.length;
    for (let j = 0; j < currentLength; j++) {
      const element = [...subsets[j], x];
      subsets.push(element);
    }
  });
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

module.exports = getMaxGifts;
