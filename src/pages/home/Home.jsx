import { Helmet } from "react-helmet-async"
import Banner from "./components/Banner"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ShowCategories from "./components/ShowCategories";
import LibraryCollection from "./components/LibraryCollection";
import Testimonials from "./components/Testimonials";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - ReadSphere</title>
            </Helmet>
            <main>
                <Banner />
                <ShowCategories />
                <LibraryCollection />
                <Testimonials />
            </main>
        </>
    )
}

export default Home