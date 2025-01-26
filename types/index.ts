export type PokemonMinified = {
    name: string;
    url: string;
};


export type Pokemon = {
    id: number;
    name: string;
    types: PokemonType[];
    moves: PokemonMove[];
}


export type PokemonType = {
    slot: number;
    type: Type;
}

export type Type = {
    name: string;
    url: string;
}

export type Move = {
    name: string;
}

export type PokemonMove = {
    move: Move;
    version_group_details: PokemonVersionGroupDetails[];
}

export type PokemonVersionGroupDetails = {
    level_learned_at: number;
}