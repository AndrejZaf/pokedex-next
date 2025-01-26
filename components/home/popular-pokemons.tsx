import PokemonCard from "@/components/pokemon-card";
import { Pokemon } from "@/types";
import { getIndex } from "@/utils/url.util";
import Link from "next/link";
import React from "react";

const PopularPokemons = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=8");
    const pokemons = await data.json();
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-8">
                {pokemons.results.map((pokemon: Pokemon) => {
                        const index = getIndex(pokemon.url);
                        return <Link key={pokemon.name} href={`/pokemon/${index}`}>
                            <PokemonCard pokemon={pokemon} index={index} />
                        </Link>;
                    },
                )}
            </div>
        </>
    );
};
export default PopularPokemons;
