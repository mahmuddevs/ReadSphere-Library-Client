import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import BookCard from "../../components/BookCard"
import { toast } from 'react-toastify'
import Spinner from "../../components/Spinner"
import { Link } from "react-router-dom"
import useAxios from "../../hook/useAxios"
import NoData from "../../components/NoData"

const AllBooks = () => {
    const [books, setBooks] = useState([])
    const [cardView, setCardView] = useState(true)
    const [loading, setLoading] = useState(false)
    const axiosBase = useAxios()

    useEffect(() => {
        setLoading(true)
        axiosBase.get('/books/all-books')
            .then((res) => {
                setBooks(res.data)
                setLoading(false)
            })
            .catch((err) => {
                toast.error("Data loading failed")
            })
    }, [])


    const handleView = (e) => {
        e.preventDefault()
        const view = e.target.value
        if (view === 'table') {
            setCardView(false)
        }
        if (view === 'card') {
            setCardView(true)
        }
    }

    const handleSort = (e) => {
        e.preventDefault()
        const sort = e.target.value

        setLoading(true)
        axiosBase.post('/books/sort-by-rating', { sort })
            .then(res => {
                setBooks(res.data)
                setLoading(false)
            })
    }

    const handleAvailableBooks = () => {
        setLoading(true)
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
            <div className="w-11/12 md:container mx-auto mb-16">
                <section className="text-center my-8 md:my-16 space-y-2">
                    <h4 className="text-lg font-semibold">All Books</h4>
                    <h2 className="text-2xl md:text-3xl">Explore Our Collection</h2>
                    <p className="text-sm md:text-base">Browse through our extensive library of books across various genres and categories. Find your next great read today.</p>
                </section>
                <section>
                    <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-end">
                        <select onChange={handleView} className="select select-bordered w-xs">
                            <option value='card'>Card</option>
                            <option value='table'>Table</option>
                        </select>
                        <select onChange={handleSort} className="select select-bordered w-xs">
                            <option value="" >Default</option>
                            <option value="1">Low to High</option>
                            <option value="-1">High to Low</option>
                        </select>
                        <button onClick={handleAvailableBooks} className="btn btn-accent">Availables</button>
                    </div>
                    {loading ? (
                        <Spinner />
                    ) : (

                        <>
                            {
                                books.length > 0 ? (
                                    <>
                                        {
                                            cardView ? (
                                                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-stretch">
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
                                                                    <th className="flex flex-col md:flex-row gap-2">
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
                                            )
                                        }
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

export default AllBooks