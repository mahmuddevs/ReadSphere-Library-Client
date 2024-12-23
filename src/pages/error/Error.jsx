import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
            <Helmet>
                <title>404 - ReadSphere</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">404</h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Oops! The page you're looking for isn't here.
                    </p>
                    <p className="mt-2 text-gray-500">
                        It looks like the book you searched for is missing from our shelves.
                    </p>
                    <div className="mt-4">
                        <img
                            src="/images/empty-bookshelf.jpg"
                            alt="Bookshelf Illustration"
                            className="mx-auto w-36"
                        />
                    </div>
                    <div className="mt-6">
                        <Link
                            to="/"
                            className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error