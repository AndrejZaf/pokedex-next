import PopularPokemons from "@/components/home/popular-pokemons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <>
            <section className="hero mt-4">
                <div
                    className="bg-[url('/pokemon-background.png')] h-[250px] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col mx-auto space-y-4">
                    <img alt="Pokemon Logo" src="/pokemon-logo.png" className="w-fit" />
                    <Input className="max-w-sm" />
                </div>
            </section>
            <section className="popular-pokemons container flex flex-col justify-center space-y-8 mt-8 mx-auto">
                <h2 className="text-center font-semibold text-3xl">Most Popular Pokemons</h2>
                <PopularPokemons />
                <Link href="/pokedex" className="text-center">
                    <Button className="bg-yellow-400 hover:bg-yellow-300 text-black">Find more in the Pokedex</Button>
                </Link>
                <hr />
            </section>
            <section className="highest-damage-dealers container mt-8 mx-auto space-y-3">
                <h2 className="text-center font-semibold text-3xl">Highest Damage Dealers</h2>
                <hr />
            </section>
        </>
    );
}
