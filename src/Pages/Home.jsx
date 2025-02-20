import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import { FaRegHeart } from "react-icons/fa6";
import NewsDisp from '../Components/NewsDisp';


const Home = ({ profileu, searchResults, newsapiKey }) => {
    const navigate = useNavigate();
    const [totalnews, setTotalnews] = useState([])
    const [datah, setDatah] = useState([]);
    const [heart, setHeart] = useState(<FaRegHeart />)
    const [newscat, setNewscat] = useState([]);
    // const [newscati, setNewscati] = useState("");
    const isAuthenticated = !!localStorage.getItem("token");

    useEffect(() => {
        fetchDatah();
    }, []);

    // if(profileu.length >=1){
    //     profileu.map((ele, index) => {
    //         setNewscat(...newscat,ele.categories.join(','))
    //     })
        
    // }
    
// newscat.join(', ');
    const fetchDatah = async () => { 
        if(isAuthenticated){
        await axios
            .get(`https://newsdata.io/api/1/latest?apikey=pub_64768fc0af985457096b71b484051a88e82bc&q=science&category=technology`)
            .then((res) => setDatah(res.data.results))
            .catch((error) => console.log(error));
        }else{
            await axios
            .get(`https://newsdata.io/api/1/latest?apikey=pub_64768fc0af985457096b71b484051a88e82bc&q=science`)
            .then((res) => setDatah(res.data.results))
            .catch((error) => console.log(error));
        }
    };

    return (
        <div className="mx-12 my-16 justify-center">
            <Categories profileu={profileu} />
            {/* <ApiFetch/> */}
            <div className="flex flex-1 flex-row flex-wrap gap-6 my-16 justify-center">
                {datah.map((ele, index) => {
                    return (
                        <NewsDisp ele={ele} index={index} heart={heart} setHeart={setHeart} totalnews={totalnews} setTotalnews={setTotalnews} />
                    );
                })}

            </div>
            {/* {Tdata > 10 ?
        <Pagination Page={Page} setPage={setPage} Tdata={Tdata} /> : ""} */}
        </div>
    );
};

export default Home;