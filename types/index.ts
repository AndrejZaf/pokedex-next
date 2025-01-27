export type PokemonMinified = {
    name: string;
    url: string;
};


export type Pokemon = {
    id: number;
    name: string;
    types: PokemonType[];
    moves: PokemonMove[];
    base_experience: number;
    abilities: PokemonAbility[];
    weight: number;
    height: number;
    stats: PokemonStat[];
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

export type ExtendedPokemon = {
    base_happiness: number;
    habitat: PokemonHabitat;
    color: PokemonColor;
    shape: PokemonShape;
    egg_groups: PokemonEggGroup[];
    gender_rate: number;
}

export type PokemonHabitat = {
    name: string;
}

export type PokemonColor = {
    name: string;
}

export type PokemonShape = {
    name: string;
}

export type PokemonEggGroup = {
    name: string;
}

export type Ability = {
    name: string;
}

export type PokemonAbility = {
    ability: Ability;
}

export type Stat = {
    name: string;
}

export type PokemonStat = {
    base_stat: number;
    stat: Stat;
}