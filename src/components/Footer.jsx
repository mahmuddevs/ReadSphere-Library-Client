import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Thank You For Subscribing!",
            text: "We will keep you updated!",
            icon: "success"
        });
    }

    return (
        <footer className="bg-base-200">
            <div className="footer text-base-content p-10 container mx-auto">
                <aside className="self-center">
                    <h2 className="text-2xl font-bold">ReadSphere</h2>
                    <p>
                        Providing reliable service since 2015
                    </p>
                    <div className="flex gap-4 mt-2">
                        <FaFacebook className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        <FaInstagram className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        <FaX className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                        <FaLinkedin className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
                    </div>
                </aside>
                <nav>
                    <h6 className="text-lg text-black font-bold">Company</h6>
                    <Link to='/about-us' className="link link-hover">About us</Link>
                    <Link to='/contact-us' className="link link-hover">Contact</Link>
                    <Link to='/all-books' className="link link-hover">Books</Link>
                </nav>
                <div>
                    <h6 className="text-lg text-black  font-bold">Newsletter</h6>
                    <div className="flex justify-center items-center py-4">
                        <form className="flex w-full max-w-lg shadow-md rounded-lg overflow-hidden" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 focus:outline-none text-gray-800"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white px-6 py-3 hover:bg-primary transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p className="text-sm">Copyright © {new Date().getFullYear()} - All right reserved by <span className="underline">XYZ</span> Ltd.</p>
                </aside>
            </footer>
        </footer>
    )
}

export default Footer