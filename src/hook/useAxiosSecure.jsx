import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://library-management-one-gray.vercel.app/',
    withCredentials: true
});
const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        instance.interceptors.response.use((response) => {
            return response
        }, (error) => {
            if (error.status === 401 || error.status === 403) {
                console.log('Unauthorized Activity')
                logOut().then(() => {
                    console.log("User Logged Out");
                    navigate('/login');
                })
                    .catch(() => {
                        console.log("Something Went Wrong");
                    });
            }

            return Promise.reject(error); s
        })

    }, [])

    return instance
}

export default useAxiosSecure