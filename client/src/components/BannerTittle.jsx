import React from 'react';

const BannerTittle = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center z-5">
            <h1 className="text-white font-extrabold drop-shadow-lg
                     text-[1.5rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem]
                     max-w-4xl leading-tight">
                Plan, Create & Attend Events Effortlessly
            </h1>
        </div>
    );
};

export default BannerTittle;