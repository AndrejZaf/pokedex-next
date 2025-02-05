import PokemonSearchInput from "@/components/pokemon-search-input";
import React from "react";

const PokemonHeroSearch = () => {
    return (
        <div className="hero">
            <div
                className="bg-[url('/pokemon-background.png')] h-[250px] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col mx-auto space-y-4">
                <img alt="Pokemon Logo" src="/pokemon-logo.png" className="w-fit" />
                <PokemonSearchInput />
            </div>
        </div>
    );
};
export default PokemonHeroSearch;
