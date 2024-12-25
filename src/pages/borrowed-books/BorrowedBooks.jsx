import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hook/useAxiosSecure"
import NoData from "../../components/NoData"
import { toast } from 'react-toastify'
import useAuth from "../../hook/useAuth"
import BorrowedCard from "./components/BorrowedCard"
import Spinner from "../../components/Spinner"

const BorrowedBooks = () => {
    const [borrowedBooks, setBorrowedBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()

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

    return (
        <>
            <Helmet>
                <title>Borrowed Books - ReadSphere</title>
            </Helmet>
            <main className="w-11/12 md:container mx-auto mb-16">
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
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                            {
                                                borrowedBooks?.map((book) => {
                                                    return <BorrowedCard key={book._id} {...book} />
                                                })}
                                        </div>
                                    </>
                                ) : (
                                    <NoData />
                                )
                            }
                        </>
                    )}
                </section>
            </main >
        </>
    )
}

export default BorrowedBooks