import axios from 'axios';
import React, { useEffect, useState, data } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../Services/api';
import SearchList from '../Components/SearchList';

const Search = ({ searchResults,NewsapiKey, searchTerm }) => {
    const [urlValue] = useSearchParams()
    const navigate = useNavigate();
    const [heart, setHeart] = useState(<FaRegHeart />)
     const [totalnews, setTotalnews] = useState([])
    const [likedn, setLikedn] = useState()
    const [data, setData] = useState([]);
    const [hstatus, setHstatus] = useState(true);
    //const [likedn, setLikedn] = useState("");
    const ghi = urlValue.get("id");
    const isAuthenticated = !!localStorage.getItem("token");
    //const [searchParams, setSearchParams] = useSearchParams();
    //const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");


    //console.log(searchQuery)

    useEffect(() => {
        fetchData();
    }, [ghi]);


    
    // const handleView = (id) => {
    //     setID(id)
    //     navigate(`/MovieDetails?id=${id}`)
    // }

    const fetchData = async () => {
        await axios
            .get(`https://newsdata.io/api/1/news?apikey=${NewsapiKey}&q=${ghi}`)
            .then((res) => setData(res.data.results))
            .catch((error) => console.log(error));
        
    };
    console.log(data)
    // const fetchTotal = async () => {
    //     await axios
    //         .get(`https://www.omdbapi.com/?s=${ghi}&page=${Page}&apikey=87ab1610`)
    //         .then((res) => setTData(res.data.totalResults))
    //         .catch((error) => console.log(error));
    // };
    return (
        <div className="flex flex-1 flex-wrap gap-6 mx-12 my-20 justify-center">
            {
                data ?
                    data.map((ele, index) => {
                            return (
                                <SearchList ele={ele} index={index} heart={heart} setHeart={setHeart} totalnews={totalnews} setTotalnews={setTotalnews}/>
                            );
                        

                    }) : navigate("/*")

            }
        </div>
    );
};

export default Search;