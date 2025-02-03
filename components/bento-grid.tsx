export default function BentoGrid() {
    return (
        <div className="mx-auto w-full mb-4">
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                <div className="relative lg:row-span-2">
                    <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                    <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                        <div
                            className="relative w-full grow [container-type:inline-size] max-lg:mx-auto">
                            <img
                                className="size-full object-cover object-right"
                                src="/pokemon-cover-1.png"
                                alt="Pokemon Cover 1"
                            />
                        </div>
                    </div>
                    <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-1">
                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                    <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                        <div>
                            <img
                                className="size-full object-cover object-right"
                                src="/pokemon-cover-2.png"
                                alt="Pokemon Cover 2"
                            />
                        </div>
                    </div>
                    <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                </div>
                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                    <div className="absolute inset-px rounded-lg bg-white"></div>
                    <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                        <div className="flex flex-1 items-center [container-type:inline-size]">
                            <img
                                className="size-full object-cover object-right"
                                src="/pokemon-cover-3.jpg"
                                alt="Pokemon Cover 3"
                            />
                        </div>
                    </div>
                    <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                </div>
                <div className="relative lg:row-span-2">
                    <div
                        className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    <div
                        className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                        <div className="relative w-full grow">
                            <img
                                className="size-full object-cover object-right"
                                src="/pokemon-cover-4.png"
                                alt="Pokemon Cover 4"
                            />
                        </div>
                    </div>
                    <div
                        className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                </div>
            </div>
        </div>
    );
}
