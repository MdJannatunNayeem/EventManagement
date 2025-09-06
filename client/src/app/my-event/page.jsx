'use client'

import React, {useEffect} from 'react';
import NavBar from "@/components/NavBar";
import EventCard from "@/components/EventCard";
import {useEventStore} from "@/store/useEventStore";

const Page = () => {
    const { events, fetchMyEvents, loading } = useEventStore();

    useEffect(() => {
        fetchMyEvents();
    }, [fetchMyEvents]);


    return (
        <div className="w-screen min-h-screen overflow-auto bg-blue-400 ">
            <NavBar/>
            <div className="container grid grid-cols-12 mx-2  my-3 gap-3">
                {events.map((event, index) => (
                    <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3">
                        <EventCard
                            id = {event._id}
                            title={event.title}
                            banner={event.banner}
                            category={event.category}
                            date={event.date}
                            location={event.location}
                            description={event.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;