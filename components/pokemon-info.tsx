import { Button } from "@/components/ui/button";
import { PokemonDamageDealerData } from "@/types";
import { determinePokemonColor, pokemonColor } from "@/utils/pokemon-color.util";
import Link from "next/link";
import React from "react";

const PokemonInfo = ({ pokemon }: { pokemon: PokemonDamageDealerData }) => {
    const color = pokemonColor[pokemon.name];
    const colorValues = determinePokemonColor(color);
    return (
        <div className="space-y-4">
            <div className="w-full rounded-md" style={{ backgroundColor: colorValues.background }}>
                <div className="flex items-center">
                    <img src={pokemon.image} alt={pokemon.name} />
                    <span className="text-2xl md:text-4xl font-semibold capitalize"
                          style={{ color: colorValues.badgeTextColor }}>{pokemon.name}</span>
                </div>
            </div>
            <p>{pokemon.description}</p>
            <div>
                <Link href={`/pokemon/${pokemon.id}`}>
                    <Button style={{ backgroundColor: colorValues.background, color: colorValues.badgeTextColor }}>Learn more about<span className="capitalize">{pokemon.name}</span></Button>
                </Link>
            </div>
        </div>
    );
};
export default PokemonInfo;
