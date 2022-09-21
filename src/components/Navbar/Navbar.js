import React from 'react';
import Products from "../Products/Products";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Cart from "../Cart/Cart";

export default function Navbar({ totalItems }) {
    return (
        <Router>
            <nav className="bg-white px-2 dark:bg-gray-900 w-full md:block fixed z-20 top-0 left-0 ">
                <div className="w-full">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border-x-gray-100 md:flex-row md:space-x-8">
                        <div className="">


                        </div>
                        <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="/Home">Home</Link></li>
                        <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="">MEN</Link></li>
                        <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="">WOMEN</Link></li>
                        <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="">KIDS</Link></li>
                        <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="">HOME & LIVING</Link></li>
                        <li className="py-2 pr-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:flex-row md:space-x-8"><Link to="">BEAUTY</Link></li>

                        <div className="hidden relative md:block left">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                {/* <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg> */}
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />

                        </div>


                        <button type="button" className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                            <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">{totalItems}</div>
                        </button>
                    </ul>
                </div>
            </nav>

            {/* 👇️ Wrapping Route components in a Routes component */}
            {/* <Routes>
                <Route path="/products" element={<Products />} />
            </Routes> */}
        </Router >
    )
}
