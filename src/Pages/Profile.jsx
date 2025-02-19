import React, { useEffect, useState } from 'react';
import api from "../Services/api";
import ProfileDisp from '../Components/ProfileDisp';
import axios from 'axios';

const Profile = () => {
  const [profiled, setProfiled] = useState("");
  const isAuthenticated = !!localStorage.getItem("token");
  const token = String(localStorage.getItem("token"));

  useEffect(() => {
    fetchProfileh()
  }, [isAuthenticated]);


console.log(token)
  const fetchProfileh = async () => { 
    try {
      const response = await api.get(`auth/getuser/${token}`);
      setProfiled(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

//console.log(data)
 
  // const fetchProfileh = async () => {
  //   await axios
  //       .get(`http://localhost:4000/api/auth/getuser/${token}`)
  //       .then((res) => setProfiled(res.data.user))
  //       .catch((error) => console.log(error));

  // };
  console.log(profiled);
  return (
    <div>
 <ProfileDisp profiled={profiled}/>
</div>
  )
}

export default Profile;