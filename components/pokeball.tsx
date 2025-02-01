const Pokeball = () => {
    return (
        <div className="relative w-full pt-[35%]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[200px] h-[200px] bg-white border-[10px] border-black rounded-full
                            overflow-hidden shadow-[inset_-10px_10px_0_10px_#ccc] animate-shake
                            before:absolute before:inset-0 before:h-1/2 before:bg-red-600
                            after:absolute after:inset-x-0 after:top-[calc(50%-10px)] after:h-5 after:bg-black">
                    <div className="absolute top-[calc(50%-30px)] left-[calc(50%-30px)] w-[60px] h-[60px]
                                bg-gray-200 border-[10px] border-white rounded-full z-10
                                shadow-[0_0_0_10px_rgba(0,0,0,1)] animate-blink">
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Pokeball;
