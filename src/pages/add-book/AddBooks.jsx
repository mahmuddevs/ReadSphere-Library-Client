import { Helmet } from "react-helmet-async"
import AddBookForm from "./components/AddBookForm"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import useAxios from "../../hook/useAxios"
import axios from "axios"
import { useEffect, useState } from "react"


const AddBooks = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const axiosBase = useAxios()
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('/categories.json')
            .then(res => setCategories(res.data))
    }, [])


    const onSubmit = (data) => {
        axiosBase.post('/books/add-book', data)
            .then((res) => { toast.success("Book Added Successfully") })
            .catch(() => {
                toast.warn("Faild to add book")
            })
    }

    return (
        <>
            <Helmet>
                <title>Add Book - ReadSphere</title>
            </Helmet>
            <main>
                <div className="w-11/12 md:container mx-auto my-8 text-center">
                    <h2 className="text-3xl">Add Book</h2>
                </div>
                <AddBookForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} categories={categories} />
            </main>
        </>
    )
}

export default AddBooks