'use client'

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {fileUpload, getEventById, updateEventRequest} from "@/utils/apiRequest";
import { IMAGE_API } from "@/utils/api";
import Image from "next/image";

const UpdateCard = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        date: '',
        location: '',
        banner: ''
    });
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { id } = useParams();

    // Fetch event data
    useEffect(() => {
        if (!id) return;

        const fetchEvent = async () => {
            try {
                const res = await getEventById(id);
                setFormData({
                    title: res.data.title,
                    description: res.data.description,
                    category: res.data.category,
                    date: res.data.date.split('T')[0],
                    location: res.data.location,

                });
                setPreview(res.data.banner);
            } catch (err) {
                console.error("Failed to fetch event:", err);
            }
        };

        fetchEvent();
    }, [id]);




    // Handle input change
    const handleChange = (e) => {
        const { name, value, files } = e.target;

            setFormData({ ...formData, [name]: value });

    };

    // Submit updated event
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {

           const reqBody = {
               title: formData.title,
               description: formData.description,
               category: formData.category,
               date: formData.date,
               location: formData.location,

           }
            await updateEventRequest(id, reqBody);
            alert("Event updated successfully!");
            router.push(`/events/${id}`);
        } catch (err) {
            console.error(err);
            alert("Failed to update event.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto my-6 bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="p-4 md:p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Update Event</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="flex-1 border p-2 rounded-lg"
                            required
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="flex-1 border p-2 rounded-lg"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="meetup">Meetup</option>
                            <option value="workshop">Workshop</option>
                            <option value="conference">Conference</option>
                            <option value="wedding">Wedding</option>
                        </select>
                    </div>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Description"
                        className="border p-2 rounded-lg w-full"
                        required
                    />


                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="flex-1 border p-2 rounded-lg"
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Location"
                            className="flex-1 border p-2 rounded-lg"
                            required
                        />
                    </div>




                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition w-full"
                    >
                        {loading ? "Updating..." : "Update Event"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCard;
