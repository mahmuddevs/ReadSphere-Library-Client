import { Helmet } from "react-helmet-async"
import AddBookForm from "./components/AddBookForm"

const AddBooks = () => {
    return (
        <>
            <Helmet>
                <title>Add Book - ReadSphere</title>
            </Helmet>
            <div>
                <AddBookForm />
            </div>
        </>
    )
}

export default AddBooks