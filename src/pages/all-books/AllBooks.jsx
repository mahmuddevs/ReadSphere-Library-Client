import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import BookCard from "../../components/BookCard"
import { toast } from 'react-toastify'
import useAxiosSecure from "../../hook/useAxiosSecure"

const AllBooks = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()

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
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {books.map((book) => {
                            return <BookCard key={book._id} {...book} />
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}

export default AllBooks