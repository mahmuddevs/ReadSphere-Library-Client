import { Helmet } from "react-helmet-async"
import Banner from "./components/Banner"
import ShowCategories from "./components/ShowCategories";
import LibraryCollection from "./components/LibraryCollection";
import Testimonials from "./components/Testimonials";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - ReadSphere</title>
            </Helmet>
            <Banner />
            <ShowCategories />
            <LibraryCollection />
            <Testimonials />
        </>
    )
}

export default Home