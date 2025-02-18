import axios from "axios";

const api = axios.create({
    // baseURL: "https://news-app-back.onrender.com",
    baseURL: "http://localhost:4000/api/",
  });
  
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  export default api;