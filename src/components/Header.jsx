import { Link, NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { Tooltip } from "react-tooltip";
import useAuth from "../hook/useAuth";


const Header = () => {
    const { user, logOut } = useAuth()

    const handleLogout = () => {
        logOut()
            .then(() => { toast.warn("User Logged Out") })
            .catch(() => { toast.error("Something Went Wrong") })
    }

    const navItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all-books">All Books</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            {user && <li><NavLink to="/add-book">Add Book</NavLink></li>}
            {user && <li><NavLink to="/borrowed-books">Borrowed Books</NavLink></li>}

        </>
    )

    return (
        <div className="bg-primary-new/90 shadow-xl fixed top-0 z-50 w-full">
            <div className="container mx-auto bg-transparent">
                <div className="navbar justify-between items-center">
                    <div className="">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2 z-50">
                                {navItems}
                            </ul>
                        </div>
                        <Link to='/' className="text-xl ms-4 md:ms-0 font-semibold text-white">ReadSphere</Link>
                    </div>
                    <div className="space-x-4">
                        <ul className="menu-horizontal items-center  hidden lg:flex px-1 gap-6  text-white">
                            {navItems}
                        </ul>
                        {user ?
                            <div className="flex items-center gap-4">
                                <div className="z-30 relative">
                                    <div className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full" id="profile-pic">
                                            <img
                                                alt={user?.displayName}
                                                src={user?.photoURL} />
                                        </div>
                                        <Tooltip
                                            anchorSelect="#profile-pic"
                                            place="bottom"
                                            className="!p-2 !rounded-lg !bg-gray-700 !text-white !w-40 !h-24" clickable
                                        >
                                            <div className="flex flex-col justify-center items-center space-y-2 py-2">
                                                <p className="font-bold !text-sm">{user?.displayName}</p>
                                                <button
                                                    onClick={handleLogout}
                                                    className="px-4 py-2 bg-primary-new text-white rounded-lg hover:bg-secondary-new"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            :
                            <>
                                <ul className="menu-horizontal items-center flex px-1 gap-6  text-white">
                                    <li><NavLink to='/auth/login'>Login</NavLink></li>
                                    <li><NavLink to='/auth/register'>Register</NavLink></li>
                                </ul>

                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header