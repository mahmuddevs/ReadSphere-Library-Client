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
                toast.success("Book Updated Successfully")
                formRef.current.reset()
                modalRef.current.close()
                setBorrowed(true)
            })
            .catch(() => toast.warn("Failed to update book"));
    };

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
                            <div className="flex flex-col md:flex-row bg-white shadow-lg items-center rounded-lg overflow-hidden">
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
                                    <BorrowModal modalRef={modalRef}
                                        register={register}
                                        handleSubmit={handleSubmit(onSubmit)}
                                        errors={errors}
                                        formRef={formRef} />
                                    <button disabled={borrowed} onClick={handleShowModal} className="btn btn-primary w-32 text-base mt-6">Borrow</button>
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