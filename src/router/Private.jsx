import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hook/useAuth"
import Spinner from "../components/Spinner"

const Private = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <Spinner />
    }


    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to='/auth/login' />
}

export default Private