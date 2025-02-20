import React, { useEffect, useState } from 'react';
import api from "../Services/api";
import ProfileDisp from '../Components/ProfileDisp';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profiled, setProfiled] = useState("");
  const isAuthenticated = !!localStorage.getItem("token");
  const token = String(localStorage.getItem("token"));
const navigate = useNavigate();
  useEffect(() => {
    fetchProfileh()
  }, [isAuthenticated]);

  const fetchProfileh = async () => { 
    if(isAuthenticated === true){
    try {
      const response = await api.get(`auth/getuser/${token}`);
      setProfiled(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }else{navigate("/login")}
  }

  return (
    <div>    
 <ProfileDisp profiled={profiled}/>
    
</div>
  )
}

export default Profile;