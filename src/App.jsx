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
// import { generateToken } from './firebase';
import LikedPage from './Pages/LikedPage';
import Search from './Pages/Search';
import api from "./Services/api";
import { requestForToken, onMessageListener } from "./firebase";


const App = () => {
  const [token, setToken] = useState('');
  const [newsapiKey,setNewsapiKey] = useState('');
  const [passkey, setPasskey] = useState('');
  const [profile, setProfile] = useState([]);
  const [email, setEmail] = useState("");
  const [profileu, setProfileu] = useState("");
  const [searchResults, setSearchResults] = useState('science');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const isAuthenticated = !!localStorage.getItem("token");
  const tokenn = String(localStorage.getItem("token"));
 //const newsapiKey = import.meta.env.VITE_NEWS_API;
 //setNewsapiKey("pub_64768fc0af985457096b71b484051a88e82bc");
 
  useEffect(() => {
    requestForToken().then((token) => {
      if (token) {
        console.log("Token Received:", token);
        // Send this token to the backend to send push notifications
      }
    });
    onMessageListener().then((payload) => {
      console.log("Foreground Notification:", payload);
      alert(`New Notification: ${payload.notification.title}`);
    });
    fetchProfile();
  }, [])


  
  const fetchProfile = async () => { 
    try {
      const response = await api.get(`auth/getuser/${tokenn}`);
      setProfileu(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  

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
          <Header newsapiKey={newsapiKey} profileu={profileu} setProfileu={setProfileu} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchResults={searchResults} setSearchResults={setSearchResults} />
        </div>
        <Routes>
          <Route path='/' element={<Home profileu={profileu} setProfileu={setProfileu} newsapiKey={newsapiKey}/>} />
          <Route path='/login' element={<Login setToken={setToken} token={token} passkey={passkey} setPasskey={setPasskey} email={email} setEmail={setEmail} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/notificationpush' element={<NotificationPush />} />
          <Route path='/Search' element={<Search data={data} searchResults={searchResults} newsapiKey={newsapiKey} setSearchResults={setSearchResults} searchTerm={searchTerm} />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/likedpage' element={<LikedPage newsapiKey={newsapiKey}/>} />

        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;