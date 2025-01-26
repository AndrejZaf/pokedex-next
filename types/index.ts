export type PokemonMinified = {
    name: string;
    url: string;
};


export type Pokemon = {
    id: number;
    name: string;
    types: PokemonType[];
}


export type PokemonType = {
    slot: number;
    type: Type;
}

export type Type = {
    name: string;
    url: string;
}