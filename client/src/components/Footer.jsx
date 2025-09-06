import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Event Management</h2>
                        <p className="text-sm text-gray-300">
                            Plan, create & manage your events effortlessly with us. Your event success is our priority.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/about" className="hover:text-white transition">About</a></li>
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="text-gray-300 space-y-2 text-sm">
                            <li>Email: info@eventmanagement.com</li>
                            <li>Phone: +8801234567890</li>
                            <li>Location: Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                </div>


                <div className="mt-10  pt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Event Management. All rights reserved.
                </div>
            </footer>

        </div>
    );
};

export default Footer;