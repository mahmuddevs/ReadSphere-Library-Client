import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxiosSecure from "../../hook/useAxiosSecure"
import { Helmet } from "react-helmet-async"
import { toast } from "react-toastify"
import BookCard from "../../components/BookCard"
import Spinner from "../../components/Spinner"

const ByCategory = () => {
    const { category } = useParams()
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        setLoading(true)
        axiosSecure.post('/books/book-by-category', { category })
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
                <title>By Category - ReadSphere</title>
            </Helmet>
            <main className="w-11/12 md:container mx-auto">
                <section className="text-center my-16">
                    <h2 className="text-3xl">{category}</h2>
                </section>
                <section className="my-16">
                    {loading ? (
                        <Spinner />
                    ) : (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {books?.map((book) => {
                                return <BookCard key={book._id} {...book} />
                            })}
                        </div>
                    )}
                </section>
            </main>
        </>
    )
}

export default ByCategory