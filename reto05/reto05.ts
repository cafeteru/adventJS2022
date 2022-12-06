export function getMaxGifts(giftsCities: number[], maxGifts: number, maxCities: number) {
    let max = 0;
    for (let i = 0; i < giftsCities.length; i++) {
        for (let j = i; j < giftsCities.length; j++) {
            let total = 0;
                for (let k = i; k <= j; k++) {
                    total += giftsCities[k];
                }
            if (total > max && total <= maxGifts) {
                max = total;
            }
        }
    }
    return max;
}
