import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import NotFound from './Pages/NotFound';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotificationPush from './Components/notificationPush';
import Profile from './Pages/Profile';
import { generateToken } from './firebase';
import LikedPage from './Pages/LikedPage';
import Search from './Pages/Search';



const App = () => {
  const [token, setToken] = useState('');
  const [passkey, setPasskey] = useState('');
  const [profile, setProfile] = useState([]);
  const [email, setEmail] = useState("");
  const [profileu, setProfileu] = useState([]);
  const [searchResults, setSearchResults] = useState('science');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const NewsapiKey = import.meta.env.VITE_NEWS_API;

  useEffect(() => {
    generateToken()
  }, [])

  //   const fetchProfile = async () => {
  //     await axios
  //         .get(`https://newsdata.io/api/1/latest?apikey=${NewsapiKey}&q=${searchResults}`)
  //         .then((res) => setProfile(res.data.results))
  //         .catch((error) => console.log(error));
  //     //console.log(data)
  // };

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <div>
          <Header NewsapiKey={NewsapiKey} profileu={profileu} setProfileu={setProfileu} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults} />
        </div>
        <Routes>
          <Route path='/' element={<Home profileu={profileu} setProfileu={setProfileu} NewsapiKey={NewsapiKey}/>} />
          <Route path='login' element={<Login setToken={setToken} token={token} passkey={passkey} setPasskey={setPasskey} email={email} setEmail={setEmail} />} />
          <Route path='register' element={<Register />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='*' element={<NotFound />} />
          <Route path='notificationpush' element={<NotificationPush />} />
          <Route path='Search' element={<Search data={data} searchResults={searchResults} NewsapiKey={NewsapiKey} setSearchResults={setSearchResults} />} />
          <Route path='profile' element={<Profile email={email} NewsapiKey={NewsapiKey} setEmail={setEmail} profileu={profileu} setProfileu={setProfileu} />} />
          <Route path='likedpage' element={<LikedPage NewsapiKey={NewsapiKey}/>} />

        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;