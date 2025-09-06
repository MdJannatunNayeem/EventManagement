import React from 'react';

const Stats = () => {
    return (
        <div className="bg-green-400 mt-50 md:mt-118 py-10 border-2 border-green-400 shadow-2xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    <div className="p-4 flex justify-center items-center border-2 border-white text-white hover:text-green-500 hover:bg-white">
                        <p className="text-base  font-bold whitespace-nowrap">200 Complete Projects</p>
                    </div>
                    <div className="p-4 flex justify-center items-center border-2 border-white text-white hover:text-green-500 hover:bg-white">
                        <p className="text-base font-bold whitespace-nowrap">500 Happy Clients</p>
                    </div>
                    <div className="p-4 flex justify-center items-center border-2 border-white text-white hover:text-green-500 hover:bg-white">
                        <p className="text-base font-bold whitespace-nowrap">50 Employees</p>
                    </div>
                    <div className="p-4 flex justify-center items-center border-2 border-white text-white hover:text-green-500 hover:bg-white">
                        <p className="text-base   font-bold whitespace-nowrap">5 Years Experience</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Stats;