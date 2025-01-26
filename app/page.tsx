import PokemonCard from "@/components/pokemon-card";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <>
            <section className="hero mt-2">
                <div
                    className="bg-[url('/pokemon-background.png')] h-[250px] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col mx-auto space-y-4">
                    <img alt="Pokemon Logo" src="/pokemon-logo.png" className="w-fit" />
                    <Input className="max-w-sm" />
                </div>
            </section>
            <section className="popular-pokemons container mt-8 mx-auto space-y-3">
                <h2 className="text-center font-semibold text-3xl">Most Popular Pokemons</h2>
                <PokemonCard />
                <hr />
            </section>
            <section className="highest-damage-dealers container mt-8 mx-auto space-y-3">
                <h2 className="text-center font-semibold text-3xl">Highest Damage Dealers</h2>
                <hr />
            </section>
        </>
    );
}
