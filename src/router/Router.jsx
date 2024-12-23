import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Auth from "../layouts/Auth";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: '/auth',
                element: <Navigate to='/auth/login' />
            },
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
        ]
    }
])

export default router