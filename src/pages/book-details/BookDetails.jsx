import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import useAxios from "../../hook/useAxios"
import { toast } from "react-toastify"
import ReactStars from "react-rating-stars-component";
import Spinner from "../../components/Spinner"

const BookDetails = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)
    const axiosBase = useAxios()

    useEffect(() => {
        setLoading(true)
        axiosBase.post('/books/single-book', { id })
            .then((res) => {
                setBook(res.data)
                setLoading(false)
            })
            .catch((err) => {
                toast.error("Data loading failed")
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>{`${book?.name}`} - ReadSphere</title>
            </Helmet>
            <main className="w-11/12 md:container mx-auto">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="container mx-auto p-6">
                            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="w-full md:w-1/3">
                                    <img
                                        src={book?.image}
                                        alt={book?.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-full md:w-2/3 p-6 flex flex-col">
                                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                        {book?.name}
                                    </h1>
                                    <div className="text-gray-600 mb-4">
                                        <span className="font-semibold">Author:</span> {book?.author}
                                    </div>
                                    <div className="text-gray-600 mb-4">
                                        <span className="font-semibold">Category:</span> {book?.category}
                                    </div>
                                    <div className="text-gray-600 mb-4">
                                        <span className="font-semibold">Quantity:</span> {book?.quantity}
                                    </div>
                                    <div className="text-gray-600 mb-4">
                                        <span className="font-semibold">Rating:</span>
                                        <ReactStars
                                            count={5}
                                            value={book?.rating || 0}
                                            edit={false}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className="text-gray-600 mb-6">
                                        <span className="font-semibold">Description:</span> {book?.description}
                                    </div>
                                    <p className="text-gray-600 italic">
                                        {book?.bookContent}
                                    </p>
                                </div>
                            </div >
                        </div >
                    </>
                )}
            </main >
        </>
    )
}

export default BookDetails