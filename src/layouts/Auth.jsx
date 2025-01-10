import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Auth = () => {
    const { pathname } = useLocation()
    return (
        <>
            <Header />
            <main className={`${pathname === '/' ? '' : 'mt-14 md:mt-28 mb-14'}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Auth