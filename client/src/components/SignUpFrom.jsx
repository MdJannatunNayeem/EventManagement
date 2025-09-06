'use client'
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import {fileUpload, login, register} from "@/utils/apiRequest";

const SignUpFrom = () => {

    const router = useRouter();
    const [file,setFile] = useState(null);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        profileImg: "",
        contactNo:"",
        address: "",
        password: "",
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        let newForm = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            contactNo: form.contactNo,
            address: form.address,
            password: form.password,
        };

        if (name === "firstName") newForm.firstName = value;
        if (name === "lastName") newForm.lastName = value;
        if (name === "email") newForm.email = value;
        if (name === "contactNo") newForm.contactNo = value;
        if (name === "address") newForm.address = value;
        if (name === "password") newForm.password = value;

        setForm(newForm);
    };

    const  handleSubmit = async (e) => {
        e.preventDefault();

        const img = await fileUploadFun();
        console.log("banner",img);

        if(form.firstName.length===0)
            alert("Please enter first name");
        else if(form.lastName.length===0)
            alert("Please enter last name");
        else if(form.email.length===0)
            alert("Please enter email");
        else if (form.password.length<6)
            alert("Please enter password 6 characters");
        else if(img.length===0)
            alert("Please enter image");
        else {
            const fullData = {...form, profileImg: img};

            const res = await register(fullData);
            alert("Account created successfully!");
            router.push("/login");
        }
    };

    return (

        <section className="p-4 flex justify-center ">

            <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Create Your Account
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Already have an account?{" "}
                </p>

                <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                name="firstName"
                                type="text"
                                value={form.firstName}
                                onChange={handleChange}
                                placeholder="First Name"

                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                name="lastName"
                                type="text"
                                value={form.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"

                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="example@mail.com"
                                value={form.email}
                                onChange={handleChange}

                                className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contact No</label>
                            <input
                                name="contactNo"
                                value={form.contactNo}
                                onChange={handleChange}
                                type="tel"
                                placeholder="+880"

                                className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            type="address"
                            placeholder="Address"

                            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="password"
                            className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-400 outline-gray-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
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
                            onClick={handleSubmit}
                            className="w-full bg-gray-800 text-white py-2.5 rounded-md font-semibold hover:bg-gray-700 transition duration-200"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </section>


    );
};

export default SignUpFrom;