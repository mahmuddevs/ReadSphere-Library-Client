import { Outlet, useLocation, useParams } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const App = () => {
    const { pathname } = useLocation()

    return (
        <>
            <Header />
            <main className={`${pathname === '/' ? '' : 'mt-28'}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default App