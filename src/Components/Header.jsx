import React, { useState } from 'react';
import { SiVorondesign } from "react-icons/si";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import api from '../Services/api';



const Header = ({ NewsapiKey, profileu, setProfileu, searchTerm, setSearchTerm, searchResults, setSearchResults }) => {
  //const [searchTerm, setSearchTerm] = useState("");
  const [hide, setHide] = useState("true");
  const [show, setShow] = useState('hidden');
  const [shide, setShide] = useState("true");
  const [sshow, setSshow] = useState('hidden');
  //const [searchParams, setSearchParams] = useSearchParams();
  //const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "new");
  const isAuthenticated = !!localStorage.getItem("token");


  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?id=${searchTerm}`);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    setShide("true");
    setSshow("hidden");
    navigate("/login");
  }

  const handleMenu = () => {
    setHide("false")
    setShow("block")
  }
  const closeMenu = () => {
    setHide("true")
    setShow("hidden")
  }

  const openProf = () => {
    setShide("false")
    setSshow("block")
  }
  const closeProf = () => {
    setShide("true")
    setSshow("hidden")
  }

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {hide == "true" ?
                <button type="button" onClick={handleMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>

                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  {/*
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          */}
                  <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
                :
                <button type="button" onClick={closeMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>

                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  {/*
            Icon when menu is open.
            Menu open: "block", Menu closed: "hidden"
          */}
                  <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              }

            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="mx-auto h-10 w-auto" src="https://tse4.mm.bing.net/th?id=OIG4.j7jaTCwHOxkxCC4uAxCm&pid=ImgGn" alt="Your Company" />
                {/* <SiVorondesign className="mx-auto h-10 w-auto text-white" /> */}
                <Link to={"/"}> <span className="font-semibold text-xl tracking-tight text-white">HKX News</span></Link>
              </div>
              <div className="hidden m-auto w-1/2 sm:block">
                <div className="flex space-x-4">
                  <form className="max-w-md mx-auto my-5 sm:my-0 w-full">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input type="search"
                        name="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search news..." required />
                      <button type="submit" onClick={handleSubmit} className="text-white absolute end-2.5 bottom-2.5 bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-700 dark:hover:bg-slate-50 dark:hover:text-gray-900 dark:focus:ring-blue-800">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <button type="button" className="relative mr-5 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button> */}
              <Link to={"likedpage"}>
                <button type="button" className="relative mr-5 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                  <FaRegHeart className='size-6' />
                </button>
              </Link>
              {hide == "true" ?
                <FaSearch onClick={handleMenu} className="sm:hidden text-3xl rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
                :
                <FaSearch onClick={closeMenu} className="sm:hidden text-3xl rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
              }
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div className='hidden sm:block'>
                  {

                    isAuthenticated ? (
                      <>
                        {shide == "true" ?
                          <>
                            {/* <button type="button"  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user img" />
                          </button> */}
                            <h2 onMouseOver={openProf} className="rounded-full p-1 mx-5 capitalize my-3 text-lg font-extrabold text-center w-10 h-10 bg-white border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" >{profileu[0].name ? profileu[0].name.charAt(0) : ''}</h2>
                          </>
                          :
                          <>
                            {/* <button type="button" onMouseOver={closeProf} className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user img" />
                          </button> */}
                            <h2 onMouseOver={closeProf} className="rounded-full p-1 mx-5 capitalize my-3 text-lg font-extrabold text-center w-10 h-10 bg-white border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" >{profileu[0].name ? profileu[0].name.charAt(0) : ''}</h2>
                          </>
                        }
                      </>
                    )
                      :
                      (
                        <>
                          <Link to={"/register"} className="rounded-md bg-gray-900 mx-2 px-3 py-2 text-sm font-medium text-white" aria-current="page">Register</Link>
                          <Link to={"/login"} className="rounded-md bg-blue-500 mx-3 px-3 py-2 text-sm font-medium text-white" aria-current="page">Login</Link>
                        </>)
                  }

                </div>
                {/*
            Dropdown menu, show/hide based on menu state.
          */}

                <div className={`${sshow} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-non`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>

                  <Link to={"/profile"} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>

                  <Link onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`${show} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <div className="m-auto w-4/5">
              <div className="flex space-x-4">
                {/* <form className="max-w-md mx-auto my-5 sm:my-0 w-full">
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                     <input type="search"
                      name="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search news..." required />
                    <button type="submit" onClick={handleSubmit} className="text-white absolute end-2.5 bottom-2.5 bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-700 dark:hover:bg-slate-50 dark:hover:text-gray-900 dark:focus:ring-blue-800">Search</button>
                  </div>
                </form> */}
              </div>
            </div>
            <div className="relative ml-1">
              {isAuthenticated ?
                <div className="text-center">
                  <Link to={"/profile"} className="rounded-md bg-gray-900 mx-2 px-3 py-2 text-sm font-medium text-white" aria-current="page">Your Profile</Link>
                  <a onClick={handleLogout} className="rounded-md bg-blue-500 mx-3 px-3 py-2 text-sm font-medium text-white" aria-current="page">Sign out</a>
                </div>
                :
                <div className="text-center">
                  <Link to={"/register"} className="rounded-md bg-gray-900 mx-2 px-3 py-2 text-sm font-medium text-white" aria-current="page">Register</Link>
                  <Link to={"/login"} className="rounded-md bg-blue-500 mx-3 px-3 py-2 text-sm font-medium text-white" aria-current="page">Login</Link>
                </div>
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;