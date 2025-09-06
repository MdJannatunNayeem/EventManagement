import React from 'react';
import NavBar from "@/components/NavBar";
import EventCard from "@/components/EventCard";
import EventDetails from "@/components/EventDetails";

const Page = () => {

       const events=[ {
            title: "Tech Conference 2025",
            banner: "/workshop.jpg",
            category: "Conference",
            date: "15/09/2025",
            location: "Dhaka, Bangladesh",
            description:
                "Join us for an amazing conference on emerging technologies, networking opportunities, insightful sessions, and keynote speakers from around the globe. This event will inspire and empower you to learn more about AI, cloud, and future tech trends."
        }

    ];
    return (
        <div className="w-screen min-h-screen overflow-auto bg-blue-400 ">
            <NavBar/>
            <EventDetails/>
        </div>
    );
};

export default Page;