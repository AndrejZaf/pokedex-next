import React from "react";

const KeyCharacteristics = () => {
    return (
        <>
            <div className="text-xl font-semibold">Key Characteristics</div>
            <div className="grid grid-cols-2 gap-4 max-w-md mt-2">
                <div className="label text-lg text-gray-500">Habitat</div>
                <div className="value text-lg">Grassland</div>
                <div className="label text-lg text-gray-500">Shape</div>
                <div className="value text-lg">Upright</div>
                <div className="label text-lg text-gray-500">Color</div>
                <div className="value text-lg">Blue</div>
                <div className="label text-lg text-gray-500">Height</div>
                <div className="value text-lg">0.50 m - 1.64 ft</div>
                <div className="label text-lg text-gray-500">Weight</div>
                <div className="value text-lg">0.09 kg - 0.20 lbs</div>
                <div className="label text-lg text-gray-500">Happiness</div>
                <div className="value text-lg">50</div>
                <div className="label text-lg text-gray-500">Experience</div>
                <div className="value text-lg">61</div>
            </div>
            <div>
                <div className="text-xl font-semibold">Breeding</div>
                <div className="grid grid-cols-2 gap-4 max-w-md">
                    <div className="label text-lg text-gray-500">Gender</div>
                    <div className="value text-lg">Grassland</div>
                    <div className="label text-lg text-gray-500">Egg Groups</div>
                    <div className="value text-lg">monster, water1</div>
                </div>
            </div>
        </>
    );
};
export default KeyCharacteristics;
