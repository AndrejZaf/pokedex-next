"use client";

import { AutoComplete } from "@/components/autocomplete";
import { pokemons } from "@/utils/pokemon.util";
import { useEffect, useState } from "react";

type PokemonSearchEntry = {
    value: string;
    label: string;
};

const PokemonSearchInput = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [data, setData] = useState<PokemonSearchEntry[]>([]);

    useEffect(() => {
        setData(filterPokemons(searchValue));
    }, [searchValue]);

    const filterPokemons = (value: string) => {
        return pokemons.filter(pokemon => pokemon.name.toLocaleLowerCase().startsWith(value.toLowerCase()))
            .slice(0, 20)
            .map(({ name, id }) => ({
                value: id,
                label: `${name}`,
            }));
    };

    return (
        <AutoComplete
            selectedValue={selectedValue}
            onSelectedValueChange={setSelectedValue}
            searchValue={searchValue}
            onSearchValueChange={setSearchValue}
            items={data ?? []}
            emptyMessage="No pokemon found."
        />
    );
};
export default PokemonSearchInput;
