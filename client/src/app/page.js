import React from 'react';
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import stats from "@/components/Stats";
import Stats from "@/components/Stats";
import Service from "@/components/Service";
import Cause from "@/components/Cause";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <div>
            <Banner/>
            <NavBar/>
            <Stats/>
            <Service/>
            <Cause/>
            <Footer/>
        </div>
    );
};

export default Page;
