import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = ({profileu}) => {
    //console.log(profileu)


    return (
        <div className="w-full mx-auto">
            <div className="hidden m-auto w-full sm:block">
          <div className="flex space-x-4 flex-nowrap justify-center">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link to={"/search?cat=All"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">All</Link>
            <Link to={"/search?cat=politics"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">politics</Link>
            <Link to={"/search?cat=education"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">education</Link>
            <Link to={"/search?cat=sports"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">sports</Link>
            <Link to={"/search?cat=entertainment"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">entertainment</Link>
            <Link to={"/search?cat=top"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">top</Link>
            <Link to={"/search?cat=science"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">science</Link>
            <Link to={"/search?cat=technology"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">technology</Link>
            <Link to={"/search?cat=Other"} className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Other</Link>
            </div>
            </div>
            
        </div>
    );
};

export default Categories;