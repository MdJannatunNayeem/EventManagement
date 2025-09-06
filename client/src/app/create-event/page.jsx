'use client'

import React, {useState} from 'react';
import NavBar from "@/components/NavBar";

import {createEventRequest, fileUpload,} from "@/utils/apiRequest";
import {useRouter} from "next/navigation";

const Page = () => {


    const router = useRouter();
    const [file,setFile] = useState(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        category:"",
        date:"",
        location:"",
        banner:""
    });

    const fileUploadFun = async () => {
        if (!file) {
            alert("Please select a file");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        const result = await fileUpload(formData);
        console.log("picture",result);
        return result?.data?.file.filename;
    };

    const submitData = async (e) => {
        e.preventDefault();

        const img = await fileUploadFun();
        console.log("banner",img);

        if(data.title.length===0)
            alert("Please enter first name");
        else if(data.description.length===0)
            alert("Please enter last name");
        else if(data.category.length===0)
            alert("Please enter email");
        else if (data.date.length===0)
            alert("Please enter password 6 characters");
        else if(img.length===0)
            alert("Please enter image");
        else {
            const fullData = {...data, banner: img};

            const res = await createEventRequest(fullData);
            alert("Event created successfully!");
            router.push("/events");
        }
    };

    return (
        <div className="w-screen h-screen bg-blue-400">
            <NavBar/>
            <section className="p-4 flex justify-center ">

                <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                        Create a Event
                    </h2>

                    <form className="space-y-5">

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    name="title"
                                    type="text"
                                    onChange={(e) => setData({...data, title: e.target.value})}
                                    value={data.title}
                                    placeholder=" Tittle"
                                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <input
                                    name="description"
                                    type="text"
                                    onChange={(e) => setData({...data, description: e.target.value})}
                                    value={data.description}
                                    placeholder="Description"
                                    className="mt-1 w-full textarea-2 border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                                />
                            </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <select
                                id="category"
                                name="category"
                                onChange={(e) => setData({...data, category: e.target.value})}
                                value={data.category}
                                className="block w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-gray-400 outline-gray-400 p-3"
                            >
                                <option value="">Choose a Category</option>
                                <option value="wedding">Wedding</option>
                                <option value="workshop">Workshop</option>
                                <option value="conference">Conference</option>
                                <option value="meetup">Meetup</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                name="date"
                                type="datetime"
                                onChange={(e) => setData({...data, date: e.target.value})}
                                value={data.date}
                                placeholder="yyyy-mm-dd"
                                className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                                />
                            </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                name="location"
                                type="location"
                                onChange={(e) => setData({...data, location: e.target.value})}
                                value={data.location}
                                placeholder="Location"
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                            />
                        </div>



                        <div>
                            <label className="block text-sm font-medium text-gray-700">Banner Picture</label>
                            <input
                                name="avatar"
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}

                                className="mt-1 w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                                          file:rounded-md file:border-0 file:text-sm file:font-semibold
                                          file:bg-gray-500 file:text-white hover:file:bg-gray-700"
                            />
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={submitData}
                                className="w-full bg-gray-800 text-white py-2.5 rounded-md font-semibold hover:bg-gray-700 transition duration-200"
                            >
                                Create a Event
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Page;