import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useAuthStore} from "@/store/useAuthStore";
import {logoutUser} from "@/utils/apiRequest";

const DropDownBox = () => {

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
        <div>
            <div
                className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white border-t border-gray-200 font-mono ">

                <ul className="flex space-x-6 text-green-400 text-base text-sm font-semibold flex flex-col">
                    <li className="nav-item group relative">
                        <Link className="hover:text-black" href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item group relative">
                        <Link className="hover:text-black" href={"/create-event"}>
                            Create Event
                        </Link>
                    </li>
                    <li className="nav-item group relative">
                        <Link className="hover:text-black" href={"/my-event"}>
                            My Events
                        </Link>
                    </li>
                    {!user ? (
                        <>
                            <li className="nav-item group relative">
                                <Link className="hover:text-black" href={"/login"}>
                                    Log In
                                </Link>
                            </li>
                            <li className="nav-item group relative">
                                <Link className="hover:text-black" href={"/signup"}>
                                    Sign Up
                                </Link>
                            </li>
                        </>
                    ): (
                        <li className="nav-item group relative">
                            <div>
                                <button
                                    onClick={handleLogout}
                                    className="px-2 rounded-md text-base text-white bg-red-400 hover:bg-black"
                                >
                                    Logout
                                </button>
                            </div>
                        </li>
                    )}

                </ul>

                <div className="mt-2">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-full border border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-900 hover:text-black"
                        >
                            <FontAwesomeIcon icon={faSearch} className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownBox;