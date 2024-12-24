import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});
const useAxiosSecure = () => {
    useEffect(() => {
        axios.interceptors.response.use((response) => {
            return response
        }, (error) => {


            //401 and 403
            return Promise.reject(error);
        })

    }, [])

    return instance
}

export default useAxiosSecure