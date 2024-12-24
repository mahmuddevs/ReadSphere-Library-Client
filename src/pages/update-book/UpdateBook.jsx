import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async"
import useAxios from "../../hook/useAxios"
import UpdateForm from "./components/UpdateForm"
import { useEffect, useState } from "react"
import axios from "axios"

const UpdateBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const axiosBase = useAxios()
    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('/categories.json')
            .then(res => setCategories(res.data))
    },)

    const onSubmit = (data) => {
        // axiosBase.p('/books/add-book', data)
        //     .then((res) => { toast.success("Book Updated Successfully") })
        //     .catch(() => {
        //         toast.warn("Faild to Update book")
        //     })
    }
    return (
        <>
            <Helmet>
                <title>Update Book - ReadSphere</title>
            </Helmet>
            <main>
                <UpdateForm register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} categories={categories} />
            </main>
        </>
    )
}

export default UpdateBook