import React, { useEffect, useState } from 'react';
import LikedList from '../Components/LikedList';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';

const LikedPage = ({NewsapiKey}) => {

  const navigate = useNavigate()
  const [data, setData] = useState([])
  const isAuthenticated = !!localStorage.getItem("token");

  useEffect(() => {
      getLiked()
  }, []);

  const getLiked = async () => {
    //    setHeart(<FaHeart />) 
    //    setHstatus(false)
    if(isAuthenticated === true){
    try {
      const response = await api.get(`like/getliked`)
      setData(response.data.data);
      //  localStorage.setItem('token',response.data.token)
      // localStorage.setItem('role',response.data.role);
      //toast.success(response.data.message); 
    } catch (error) {
      //  setError(error.response.data.message);
      //toast.error(error.response.data.message);
      console.log(error)
    }
  }else{ navigate("/login")}
   
  
  }

  return (
    <div>
      {
      data.map((ele, index) => {
        return (
          <LikedList ele={ele} index={index} NewsapiKey={NewsapiKey} />
        )

      })
    }



    </div>
  );
};

export default LikedPage;