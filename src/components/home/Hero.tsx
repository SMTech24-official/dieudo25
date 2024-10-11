"use client"

import banner from "@/assets/banner.png";
import Image from "next/image";


const Hero = () => {

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const search = (e.target as HTMLFormElement).search.value;
        console.log(search);
        // handle form submission logic here
        alert(`Search with: ${search}`);
    };


    return (
        <div className="bg-primary">
            <div className=" max-w-[1700px] mx-auto px-4 text-white">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-10 gap-4 items-center justify-center lg:p-10 md:py-8 py-5">
                    <div className="space-y-8 ">
                        <div className="space-y-2 ">
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold lg:w-[700px]">
                                Find trusted garages near you,
                                in just a few clicks
                            </h2>
                            <h4 className="text-sm md:text-base">
                                Get a quote or book a service from
                                top rated garages instantly for your
                                tire or maintenance.
                            </h4>
                        </div>
                        <form className="max-w-md" onSubmit={(e) => handleSearch(e)}>
                            <div className="flex items-center gap-2 relative">
                                <label htmlFor="Search" className="md:text-xl">Search:</label>
                                <input
                                    id="Search"
                                    name="search"
                                    type="search"
                                    placeholder="Search for any service..."
                                    className="w-full peer px-4 py-2 rounded bg-gray-800 text-black placeholder-gray-400 bg-primary border-b border-primary outline-none focus:border-white"
                                    required
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin absolute right-0 opacity-35 peer-focus:opacity-100">
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>


                            <button
                                type="submit"
                                className="mt-4 bg-secondary hover:bg-secondary/80  w-full py-2 rounded text-white"
                            >
                                Find garages
                            </button>
                        </form>
                    </div>
                    <div className="w-full h-[60vh] ">
                        <Image
                            src={banner}
                            alt="Banner Image"
                            objectFit="cover"
                            className="rounded-lg !w-full !h-full object-cover "
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;