'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import DropDownBox from "@/components/DropDownBox";
import {logoutUser} from "@/utils/apiRequest";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);
    const loadFromStorage = useAuthStore((state) => state.loadFromStorage);

    useEffect(() => {
        loadFromStorage();
    }, []);

    async function handleLogout() {
        await logoutUser();
        logout();
        router.push("/my-event");
    }
    return (
        <div className="bg-transparent  relative z-10">
            <nav className="navbar navbar-expand-lg navbar-dark p-3 border-b  border-b-1 border-b-white shadow-xl ">
                <div className="container grid grid-cols-12 flex flex-row items-center">
                    <div className="navbar-header bg-green-400  mx-auto col-span-6 md:col-span-3 p-2 rounded-2xl">
                        <h2 className="font-mono italic text-base sm:text-lg md:text-2xl font-bold text-white text-center break-words">
                            Event Management
                        </h2>
                    </div>
                    <div className="hidden md:flex col-span-5 justify-center">

                        <ul className="flex space-x-6 text-white font-semibold font-mono">
                            <li className="nav-item group relative">
                                <Link className="transition duration-500 hover:text-green-400" href={"/"}>
                                  <span
                                      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-500 group-hover:after:w-full">
                                         Home
                                  </span>
                                </Link>
                            </li>
                            <li className="nav-item group relative">
                                <Link className="transition duration-500 hover:text-green-400" href={"/create-event"}>
                                  <span
                                      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-500 group-hover:after:w-full">
                                         Create Event
                                  </span>
                                </Link>
                            </li>
                            <li className="nav-item group relative">
                                <Link className="transition duration-500 hover:text-green-400" href={"/events"}>
                                  <span
                                      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-500 group-hover:after:w-full">
                                        All Events
                                  </span>
                                </Link>
                            </li>
                            {user && (
                                <li className="nav-item group relative">
                                    <Link className="transition duration-500 hover:text-green-400" href={"/my-event"}>
                                  <span
                                      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-500 group-hover:after:w-full">
                                        My Events
                                  </span>
                                    </Link>
                                </li>
                            )}
                            {!user && (
                                <>
                                    <li className="nav-item group relative">
                                        <Link className="transition duration-500 hover:text-green-400" href={"/login"}>
                                  <span
                                      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-500 group-hover:after:w-full">
                                        Log In
                                  </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item group relative">
                                        <Link className="transition duration-500 hover:text-green-400" href={"/signup"}>
                                  <span
                                      className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all after:duration-500 group-hover:after:w-full">
                                        Sign Up
                                  </span>
                                        </Link>
                                    </li>
                                </>
                            )}

                            {user && (<li className="nav-item group relative">
                                <div>
                                    <button
                                        onClick={handleLogout}
                                        className="px-2 rounded-md text-base text-white bg-red-400 hover:bg-black"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </li>)}


                        </ul>
                    </div>
                    <div className="hidden md:flex col-span-4 justify-end">
                        <div className="relative w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Search events by title"
                                className="w-full px-4 py-2 rounded-full border border-white text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-black"
                            >
                                <FontAwesomeIcon icon={faSearch} className="w-4 h-4"/>
                            </button>
                        </div>


                    </div>

                    <div className="md:hidden col-span-6 flex justify-end p-4  ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-green-400 text-2xl focus:outline-green"
                            aria-label="Toggle Menu"><FontAwesomeIcon icon={isOpen ? faTimes : faBars}/>
                        </button>
                    </div>

                </div>

                {isOpen && (
                    <div>
                        <DropDownBox />
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavBar;