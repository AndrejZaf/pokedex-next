import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PokemonMinified } from "@/types";
import { determinePokemonColor } from "@/utils/color.util";
import { pokemonColor } from "@/utils/pokemon-color.util";

const PokemonCard = ({ pokemon, index }: { pokemon: PokemonMinified, index: number }) => {
    const color = pokemonColor[pokemon.name];
    const colorValues = determinePokemonColor(color);
    return (
        <Card className="aspect-video hover:opacity-75 transition delay-75 duration-150 ease-in-out" style={{ backgroundColor: colorValues.background }}>
            <CardHeader>
                <CardTitle className="capitalize font-semibold" style={{color: colorValues.badgeTextColor}}>{pokemon.name}</CardTitle>
                <CardDescription><Badge className="capitalize" style={{backgroundColor: colorValues.badge, color: colorValues.badgeTextColor}}>{color}</Badge></CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-end">
                    <img alt={pokemon.name} className="w-[70%]"
                         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`} />
                </div>
            </CardContent>
        </Card>
    );
};
export default PokemonCard;
