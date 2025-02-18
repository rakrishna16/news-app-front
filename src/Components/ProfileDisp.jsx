import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../Services/api";


const ProfileDisp = ({ profileu, setProfileu }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  const userToken = localStorage.getItem("token");
  const token = { userToken }
  console.log(profileu)

  useEffect(() => {

    const fetchProflie = async () => {
      try {
        const response = await api.get(`auth/getuser/${token}`);
        setProfileu(response.data.user);
      } catch (error) {
        console.log(error);
      }
    }
    isAuthenticated ?
      fetchProflie()
      : ""
  }, []);

  //console.log(profileu.categories)
  return (
    <div>
      {profileu ?
        <div className="bg-gradient-to-r from-blue-500 to-blue-500 min-h-screen flex items-center justify-center p-4">

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 text-center mb-8 md:mb-0">
                {/* <img src="" alt="Profile Picture" className="rounded-full w-48 h-48 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" /> */}
                <h2 className="rounded-full p-5 mx-11 capitalize mb-3 text-lg font-extrabold text-center w-32 h-32 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105" >{profileu.name ? profileu.name.charAt(0) : ''}</h2>
                <h1 className="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{profileu.name}</h1>

                {/* <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">Edit Profile</button> */}
              </div>
              <div className="md:w-2/3 md:pl-8">

                <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">News Categories</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {profileu.categories.map((ele, index) => {
                    return (
                      <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{ele}</span>
                    )
                  })}
                </div>
                <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">News frequency</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {profileu.frequency.map((fele, findex) => {
                    return (
                      <span key={findex} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{fele}</span>
                    )
                  })}
                </div>
                <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">News notification</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {profileu.notificationchannels.map((nele, nindex) => {
                    return (
                      <span key={nindex} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{nele}</span>
                    )
                  })}
                </div>
                <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">Contact Information</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {profileu.email}
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {profileu.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        :
        navigate("/*")}
    </div>
  );
};

export default ProfileDisp;