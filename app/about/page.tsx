import PokemonAboutHero from "@/components/about/pokemon-about-hero";
import PokemonBentoGrid from "@/components/about/pokemon-bento-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About the project",
};

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4">
            <PokemonAboutHero />
            <PokemonBentoGrid />
        </div>
    );
};

export default AboutPage;
