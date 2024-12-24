import { Helmet } from "react-helmet-async"
import Banner from "./components/Banner"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from "../../components/BookCard";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home - ReadSphere</title>
            </Helmet>
            <main>
                <Banner />
                <div>
                    <BookCard />
                </div>
            </main>
        </>
    )
}

export default Home