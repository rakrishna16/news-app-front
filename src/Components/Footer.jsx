import React from 'react';
import { SiVorondesign } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-800'>
            <nav className="flex items-center mx-auto justify-between flex-wrap bg-gray-800 p-5 max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex items-center mx-auto flex-shrink-0 text-white sm:mr-6 sm:mx-0">
                    {/* <svg className="fill-current h-8 w-8 mr-2" width={54} height={54} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
                    <SiVorondesign className="mx-auto h-8 w-auto" />
                    <Link to={"/"}><span className="font-semibold text-xl tracking-tight">HKX News</span></Link>
                </div>
                <div className='mx-auto my-5 sm:mx-0 sm:my-0'>
                    <p className='text-white'><Link to={"/"}>© HKX News App</Link>. All rights reserved.</p>
                </div>
            </nav>
        </div>
    );
};

export default Footer;