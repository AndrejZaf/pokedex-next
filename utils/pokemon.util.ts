export function calculateWeight(weight: number) {
    const kgs = (weight / 1000).toFixed(2);
    const lbs = (weight / 454).toFixed(2);
    return {
        kgs,
        lbs,
    };
}

export function calculateHeight(height: number) {
    const meters = (height / 10).toFixed(2);
    const feet = (height / 3.048).toFixed(2);
    return {
        meters,
        feet,
    };
}

export function calculateGenderPercentage(genderRate: number) {
    if (genderRate === -1) {
        return { isGenderless: true };
    }

    const peakLimit = 8;
    const femalePercentage = +((genderRate / peakLimit) * 100).toFixed(1);
    const malePercentage = 100 - femalePercentage;
    return {
        malePercentage,
        femalePercentage,
    };
}

export const highestPokemonStats: Record<string, number> = {
    "hp": 255,
    "attack": 190,
    "defense": 250,
    "special-attack": 194,
    "special-defense": 250,
    "speed": 200,
    "total": 1125,
};