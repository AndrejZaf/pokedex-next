import BackButton from "@/components/back-button";
import KeyCharacteristics from "@/components/pokemon/key-characteristics";
import { PokemonMoves } from "@/components/pokemon/pokemon-moves";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExtendedPokemon, Pokemon } from "@/types";
import { determinePokemonColor } from "@/utils/color.util";
import { pokemonColor } from "@/utils/pokemon-color.util";

const PokemonPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const baseData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const basePokemonData: Pokemon = await baseData.json();
    const pokeColor = pokemonColor[basePokemonData.name];
    const pokemonColors = determinePokemonColor(pokeColor);
    const extendedData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const extendedPokemonData: ExtendedPokemon = await extendedData.json();
    return (
        <>
            <div className="w-full px-12 pt-4 mt-4" style={{ backgroundColor: pokemonColors.background }}>
                <div className="flex flex-col space-y-4">
                    <div>
                        <BackButton color={pokemonColors.badgeTextColor} />
                    </div>
                    <div className="capitalize font-semibold text-3xl"
                         style={{ color: pokemonColors.badgeTextColor }}>{basePokemonData.name}</div>
                    <div className="flex space-x-4">{basePokemonData.types.map(type =>
                        <Badge className="capitalize text-lg" key={type.type.name} style={{
                            backgroundColor: pokemonColors.badge,
                            color: pokemonColors.badgeTextColor,
                        }}>{type.type.name}</Badge>)}</div>
                    <div className="pokemon-image">
                        <img className="w-60 justify-self-center"
                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                             alt={basePokemonData.name} />
                    </div>
                </div>
            </div>
            <div className="bg-white w-full rounded-t-3xl mt-[-40px] flex justify-center">
                <Tabs defaultValue="about" className="mt-12">
                    <TabsList className="space-x-72">
                        <TabsTrigger tabColor={pokemonColors.background} value="about">About</TabsTrigger>
                        <TabsTrigger tabColor={pokemonColors.background} value="base-stats">Base Stats</TabsTrigger>
                        <TabsTrigger tabColor={pokemonColors.background} value="moves">Moves</TabsTrigger>
                    </TabsList>
                    <div className="max-w-3xl">
                        <TabsContent value="about">
                            <KeyCharacteristics basePokemon={basePokemonData} extendedPokemon={extendedPokemonData} />
                        </TabsContent>
                        <TabsContent value="base-stats">Base Stats</TabsContent>
                        <TabsContent value="moves"><PokemonMoves pokemon={basePokemonData} /></TabsContent>
                    </div>
                </Tabs>
            </div>
        </>
    );
};
export default PokemonPage;
