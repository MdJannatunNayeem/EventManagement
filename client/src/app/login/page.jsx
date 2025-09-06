import React from 'react';
import LoginForm from "@/components/LoginForm";
import NavBar from "@/components/NavBar";

const Page = () => {
    return (
        <div className="w-screen h-screen bg-blue-400 ">
            <NavBar/>
            <LoginForm />
        </div>
    );
};

export default Page;