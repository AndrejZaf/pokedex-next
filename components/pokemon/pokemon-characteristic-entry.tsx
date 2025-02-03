const PokemonCharacteristicEntry = ({ label, value }: { label: string, value: string }) => {
    return (
        <>
            <div className="label font-medium text-[#6c757d]">{label}</div>
            <div className="value font-medium capitalize">{value}</div>
        </>
    );
};
export default PokemonCharacteristicEntry;
