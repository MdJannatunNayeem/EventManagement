'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {deleteEventRequest, getEventById} from "@/utils/apiRequest";
import {useParams, useRouter} from "next/navigation";
import {IMAGE_API} from "@/utils/api";

import {c} from "react/compiler-runtime";

const EventDetails = () => {

    const [event,setEvent] =useState(null);
    const params = useParams();
    const { id } = params;
    const router = useRouter();

    useEffect(() => {

        if (!id) return;

        const fetchEvent  = async () => {
            try {
                const res = await getEventById(id);
                setEvent(res.data);
            } catch (err) {
                console.error("Failed to fetch event:", err);
            }
        };

        fetchEvent ();
    }, [id]);


    const handleUpdate = () => {
        router.push(`/events/${id}/update`);
    };

    const handleDelete = async () => {
        alert("Do you really want to delete event?");
        await deleteEventRequest(id);
        router.push(`/events`);

    };
    if (!event) {
        return <p className="p-4">Loading...</p>;
    }

    return (

            <div className="bg-white shadow-lg overflow-auto w-screen min-h-screen">

                <div className="relative w-full h-64 md:h-144">
                    <Image
                        src={`${IMAGE_API}${event.banner}`}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>


                <div className="p-6 md:p-8">

                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {event.category}
          </span>


                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">
                        {event.title}
                    </h1>


                    <p className="text-sm md:text-base text-gray-500 mt-2 flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="text-blue-500"
                            style={{width: '1em', height: '1em'}}
                        />
                        {new Date(event.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}

                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="text-red-500 ml-4"
                            style={{width: '1em', height: '1em'}}
                        />
                        {event.location}
                    </p>

                    <p className="text-gray-700 text-sm md:text-base mt-4 md:mt-6 leading-relaxed">
                        {event.description}
                    </p>


                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleUpdate}
                            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition">
                            Update
                        </button>
                        <button
                            onClick={handleDelete}
                            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

    );
};

export default EventDetails;