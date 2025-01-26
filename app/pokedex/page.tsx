"use client";

import PokemonCard from "@/components/pokemon-card";
import { Pokemon } from "@/types";
import { getIndex } from "@/utils/url.util";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useSWRInfinite from "swr/infinite";


const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Network error");
    }
    return response.json();
};

const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.next) {
        return null;
    }

    const offset = pageIndex * 16;
    return `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=16`;
};

const PokedexPage = () => {
    const { ref, inView } = useInView();
    const { data, setSize, isValidating, isLoading } = useSWRInfinite(getKey, fetcher);
    useEffect(() => {
        if (inView && !isValidating && !isLoading) {
            setSize((prevSize) => prevSize + 1);
        }
    }, [inView, isValidating, setSize, isLoading]);

    return (
        <>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-8">
                {data?.map((page) =>
                    page.results.map((pokemon: Pokemon) => (
                        <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
                            <PokemonCard index={getIndex(pokemon.url)} pokemon={pokemon} />
                        </Link>
                    )),
                )}
            </div>
            <div ref={ref}>Load More</div>
        </>
    );
};
export default PokedexPage;
