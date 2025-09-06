import React from 'react';
import BannerTittle from "@/components/BannerTittle";

const Banner = () => {
    return (

        <div className="relative items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-[300px] md:h-[550px] -z-10">
                <img
                    src="/banner3.jpg"
                    alt="Event Banner"
                    className="w-full h-full object-cover object-center"
                />
                <BannerTittle/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        </div>

    );
};

export default Banner;