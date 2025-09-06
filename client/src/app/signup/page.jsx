import React from 'react';
import NavBar from "@/components/NavBar";
import LoginForm from "@/components/LoginForm";
import SignUpFrom from "@/components/SignUpFrom";

const Page = () => {
    return (
        <div className="w-screen h-screen bg-blue-400 ">
            <NavBar/>
            <SignUpFrom/>
        </div>
    );
};

export default Page;