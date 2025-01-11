import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FcGoogle } from "react-icons/fc"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Helmet } from "react-helmet-async"
import useAuth from "../../../hook/useAuth"


const Register = () => {
    const { registerUser, updateDetails, setLoading, loginWithGoogle } = useAuth()
    const [error, setError] = useState({})
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const formValues = Object.fromEntries(formData)

        const { name, email, photoUrl, password } = formValues

        if (!name) {
            setError({ ...error, name: 'Name Is Required' })
            return
        }
        if (!email) {
            setError({ ...error, email: 'Email Is Required' })
            return
        }
        if (!photoUrl) {
            setError({ ...error, photoUrl: 'Photo Url Is Required' })
            return
        }
        if (!password) {
            setError({ ...error, password: 'Password Is Required' })
            return
        }

        const passRegEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/

        if (!password.match(passRegEx)) {
            setError({ ...error, password: 'Password Must Be of 6 Character, Must Contain 1 Uppercase and 1 Lowercase Letter' })
            return
        }

        registerUser(email, password)
            .then(() => {
                toast.success("Registration Successful")
                updateDetails(name, photoUrl)
                    .then(() => { navigate('/') })
                    .catch(() => {
                        setLoading(false)
                        toast.error("User Update Failed")
                    })
            })
            .catch(() => {
                setLoading(false)
                toast.error("Registration Failed")
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Sign In Successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                setLoading(false)
                toast.error("Sign In Faild")
            })
    }


    return (
        <>
            <Helmet>
                <title>Register - ReadSphere</title>
            </Helmet>
            <div className="flex justify-center items-center">
                <div className="flex flex-col-reverse md:flex-row bg-white  rounded-lg shadow-lg w-full max-w-5xl md:pt-0">
                    <div className="w-full md:w-1/2 px-8 py-10">
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 text-primary-new">
                            Register
                        </h2>
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 ">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {error.name && (
                                    <span className="text-red-600 text-xs mt-1">{error.name}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 ">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {error.email && (
                                    <span className="text-red-600 text-xs mt-1">{error.email}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 ">Photo URL</span>
                                </label>
                                <input
                                    name="photoUrl"
                                    type="url"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full"
                                    required
                                />
                                {error.photoUrl && (
                                    <span className="text-red-600 text-xs mt-1">{error.photoUrl}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 ">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        placeholder="Password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <div
                                        onClick={handleShowPass}
                                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-gray-700 "
                                    >
                                        {showPass ? <FaEyeSlash /> : <FaEye />}
                                    </div>
                                </div>
                                {error.password && (
                                    <span className="text-red-600 text-xs mt-1">{error.password}</span>
                                )}
                            </div>
                            <div className="form-control">
                                <button className="btn bg-primary-new hover:bg-secondary-new text-white">
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="text-center text-sm text-gray-600  mt-4">
                            Already have an account?{" "}
                            <Link
                                to="/auth/login"
                                className="text-blue-500 hover:underline "
                            >
                                Login
                            </Link>
                        </div>
                        <div className="divider">OR</div>
                        <button
                            onClick={handleGoogleLogin}
                            className="btn btn-ghost border border-gray-300  flex items-center justify-center gap-2 mx-auto"
                        >
                            <FcGoogle className="w-6 h-6" />
                            Sign in with Google
                        </button>
                    </div>

                    <div className="ms-auto rounded-e-xl bg-cover bg-no-repeat hidden md:flex flex-col justify-center items-center text-center text-white gap-4 bg-black/40 bg-blend-overlay" style={{ backgroundImage: `url('/images/register.jpg')` }}>
                        <h3 className="text-3xl font-semibold">New Here?</h3>
                        <p className="w-10/12 mx-auto">Please Feel Free To Sign Up and Stay Connected With Us.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register