import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center content-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Pokemon - Gotta catch em all</h2>
                    <p className="text-justify">Imagine a world where interesting creatures that have powers roam free,
                        each with their own
                        unique abilities and personalities that you can catch and keep in a little red and white ball.
                        These creatures are called Pokemon and you keep them in a poke ball. As a young trainer, you set
                        out on an adventure to explore this world and catch as many of these creatures as you can,
                        traveling through different regions, each with its own unique environment and different types of
                        Pokemon.</p>
                    <div>
                        <Link href="/pokedex">
                            <Button className="bg-yellow-400 hover:bg-yellow-300 text-black">Check the Pokedex</Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src="/pokeball-logo.svg" alt="Pokeball Logo" className="w-80 h-80 mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
