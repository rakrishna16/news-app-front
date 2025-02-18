import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiVorondesign } from "react-icons/si";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    const { id, token, passkey } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post(`https://news-app-back.onrender.com/api/auth/reset-password/${id}/${token}/${passkey}`, {
                password,
            })
            .then((res) => {
                toast.success(res.data.message);
                navigate("/login");
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
                    <h2 className="mt-10 text-center text-lg sm:text-2xl/9 font-bold tracking-tight text-gray-900">Please enter the new Password</h2></Link>
            </div>
            <div className="mt-5 mb-16 px-10 sm:px-1 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                        <div className="text-sm">
                            <Link to="/forgot-password" className="font-semibold text-teal-500 hover:text-gray-900">Forgot password?</Link>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input type={showPass ? "text" : "password"} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6" />
                    </div>
                    <div className="mt-2">
                        <input type="checkbox" onClick={() => setShowPass(!showPass)} className="p-10 checked:bg-teal-500 hover:bg-teal-500 text-gray-900" />{showPass ? " hide" : " show"} password
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Submit</button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Once Password update success page redirects to
                    <Link to="/login" className="font-semibold text-teal-500 hover:text-gray-900"> Login Page</Link>
                </p>
            </div>
        </div>
    );
};

export default ResetPassword;