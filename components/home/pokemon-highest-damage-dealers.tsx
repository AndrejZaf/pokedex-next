import PokemonInfo from "@/components/pokemon-info";
import { highestDamageDealers } from "@/utils/pokemon.data";
import React from "react";

const PokemonHighestDamageDealers = () => {
    return (
        <div className="highest-damage-dealers container mt-8 mx-auto space-y-3 mb-8">
            <h2 className="text-center font-semibold text-3xl">Highest Damage Dealers</h2>
            <hr />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-between gap-10 px-10">
                {highestDamageDealers.map((damageDealer) => (
                    <PokemonInfo key={damageDealer.id} pokemon={damageDealer} />
                ))}
            </div>
        </div>
    );
};
export default PokemonHighestDamageDealers;
