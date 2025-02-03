"use client";

import PokemonCard from "@/components/pokemon-card";
import { PokemonMinified } from "@/types";
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

const PokedexGrid = () => {
    const { ref, inView } = useInView();
    const { data, setSize, isValidating, isLoading } = useSWRInfinite(getKey, fetcher);
    useEffect(() => {
        if (inView && !isValidating && !isLoading) {
            setSize((prevSize) => prevSize + 1);
        }
    }, [inView, isValidating, setSize, isLoading]);
    return (
        <>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-4 px-8">
                {data?.map((page) =>
                    page.results.map((pokemon: PokemonMinified) => {
                        const index = getIndex(pokemon.url);
                        return (
                            <Link key={pokemon.name} href={`/pokemon/${index}`}>
                                <PokemonCard index={index} pokemon={pokemon} />
                            </Link>
                        );
                    }),
                )}
            </div>
            <div ref={ref}>Load more</div>
        </>
    );
};
export default PokedexGrid;
