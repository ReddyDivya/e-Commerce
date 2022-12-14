import React from 'react';
import Products from "../Products/Products";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import Cart from "../Cart/Cart";

export default function Navbar({ totalItems }) {

    const location = useLocation();

    return (
        <div className="w-full">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border-x-gray-100 md:flex-row md:space-x-8">
                <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="/home">Home</Link></li>
                <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="/products">Electronic Gadgets</Link></li>
                <div className="hidden relative md:block left">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
                {
                    location.pathname != "/cart" && (
                        <button type="button" className="inline-flex relative place-items-end p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {
                                totalItems > 0 && (<div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">{totalItems}</div>)
                            }
                            < Link to="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="#fff" /></svg>
                            </Link>
                        </button>
                    )
                }
            </ul>
        </div >
    )
}
