import BackButton from "@/components/back-button";
import { Badge } from "@/components/ui/badge";
import { Pokemon } from "@/types";
import { determinePokemonColor } from "@/utils/color.util";
import { pokemonColor } from "@/utils/pokemon-color.util";

const PokemonPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData: Pokemon = await data.json();
    const color = pokemonColor[pokemonData.name];
    const colorValues = determinePokemonColor(color);
    return (
        <>
            <div className="w-full px-12 pt-4 mt-8" style={{ backgroundColor: colorValues.background }}>
                <div className="flex flex-col space-y-4">
                    <div>
                        <BackButton />
                    </div>
                    <div className="capitalize font-semibold text-3xl" style={{color: colorValues.badgeTextColor}}>{pokemonData.name}</div>
                    <div className="flex space-x-4">{pokemonData.types.map(type =>
                        <Badge className="capitalize text-lg" key={type.type.name} style={{backgroundColor: colorValues.badge, color: colorValues.badgeTextColor}}>{type.type.name}</Badge>)}</div>
                    <div className="pokemon-image">
                        <img className="w-60 justify-self-center"
                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                             alt={pokemonData.name} />
                    </div>
                </div>
            </div>
            <div className="bg-white w-full h-72 rounded-t-3xl mt-[-40px]">
            </div>
        </>
    );
};
export default PokemonPage;
