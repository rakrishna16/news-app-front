import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../Services/api";
import ProfileDisp from '../Components/ProfileDisp';

const Profile = ({ profileu, setProfileu }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const token = localStorage.getItem("token");
  //const token = {userToken}
  //const navigate = useNavigate();
  //const email = localStorage.getItem("email");

  useEffect(() => {
    fetchProfile()
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get(`auth/getuser/${token}`);
      setProfileu(response.data.user);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(token)
  // const fetchProfile = async () => {
  //   await axios
  //       .get(`http://localhost:4000/api/auth/getuser/${token}`)
  //       .then((res) => setProfileu(res.data.user))
  //       .catch((error) => console.log(error));

  // };
  console.log(profileu)

  return (
    <div>
      <ProfileDisp profileu={profileu} setProfileu={setProfileu} />
    </div>
  )
}

export default Profile;