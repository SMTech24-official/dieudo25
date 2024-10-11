"use client"

import image4 from "@/assets/slider-image-4.jpg";
import Image from "next/image";


const Hero = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value
        console.log(e.target.search.value);
        // handle form submission logic here
        alert(`Search with: ${search}`);
    };

    return (
        <div className="bg-[#003366]">
            <div className=" max-w-[1700px] mx-auto px-4 text-white">
                <div className="grid grid-cols-2 items-center justify-center lg:p-10">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-5xl font-bold ">
                                Find trusted garages near you, <br />
                                in just a few clicks
                            </h2>
                            <h4>
                                Get a quote or book a service from
                                top rated garages instantly for your
                                tire or maintenance.
                            </h4>
                        </div>
                        <form className="max-w-md" onSubmit={(e) => handleSearch(e)}>
                            <input
                                name="search"
                                type="search"
                                placeholder="Search for any service..."
                                className="w-full px-4 py-2 rounded bg-gray-800 text-black placeholder-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="mt-4 bg-[#FF6600] hover:bg-[#FF6600]/80 text-black w-full py-2 rounded"
                            >
                                Find garages
                            </button>
                        </form>
                    </div>
                    <div className="w-full h-[60vh]">
                        <Image
                            src={image4}
                            alt="Banner Image"
                            objectFit="cover"
                            className="rounded-lg !w-full !h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;