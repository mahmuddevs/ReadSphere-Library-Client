import { useRef, useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { toast } from "react-toastify"
import { Helmet } from "react-helmet-async"
import useAuth from "../../../hook/useAuth"

const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const { loginUser, loginWithGoogle, setLoading } = useAuth()
    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const formValues = Object.fromEntries(formData)

        const { email, password } = formValues
        loginUser(email, password)
            .then(() => {
                e.target.reset()
                toast.success("Login Successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                setLoading(false)
                toast.error("Invalid Credentials Try Again")
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
                <title>Login - ReadSphere</title>
            </Helmet>
            <div className="flex justify-center items-center">
                <div className="card w-full max-w-4xl bg-white  shadow-xl flex flex-col md:flex-row rounded-lg md:pt-0">
                    <div className="hidden md:flex flex-col justify-center items-center text-center text-white gap-4 rounded-s-xl bg-black/40 bg-blend-overlay"
                        style={{ backgroundImage: `url('/images/login.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <h3 className="text-3xl font-semibold">Welcome Back</h3>
                        <p className="w-10/12 mx-auto">
                            Please log in using your personal information and stay connected.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    ref={emailRef}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <div
                                        onClick={handleShowPass}
                                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                                    >
                                        {showPass ? (
                                            <FaEyeSlash className="text-lg" />
                                        ) : (
                                            <FaEye className="text-lg" />
                                        )}
                                    </div>
                                </div>
                                <label className="label">
                                    <a className="label-text hover:underline cursor-pointer">
                                        Forgot Password?
                                    </a>
                                </label>
                                <label className="label text-sm">
                                    Don't Have an Account?{" "}
                                    <Link to="/auth/register" className="label-text-alt link link-hover">
                                        Register
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="text-center text-sm mt-4">Or Sign In With</div>
                        <div className="form-control mt-2">
                            <button
                                onClick={handleGoogleLogin}
                                className="btn btn-ghost border border-gray-400"
                            >
                                <FcGoogle className="w-8 h-8" />
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login