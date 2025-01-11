import axios from "axios";
import Category from "./Category";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner";

const ShowCategories = () => {
    const [categories, setCategories] = useState([])
    const [categoryLoading, setCategoryLoading] = useState(false);
    const limitedCategories = categories.slice(0, 4);


    useEffect(() => {
        setCategoryLoading(true)
        axios.get('/categories.json')
            .then(res => {
                setCategories(res.data)
                setCategoryLoading(false)
            })
    }, [])

    return (
        <section className="w-11/12 md:container mx-auto my-14 md:my-24" id="categories">
            <div className="text-center space-y-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Explore Our Categories</h2>
                <p className="text-base md:text-lg text-gray-600">
                    Discover a wide variety of book categories tailored to every interest, from thrilling adventures to insightful history.
                </p>
            </div>
            {
                categoryLoading ? (
                    <Spinner small={true} />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            limitedCategories?.map((category, index) => {
                                return <Category key={index + 1} {...category} />
                            })
                        }
                    </div>
                )
            }
        </section>
    )
}

export default ShowCategories