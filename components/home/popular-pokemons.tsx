import PokemonCard from "@/components/pokemon-card";
import { Button } from "@/components/ui/button";
import { PokemonMinified } from "@/types";
import { getIndex } from "@/utils/url.util";
import Link from "next/link";
import React from "react";

const PopularPokemons = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=8");
    const pokemons = await data.json();
    return (
        <div className="popular-pokemons container flex flex-col justify-center space-y-8 mt-8 mx-auto">
            <div className="space-y-3">
                <h2 className="text-center font-semibold text-3xl">Most Popular Pokemons</h2>
                <hr />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-8">
                {pokemons.results.map((pokemon: PokemonMinified) => {
                        const index = getIndex(pokemon.url);
                        return <Link key={pokemon.name} href={`/pokemon/${index}`}>
                            <PokemonCard pokemon={pokemon} index={index} />
                        </Link>;
                    },
                )}
            </div>
            <Link href="/pokedex" className="text-center">
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-black">Find more in the Pokedex</Button>
            </Link>
        </div>
    );
};
export default PopularPokemons;
