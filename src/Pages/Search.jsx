import axios from 'axios';
import React, { useEffect, useState, data } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../Services/api';
import SearchList from '../Components/SearchList';
import Categories from '../Components/Categories';

const Search = ({ searchResults, newsapiKey, searchTerm }) => {
    const [urlValue] = useSearchParams()
    const navigate = useNavigate();
    const [heart, setHeart] = useState(<FaRegHeart />)
    const [totalnews, setTotalnews] = useState([])
    const [likedn, setLikedn] = useState()
    const [data, setData] = useState([]);
    //const [categories,setCategories] = useState("");
    const [hstatus, setHstatus] = useState(true);
    //const [likedn, setLikedn] = useState("");
    const ghi = urlValue.get("id");
    const categories = urlValue.get("cat");
    //setCategories(cat)
    const isAuthenticated = !!localStorage.getItem("token");
    //const [searchParams, setSearchParams] = useSearchParams();
    //const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

    //console.log(searchQuery)

    useEffect(() => {
        fetchData();
    }, [ghi, categories]);

    // const handleView = (id) => {
    //     setID(id)
    //     navigate(`/MovieDetails?id=${id}`)
    // }

    const fetchData = async () => {
        if (categories) {
            await axios
                .get(`https://newsdata.io/api/1/news?apikey=${newsapiKey}&category=${categories}`)
                .then((res) => setData(res.data.results))
                .catch((error) => console.log(error));
        }
        if (ghi) {
            await axios
                .get(`https://newsdata.io/api/1/news?apikey=${newsapiKey}&q=${ghi}`)
                .then((res) => setData(res.data.results))
                .catch((error) => console.log(error));
        }


    };

    return (
        <div className="flex flex-1 flex-wrap gap-6 mx-12 my-20 justify-center">
            <Categories />
            {

                data ?
                    data.map((ele, index) => {
                        return (
                            <SearchList ele={ele} index={index} heart={heart} setHeart={setHeart} totalnews={totalnews} setTotalnews={setTotalnews} />
                        );


                    }) : navigate("/*")

            }
        </div>
    );
};

export default Search;