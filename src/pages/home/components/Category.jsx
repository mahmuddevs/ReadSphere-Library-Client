import { Link } from "react-router-dom";
const Category = ({ categoryName, description, icon }) => {
    return (
        // <Link to={`/books/${categoryName}`} className="bg-white p-6 rounded-lg drop-shadow-2xl hover:shadow-xl transition-all duration-300  hover:scale-105 text-center">

        // </Link>
        <Link to={`/books/${categoryName}`} className="p-6 bg-white rounded-lg shadow-md drop-shadow-2xl hover:shadow-xl transition-all duration-300  hover:scale-105 border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <img
                    src={icon}
                    alt={categoryName}
                    className="w-10 h-10"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{categoryName}</h3>
            <p className="text-gray-600 text-sm mb-4">
                {description}
            </p>
        </Link>
    )
}

export default Category