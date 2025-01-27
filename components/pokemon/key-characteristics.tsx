import CharacteristicEntry from "@/components/pokemon/characteristic-entry";
import PokemonGender from "@/components/pokemon/pokemon-gender";
import { ExtendedPokemon, Pokemon } from "@/types";
import { calculateGenderPercentage, calculateHeight, calculateWeight } from "@/utils/pokemon.util";
import React from "react";

const KeyCharacteristics = ({ basePokemon, extendedPokemon }: {
    basePokemon: Pokemon,
    extendedPokemon: ExtendedPokemon
}) => {
    const genderCalculation = calculateGenderPercentage(extendedPokemon.gender_rate);
    const weightCalculation = calculateWeight(basePokemon.weight);
    const heightCalculation = calculateHeight(basePokemon.height);
    const abilities = basePokemon.abilities.map(pokemonAbility => pokemonAbility.ability.name).join(", ");
    const eggGroups = extendedPokemon.egg_groups.map(eggGroup => eggGroup.name).join(", ");
    return (
        <div className="my-4">
            <div className="text-xl font-semibold">Key Characteristics</div>
            <div className="grid grid-cols-2 gap-2 my-4">
                <CharacteristicEntry label={"Habitat"} value={extendedPokemon.habitat.name} />
                <CharacteristicEntry label={"Shape"} value={extendedPokemon.shape.name} />
                <CharacteristicEntry label={"Color"} value={extendedPokemon.color.name} />
                <CharacteristicEntry label={"Height"}
                                     value={`${heightCalculation.meters} m - ${heightCalculation.feet} ft`} />
                <CharacteristicEntry label={"Weight"}
                                     value={`${weightCalculation.kgs} kg - ${weightCalculation.lbs} lbs`} />
                <CharacteristicEntry label={"Abilities"} value={abilities} />
                <CharacteristicEntry label={"Happiness"} value={`${extendedPokemon.base_happiness}`} />
                <CharacteristicEntry label={"Experience"} value={`${basePokemon.base_experience}`} />
            </div>
            <div>
                <div className="text-xl font-semibold my-4">Breeding</div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="label text-lg text-gray-500">Gender</div>
                    <div className="value text-lg">{genderCalculation.isGenderless ? "Genderless" :
                        <PokemonGender malePercentage={genderCalculation.malePercentage!}
                                       femalePercentage={genderCalculation.femalePercentage!} />}</div>
                    <CharacteristicEntry label={"Groups"} value={eggGroups} />
                </div>
            </div>
        </div>
    );
};
export default KeyCharacteristics;
