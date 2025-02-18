import React from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';
import { SiVorondesign } from "react-icons/si";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("https://news-app-back.onrender.com/api/auth/forgot-password", { email })
            .then((res) => {
                toast.success(res.data.message);
                navigate("/login")
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message);
            });
    };

    return (
        <div>
            <div className="mt-5 p-10 sm:mx-auto sm:w-full sm:max-w-lg sm:mt-10">
                <Link to={"/"}>
                    <SiVorondesign className="mx-auto h-10 w-auto" />
                    <h2 className="mt-10 text-center text-lg sm:text-2xl/9 font-bold tracking-tight text-gray-900">Enter Email Address To Reset Password</h2></Link>
            </div>
            <div className="mt-5 mb-16 px-10 sm:px-1 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Submit</button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Once Email ID submitted You will receive an email with a link to reset Password.
                    {/* <Link to="/login" className="font-semibold text-teal-500 hover:text-gray-900"> Login Page</Link> */}
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;