import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response?.status === 401){
            localStorage.removeItem("token");
            console.error("Session expired or unauthorized. Redirecting to login...");
            if (typeof window !== "undefined") window.location.href = "/login";
        }
        else if (error.response?.status === 503){
            console.error("Our servers are experiencing issues. Please try again later.");
        }

        return Promise.reject(error);
    }
);

export default api;