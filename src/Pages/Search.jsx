import axios from 'axios';
import React, { useEffect, useState, data } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


const Search = ({ searchResults,NewsapiKey, searchTerm }) => {
    const [urlValue] = useSearchParams()
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const ghi = urlValue.get("q");
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");


    console.log(searchQuery)

    useEffect(() => {
        fetchData();
    }, [ghi]);

    // const handleView = (id) => {
    //     setID(id)
    //     navigate(`/MovieDetails?id=${id}`)
    // }

    const fetchData = async () => {
        await axios
            .get(`https://newsdata.io/api/1/news?apikey=${NewsapiKey}&q=${searchQuery}&qInTitle=${searchQuery}`)
            .then((res) => setData(res.data.Search))
            .catch((error) => console.log(error));
        console.log(data)
    };

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
                        if (ele.Type === searchResults.toLowerCase()) {
                            return (
                                <div key={index} className="w-full my-2 bsis-1/1 md:basis-1/5 sm:basis-1/3 border border-gray-200 rounded-lg shadow hover:shadow-lg bg-white">
                                    <Link to={ele.link} className='rounded-t-lg' target="_blank"
                                        rel="noreferrer">
                                        <div className="basis-1/1 max-w-md rounded-t-lg md:h-50 md:shrink-0 bg-white dark:bg-gray-800 dark:border-gray-700">
                                            {ele.image_url ?
                                                <img
                                                    className="rounded-t-lg m-auto sm:h-52 sm:w-72 w-full object-cover md:w-72"
                                                    src={ele.image_url}
                                                    alt="product Image"
                                                /> :
                                                <img
                                                    className="rounded-t-lg m-auto h-48 sm:h-52 w-full object-cover md:w-72"
                                                    src="https://tse4.mm.bing.net/th?id=OIG1.NLfq2FOI2fUaLujNANrp&pid=ImgGn"
                                                    alt="product Image"
                                                />
                                            }
                                        </div>
                                    </Link>
                                    <div className='basis-1/1 max-w-md'>
                                        <div className="px-5 py-2">
                                            <h4 className='text-black text-sm font-bold'>{ele.source_name}</h4>
                                        </div>
                                        <div className="px-5">
                                            <h5 className="mb-2 text-sm font-normal tracking-tight text-gray-900 dark:text-gray-900">
                                                {ele.title}
                                            </h5>
                                            <p className="mb-1 font-thin text-xs text-gray-900 dark:text-gray-900">
                                                <span className="font-thin">category: {ele.category}</span>
                                            </p>
                                            <p className="flex justify-between mb-2 font-thin text-gray-900 dark:text-gray-900">
                                                <span className="font-thin text-xs">Date: {ele.pubDate} </span>
                                                {
                                                    hstatus ?
                                                        <button onClick={() => addHeart(ele)}><FaRegHeart /></button>
                                                        :
                                                        <button onClick={() => removeHeart(ele)}><FaHeart /></button>
                                                }
                                                {/* <Heart hstatus={hstatus} setHstatus={setHstatus} heart={heart} ele={ele} setHeart={setHeart}/>  */}
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <Link to={ele.link} className='rounded-t-lg' target="_blank"
                                                rel="noreferrer">
                                                <div className="m-4">
                                                    <div className="flex max-w-sm rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">

                                                        <button className="flex-1 font-bold text-sm bg-white px-2 py-2 rounded-xl text-gray-900">Read More..</button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* </Navigate> */}
                                    </div>
                                </div>

                            );
                        }

                    }) : navigate("/*")

            }
        </div>
    );
};

export default Search;