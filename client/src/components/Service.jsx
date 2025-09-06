import React from 'react';

const Service = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">

                <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
                    Our Services
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    <div className="bg-gray-200  shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                        <img
                            src="/corporate.jpg"
                            alt="Event Planning"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Conference</h3>
                            <p className="text-gray-700">
                                We help you plan events from scratch — from theme to timeline — making your event
                                organized and stress-free.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-200  shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                        <img
                            src="/weeding.jpg"
                            alt="Venue Management"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Weading Management</h3>
                            <p className="text-gray-700">
                                Our team takes care of booking, setup, and coordination to ensure your venue fits your
                                needs perfectly.
                            </p>
                        </div>
                    </div>


                    <div
                        className="bg-gray-200  shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                        <img
                            src="/workshop.jpg"
                            alt="Guest Coordination"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">Workshop</h3>
                            <p className="text-gray-700">
                                Our Workshop Management service ensures smooth execution of your workshops from planning to completion.
                                We handle scheduling, participant coordination, resource allocation, and on-site support to create a
                                productive and engaging learning environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Service;