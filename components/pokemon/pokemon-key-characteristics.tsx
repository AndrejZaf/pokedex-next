import PokemonCharacteristicEntry from "@/components/pokemon/pokemon-characteristic-entry";
import PokemonGender from "@/components/pokemon/pokemon-gender";
import { ExtendedPokemon, Pokemon } from "@/types";
import { calculateGenderPercentage, calculateHeight, calculateWeight } from "@/utils/pokemon.util";
import React from "react";

const PokemonKeyCharacteristics = ({ basePokemon, extendedPokemon }: {
    basePokemon: Pokemon,
    extendedPokemon: ExtendedPokemon
}) => {
    const genderCalculation = calculateGenderPercentage(extendedPokemon.gender_rate);
    const weightCalculation = calculateWeight(basePokemon.weight);
    const heightCalculation = calculateHeight(basePokemon.height);
    const abilities = basePokemon.abilities.map(pokemonAbility => pokemonAbility.ability.name).join(", ");
    const eggGroups = extendedPokemon.egg_groups.map(eggGroup => eggGroup.name).join(", ");
    return (
        <>
            <div className="text-xl font-semibold">Key Characteristics</div>
            <div className="grid grid-cols-2 gap-2 my-4">
                {extendedPokemon.habitat && <PokemonCharacteristicEntry label={"Habitat"} value={extendedPokemon.habitat.name} />}
                {extendedPokemon.shape && <PokemonCharacteristicEntry label={"Shape"} value={extendedPokemon.shape.name} />}
                {extendedPokemon.color && <PokemonCharacteristicEntry label={"Color"} value={extendedPokemon.color.name} />}
                <PokemonCharacteristicEntry label={"Height"}
                                            value={`${heightCalculation.meters} m - ${heightCalculation.feet} ft`} />
                <PokemonCharacteristicEntry label={"Weight"}
                                            value={`${weightCalculation.kgs} kg - ${weightCalculation.lbs} lbs`} />
                <PokemonCharacteristicEntry label={"Abilities"} value={abilities} />
                <PokemonCharacteristicEntry label={"Happiness"} value={`${extendedPokemon.base_happiness}`} />
                <PokemonCharacteristicEntry label={"Experience"} value={`${basePokemon.base_experience}`} />
            </div>
            <div>
                <div className="text-xl font-semibold my-4">Breeding</div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="label text-lg text-gray-500">Gender</div>
                    <div className="value text-lg">{genderCalculation.isGenderless ? "Genderless" :
                        <PokemonGender malePercentage={genderCalculation.malePercentage!}
                                       femalePercentage={genderCalculation.femalePercentage!} />}</div>
                    <PokemonCharacteristicEntry label={"Groups"} value={eggGroups} />
                </div>
            </div>
        </>
    );
};
export default PokemonKeyCharacteristics;
