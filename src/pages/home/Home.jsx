import { Helmet } from "react-helmet-async"
import Banner from "./components/Banner"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import Category from "./components/Category";
import axios from 'axios'



const Home = () => {
    const [categories, setCategories] = useState([])
    const limitedCategories = categories.slice(0, 4);


    useEffect(() => {
        axios.get('/categories.json')
            .then(res => setCategories(res.data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Home - ReadSphere</title>
            </Helmet>
            <main>
                <Banner />
                <section className="w-11/12 md:container mx-auto my-16">
                    <div className="text-center space-y-4 my-8">
                        <h2 className="text-4xl font-bold text-gray-800">Explore Our Categories</h2>
                        <p className="text-lg text-gray-600">
                            Discover a wide variety of book categories tailored to every interest, from thrilling adventures to insightful history.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                        {
                            limitedCategories?.map((category, index) => {
                                return <Category key={index + 1} {...category} />
                            })
                        }
                    </div>

                </section>
            </main>
        </>
    )
}

export default Home