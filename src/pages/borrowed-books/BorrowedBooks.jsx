import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hook/useAxiosSecure"
import NoData from "../../components/NoData"
import { toast } from 'react-toastify'
import useAuth from "../../hook/useAuth"
import Spinner from "../../components/Spinner"
import useAxios from "../../hook/useAxios"
import BorrowedTable from "./components/BorrowedTable"

const BorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const axiosBase = useAxios()

    const { user } = useAuth()
    const email = user?.email


    useEffect(() => {
        setLoading(true)
        axiosSecure.get(`/books/borrowed-book/${email}`)
            .then((res) => {
                setBorrowedBooks(res.data)
                setLoading(false)
            })
            .catch((err) => {
                toast.error("Data loading failed")
            })
    }, [])

    const handleReturnBook = (id) => {
        axiosBase.get(`/books/return-book/${id}`)
            .then((res) => {
                if (res.data.deletedCount > 0) {
                    const updatedData = borrowedBooks.filter((book) => book._id !== id)
                    setBorrowedBooks(updatedData)
                    toast.warn("Book Has Been Returned")
                }
            })
            .catch((err) => {
                toast.error("Book Return Failed")
            })
    }

    return (
        <>
            <Helmet>
                <title>Borrowed Books - ReadSphere</title>
            </Helmet>
            <div className="w-11/12 md:container mx-auto mb-16">
                <section className="text-center my-16">
                    <h2 className="text-3xl">My Borrowed Books</h2>
                </section>
                <section>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <>
                            {
                                borrowedBooks.length > 0 ? (
                                    <>
                                        <div className="overflow-x-auto">
                                            <table className="table table-zebra w-full border-collapse border border-gray-300">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 py-2">Cover</th>
                                                        <th className="px-4 py-2">Book Details</th>
                                                        <th className="px-4 py-2">Rating</th>
                                                        <th className="px-4 py-2">Borrowed Date</th>
                                                        <th className="px-4 py-2">Return Date</th>
                                                        <th className="px-4 py-2">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {borrowedBooks?.map((book) => (
                                                        <BorrowedTable
                                                            key={book._id}
                                                            {...book}
                                                            handleReturnBook={handleReturnBook}
                                                        />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                ) : (
                                    <NoData />
                                )
                            }
                        </>
                    )}
                </section>
            </div >
        </>
    )
}

export default BorrowedBooks