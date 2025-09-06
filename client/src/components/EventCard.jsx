'use client'
import React from 'react';


import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {IMAGE_API} from "@/utils/api";
import {useRouter} from "next/navigation";

const EventCard = ({id, title, banner, category, date, location, description }) => {

    const router = useRouter();


    const handleViewDetails = () => {
        router.push(`/events/${id}`);
    };

    const truncateWords = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit
            ? words.slice(0, wordLimit).join(" ") + "..."
            : text;
    };

    return (
        <div className="bg-white shadow-lg  hover:shadow-xl transition-shadow h-[400px]">
            <div className="relative w-full h-40">
                <Image
                    src={`${IMAGE_API}${banner}`}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="p-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {category}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mt-3">{title}</h2>
                <p className="text-sm md:text-base text-gray-500 mt-2 flex items-center gap-2">
                    <FontAwesomeIcon
                        icon={faCalendarAlt}
                        className="text-blue-500"
                        style={{width: '1em', height: '1em'}}
                    />
                    {new Date(date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                    })}

                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-red-500 ml-4"
                        style={{width: '1em', height: '1em'}}
                    />
                    {location}
                </p>
                <p className="text-gray-700 text-sm mt-2">
                    {truncateWords(description, 20)}
                </p>
                <button
                    onClick={handleViewDetails}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default EventCard;