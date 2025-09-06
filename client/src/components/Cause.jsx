import React from 'react';

const Cause = () => {
    return (
        <div className="bg-gray-200 container mx-auto mb-20 pb-10">
            <div className =" flex flex-col items-center justify-center ">
                  <div className="flex flex-col items-center justify-center ">
                       <h1 className="font-extrabold text-3xl text-center mt-10 ">
                           Why Choose Us for your Event?
                       </h1>
                      <p className="text-sm text-gray-500">
                          Event that you will Remember
                      </p>
                  </div>
                <div className="flex flex-row items-center justify-center w-230">
                    <div className="flex flex-col items-center justify-center ">
                        <h4 className="font-bold text-xl text-center mt-10 ">
                            All kind of Logistics and Resources Support
                        </h4>
                        <p className="text-sm text-gray-500 text-center ">
                            As an experienced Event Management company,
                            we have all kind of Event equipment, logistics and resources available
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-230 ">
                        <h4 className="font-bold text-xl text-center mt-10 ">
                            All kind of Logistics and Resources Support
                        </h4>
                        <p className="text-sm text-gray-500 text-center">
                            As an experienced Event Management company,
                            we have all kind of Event equipment, logistics and resources available
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cause;