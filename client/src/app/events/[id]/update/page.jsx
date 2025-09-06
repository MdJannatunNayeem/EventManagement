import React from 'react';
import NavBar from "@/components/NavBar";
import Update from "@/components/Update";

const Page = () => {
    return (
        <div className={"w-screen min-h-screen overflow-auto bg-blue-400"}>
            <NavBar/>
            <Update/>
        </div>
    );
};

export default Page;