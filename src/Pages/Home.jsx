import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Categories from '../Components/Categories';
import { FaRegHeart } from "react-icons/fa6";
import NewsDisp from '../Components/NewsDisp';


const Home = ({ profileu, searchResults, NewsapiKey }) => {
    const navigate = useNavigate();
    const [totalnews, setTotalnews] = useState([])
    const [data, setData] = useState([]);
    const [heart, setHeart] = useState(<FaRegHeart />)
    const [newsid, setnewsid] = useState("new");
    //console.log(searchTerm)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios
            .get(`https://newsdata.io/api/1/latest?apikey=${NewsapiKey}&q=science`)
            .then((res) => setData(res.data.results))
            .catch((error) => console.log(error));
        //console.log(data)
    };

    return (
        <div className="mx-12 my-16 justify-center">
            <Categories profileu={profileu} />
            {/* <ApiFetch/> */}
            <div className="flex flex-1 flex-row flex-wrap gap-6 my-16 justify-center">
                {data.map((ele, index) => {
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