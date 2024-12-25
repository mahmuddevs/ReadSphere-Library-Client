import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import BookCard from "../../components/BookCard"
import { toast } from 'react-toastify'
import useAxiosSecure from "../../hook/useAxiosSecure"
import Spinner from "../../components/Spinner"
import { Link } from "react-router-dom"
import useAxios from "../../hook/useAxios"

const AllBooks = () => {
    const [books, setBooks] = useState([])
    const [cardView, setCardView] = useState(true)
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()
    const axiosBase = useAxios()

    useEffect(() => {
        setLoading(true)
        axiosSecure.get('/books/all-books')
            .then((res) => {
                setBooks(res.data)
                setLoading(false)
            })
            .catch((err) => {
                toast.error("Data loading failed")
            })
    }, [])


    const handleView = (e) => {
        const view = e.target.value
        if (view === 'table') {
            setCardView(false)
        }
        if (view === 'card') {
            setCardView(true)
        }
    }

    const handleAvailableBooks = () => {
        axiosBase.get("/books/available-books")
            .then((res) => {
                setBooks(res.data)
                setLoading(false)
            })
            .catch((err) => {
                toast.error("Data loading failed")
            })
    }

    return (
        <>
            <Helmet>
                <title>All Books - ReadSphere</title>
            </Helmet>
            <main className="w-11/12 md:container mx-auto mb-16">
                <section className="text-center my-16">
                    <h4 className="text-lg font-semibold">All Books</h4>
                    <h2 className="text-3xl">Explore Our Collection</h2>
                    <p className="">Browse through our extensive library of books across various genres and categories. Find your next great read today.</p>
                </section>
                <section>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <>
                            <div className="mb-8 flex gap-4 justify-end">
                                <select onChange={handleView} className="select select-bordered w-full max-w-xs">
                                    <option value='card'>Card</option>
                                    <option value='table'>Table</option>
                                </select>
                                <button onClick={handleAvailableBooks} className="btn btn-accent">Show Available Books</button>
                            </div>
                            {cardView ? (
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    {books?.map((book) => {
                                        return <BookCard key={book._id} {...book} />
                                    })}
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Author</th>
                                                <th>Category</th>
                                                <th>Quantity</th>
                                                <th>Rating</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {books?.map((book, index) => {
                                                return <tr key={book._id}>
                                                    <th>{index + 1}</th>
                                                    <th>{book.name}</th>
                                                    <th>{book.author}</th>
                                                    <th>{book.category}</th>
                                                    <th>{book.quantity}</th>
                                                    <th>{book.rating}</th>
                                                    <th className="space-x-2">
                                                        <Link to={`/book/${book._id}`} className="btn btn-primary btn-sm">
                                                            Details
                                                        </Link>
                                                        <Link to={`/book/update/${book._id}`} className="btn btn-neutral btn-sm">
                                                            Update
                                                        </Link>
                                                    </th>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    )}
                </section>
            </main >
        </>
    )
}

export default AllBooks