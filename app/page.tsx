import PokemonHeroSearch from "@/components/home/pokemon-hero-search";
import PokemonHighestDamageDealers from "@/components/home/pokemon-highest-damage-dealers";
import PopularPokemons from "@/components/home/popular-pokemons";
import React from "react";

export default function Home() {
    return (
        <>
            <PokemonHeroSearch />
            <PopularPokemons />
            <PokemonHighestDamageDealers />
        </>
    );
}
