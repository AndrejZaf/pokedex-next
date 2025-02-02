import { Progress } from "@/components/ui/progress";
import { Pokemon } from "@/types";
import { determineStatColor } from "@/utils/pokemon-color.util";
import { highestPokemonStats } from "@/utils/pokemon.util";

const PokemonStats = ({ pokemon }: { pokemon: Pokemon }) => {
    const totalStats = pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
    return (
        <>
            <div className="text-xl font-semibold">Stats</div>
            {pokemon.stats.map(stat =>
                <div key={stat.stat.name} className="flex items-center gap-4">
                    <div className="basis-1/4 capitalize">{stat.stat.name}</div>
                    <div className="basis-1/4 font-semibold">{stat.base_stat}</div>
                    <div className="w-full"><Progress progressColor={determineStatColor(stat.stat.name)}
                                                      value={(stat.base_stat / highestPokemonStats[stat.stat.name]) * 100} />
                    </div>
                </div>,
            )}
            <div className="flex items-center gap-4">
                <div className="basis-1/4 capitalize">Total Stats</div>
                <div className="basis-1/4 font-semibold">{totalStats}</div>
                <div className="w-full"><Progress progressColor={determineStatColor("totalStats")} value={(totalStats / highestPokemonStats["total"]) * 100} />
                </div>
            </div>
        </>
    );
};
export default PokemonStats;
