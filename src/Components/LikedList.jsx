import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LikedList = ({ele,newsapiKey}) => {
  const [data, setData] = useState([])
  //console.log(ele)

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://newsdata.io/api/1/latest?apikey=${newsapiKey}&id=${ele.articleid}`)
      .then((res) => setData(res.data.results))
      .catch((error) => console.log(error));

  };
  //console.log(data)

  return (
    <>
      {
      data?
      data.map((ele, index) => {
        //console.log(ele)
        return (
          <div key={index} className="mx-10 my-3">
            <div key={index} className="flex max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover m-auto" src={ele.image_url} alt="Post Image" />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">{ele.title}</h4>
                {/* <p className="text-gray-600 mt-2">{ele.title}</p> */}
                <div className="mt-4">
                  <Link to={ele.link} className='rounded-t-lg text-l text-blue-500' target="_blank"
                    rel="noreferrer">Read more...</Link>
                </div>
              </div>
            </div>
          </div>
        )
      })
      :     
        navigate("/*")
      
      }
    </>
  )
};

export default LikedList;