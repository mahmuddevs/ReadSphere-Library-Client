import { Helmet } from "react-helmet-async"

const AllBooks = () => {
    return (
        <>
            <Helmet>
                <title>All Books - ReadSphere</title>
            </Helmet>
            <section className="container mx-auto">
                <div className="text-center my-14">
                    <h4 className="text-lg font-semibold">All Books</h4>
                    <h2 className="text-3xl">Explore Our Collection</h2>
                    <p className="">Browse through our extensive library of books across various genres and categories. Find your next great read today.</p>
                </div>
            </section>
        </>
    )
}

export default AllBooks