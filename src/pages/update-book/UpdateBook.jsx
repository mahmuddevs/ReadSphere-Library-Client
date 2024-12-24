import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hook/useAxios";
import UpdateForm from "./components/UpdateForm";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { toast } from 'react-toastify';

const UpdateBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const formRef = useRef()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [categories, setCategories] = useState([]);
    const axiosBase = useAxios()


    useEffect(() => {
        axios.get('/categories.json')
            .then(res => setCategories(res.data))
            .catch(() => toast.error("Failed to load categories"));
    }, []);
    useEffect(() => {
        setLoading(true);
        axiosBase.post('/books/single-book', { id })
            .then((res) => {
                setBook(res.data);
                setLoading(false);
                reset(res.data);
            })
            .catch(() => {
                toast.error("Data loading failed");
                setLoading(false);
            });
    }, [id, axiosBase, reset]);

    const onSubmit = (data) => {
        axiosBase.put(`/books/update-book/${id}`, data)
            .then(() => {
                toast.success("Book Updated Successfully")
                formRef.current.reset()
            })
            .catch(() => toast.warn("Failed to update book"));
    };

    return (
        <>
            <Helmet>
                <title>Update Book - ReadSphere</title>
            </Helmet>
            <main>
                {loading ? (
                    <Spinner />
                ) : (
                    <UpdateForm
                        register={register}
                        handleSubmit={handleSubmit(onSubmit)}
                        errors={errors}
                        categories={categories}
                        data={book}
                        formRef={formRef}
                    />
                )}
            </main>
        </>
    );
}

export default UpdateBook;
