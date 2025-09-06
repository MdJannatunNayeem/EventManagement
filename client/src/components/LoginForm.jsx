'use client'

import React, {useState} from 'react';
import { useRouter } from "next/navigation"
import {useAuthStore} from "@/store/useAuthStore";
import {login} from "@/utils/apiRequest";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useAuthStore((state) => state.setUser);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(password);
        const res = await login({ email, password });

        if (res.success) {
            setUser(res.user, res.token);
            router.push("/");
        }
    };


    return (
        <section className="flex justify-center">
            <div className="flex items-center justify-center px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
                <div className="xl:mx-auto xl:w-full shadow-lg p-4 xl:max-w-sm 2xl:max-w-md rounded-xl bg-white">
                    <div className="mb-2 flex justify-center"/>
                    <h2 className="text-center text-2xl font-bold leading-tight text-gray-800">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Have an account? Create a free account
                    </p>
                    <form className="mt-8" method="POST" onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                <label className="text-base font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-gray-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base font-medium text-gray-700">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        placeholder="........."
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-gray-400 focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    className="inline-flex w-full items-center justify-center rounded-md bg-gray-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-700"
                                    type="submit"

                                >
                                    Log In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default LoginForm;