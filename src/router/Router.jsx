import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import Auth from "../layouts/Auth";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import PrivateAlt from "./PrivateAlt";
import AddBooks from "../pages/add-book/AddBooks";
import AllBooks from "../pages/all-books/AllBooks";
import BorrowedBooks from "../pages/borrowed-books/BorrowedBooks";
import Private from "./Private";
import BookDetails from "../pages/book-details/BookDetails";
import UpdateBook from "../pages/update-book/UpdateBook";
import ByCategory from "../pages/book-by-category/ByCategory";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <Contact />
            },
            {
                path: '/all-books',
                element: <AllBooks />
            },
            {
                path: '/book/:id',
                element: <Private><BookDetails /></Private>
            },
            {
                path: '/books/:category',
                element: <ByCategory />
            },
            {
                path: '/book/update/:id',
                element: <Private><UpdateBook /></Private>
            },
            {
                path: '/add-book',
                element: <Private><AddBooks /></Private>
            },
            {
                path: '/borrowed-books',
                element: <Private><BorrowedBooks /></Private>
            },
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
                element: <PrivateAlt><Login /></PrivateAlt>
            },
            {
                path: '/auth/register',
                element: <PrivateAlt><Register /></PrivateAlt>
            },
        ]
    }
])

export default router