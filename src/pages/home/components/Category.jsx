import { Link } from "react-router-dom";
const Category = ({ categoryName, description }) => {
    return (
        <Link to={`/books/${categoryName}`} className="bg-white p-6 rounded-lg drop-shadow-2xl hover:shadow-xl transition-all duration-300  hover:scale-105 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">{categoryName}</h3>
            <p className="mt-4 text-gray-600">{description}</p>
        </Link>
    )
}

export default Category