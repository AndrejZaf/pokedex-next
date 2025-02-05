import PokedexGrid from "@/components/pokedex/pokedex-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pokedex",
    description: "Find your favorite pokemon",
};

const PokedexPage = () => {
    return <PokedexGrid />;
};

export default PokedexPage;
