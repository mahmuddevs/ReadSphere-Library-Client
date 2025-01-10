import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxiosSecure from "../../hook/useAxiosSecure"
import { Helmet } from "react-helmet-async"
import { toast } from "react-toastify"
import BookCard from "../../components/BookCard"
import Spinner from "../../components/Spinner"
import NoData from "../../components/NoData"

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
                <title>{`${category}`} - ReadSphere</title>
            </Helmet>
            <div className="w-11/12 md:container mx-auto">
                <section className="text-center my-16">
                    <h2 className="text-3xl">{category}</h2>
                </section>
                <section className="my-16">
                    {loading ? (
                        <Spinner />
                    ) : (
                        <>
                            {
                                books.length > 0 ? (
                                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                                        {books?.map((book) => {
                                            return <BookCard key={book._id} {...book} />
                                        })}
                                    </div>
                                ) : (
                                    <NoData />
                                )
                            }
                        </>
                    )}
                </section>
            </div>
        </>
    )
}

export default ByCategory