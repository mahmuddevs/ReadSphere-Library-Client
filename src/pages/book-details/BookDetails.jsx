import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import useAxios from "../../hook/useAxios"
import { toast } from "react-toastify"
import ReactStars from "react-rating-stars-component";
import Spinner from "../../components/Spinner"
import BorrowModal from "./components/BorrowModal"
import { useForm } from "react-hook-form"
import useAuth from "../../hook/useAuth"
import SimilarBooks from "./components/SimilarBooks"

const BookDetails = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)
    const [borrowed, setBorrowed] = useState(false)
    const axiosBase = useAxios()
    const modalRef = useRef()
    const formRef = useRef()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    const userEmail = user.email

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

    useEffect(() => {
        setLoading(true)
        axiosBase.post('/books/verify-borrow', { id, userEmail })
            .then((res) => {
                if (res.data.borrowed === true) {
                    setBorrowed(true)
                }
                setLoading(false)
            })
            .catch((err) => {
                toast.error("Data loading failed")
            })
    }, [])

    const handleShowModal = () => {
        modalRef.current.showModal()
    }

    const onSubmit = (data) => {
        const { userName, userEmail, returnDate } = data

        const borrowedBook = {
            userName, userEmail, bookID: id, returnDate
        }

        axiosBase.post(`/books/borrow-book`, borrowedBook)
            .then(() => {
                toast.success("Book Borrowed Successfully")
                formRef.current.reset()
                setBook(prevBook => ({
                    ...prevBook,
                    quantity: prevBook.quantity - 1
                }))
                modalRef.current.close()
                setBorrowed(true)
            })
            .catch(() => toast.warn("Failed to Borrowed Book"));
    };


    return (
        <>
            <Helmet>
                <title>{`${book?.name}`} - ReadSphere</title>
            </Helmet>
            <div className="w-11/12 md:container mx-auto mb-14">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="mx-auto">
                            <div className="lg:flex lg:items-start md:justify-between gap-8">
                                <div className="md:w-3/12">
                                    <img
                                        className="rounded-lg shadow-2xl h-96 border p-4 mx-auto"
                                        src={book?.image}
                                        alt="Atomic Habits book cover"
                                    />
                                </div>
                                <div className="md:w-9/12 grid gap-6">
                                    <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                                        {book?.category}
                                    </div>
                                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                        Atomic Habits
                                    </h1>
                                    <p className="text-xl text-gray-500">
                                        by James Clear
                                    </p>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <ReactStars
                                                count={5}
                                                value={book?.rating || 0}
                                                edit={false}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                            <span className="ml-2 text-gray-600 text-lg">{book?.rating}</span>
                                        </div>

                                        {book?.quantity ? (
                                            <>
                                                <span className="ml-4 px-3 py-1 text-sm font-semibol">Quantity:</span> {book?.quantity}
                                            </>
                                        ) : (
                                            <span className="ml-4 px-3 py-1 text-sm font-semibold text-red-800 bg-red-100 rounded-full">
                                                Out of stock
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-col sm:flex-row">
                                        <BorrowModal modalRef={modalRef}
                                            register={register}
                                            handleSubmit={handleSubmit(onSubmit)}
                                            errors={errors}
                                            formRef={formRef} />
                                        <button disabled={borrowed || book?.quantity === 0} onClick={handleShowModal} className="btn btn-primary w-32 text-base">Borrow</button>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Description:</h3>
                                        <p className="text-xl text-gray-700">
                                            {book?.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">About the Book</h3>
                                        <div className="">
                                            <p className="text-xl text-gray-700 leading-relaxed">
                                                {book?.bookContent}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div >
        </>
    )
}

export default BookDetails