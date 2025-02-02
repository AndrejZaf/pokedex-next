const PokemonCharacteristicEntry = ({ label, value }: { label: string, value: string }) => {
    return (
        <>
            <div className="label text-lg text-gray-500">{label}</div>
            <div className="value text-lg capitalize">{value}</div>
        </>
    );
};
export default PokemonCharacteristicEntry;
