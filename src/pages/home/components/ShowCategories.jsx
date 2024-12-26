import axios from "axios";
import Category from "./Category";
import { useEffect, useState } from "react";

const ShowCategories = () => {
    const [categories, setCategories] = useState([])
    const limitedCategories = categories.slice(0, 4);


    useEffect(() => {
        axios.get('/categories.json')
            .then(res => setCategories(res.data))
    }, [])

    return (
        <section className="w-11/12 md:container mx-auto my-16">
            <div className="text-center space-y-4 my-8">
                <h2 className="text-4xl font-bold text-gray-800">Explore Our Categories</h2>
                <p className="text-lg text-gray-600">
                    Discover a wide variety of book categories tailored to every interest, from thrilling adventures to insightful history.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    limitedCategories?.map((category, index) => {
                        return <Category key={index + 1} {...category} />
                    })
                }
            </div>
        </section>
    )
}

export default ShowCategories