import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Auth from "../layouts/Auth";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
            },
            {
                path: '/auth/register',
            },
        ]
    }
])

export default router