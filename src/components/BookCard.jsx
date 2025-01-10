import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { FaPencil } from "react-icons/fa6";
import useAuth from "../hook/useAuth";
const BookCard = ({ _id, image, name, author, category, quantity, rating }) => {
    const { pathname } = useLocation()
    const { user } = useAuth()
    return (
        <Link to={`/book/${_id}`} className="hover:scale-105 hover:shadow-xl transition-transform duration-500 ease-out relative">
            <div className="md:max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <div>
                    <img
                        src={image}
                        alt={`Cover of ${name}`}
                        layout="fill"
                        className="w-full h-40 object-contain"
                    />
                </div>
                <div className="px-6 py-4">
                    <h2 className="font-bold text-lg mb-2 truncate" title={name}>{name}</h2>
                    <p className="text-gray-700 text-base mb-2">by {author}</p>
                    <p className="text-gray-600 text-sm mb-2">Category: {category}</p>
                    <p className="text-gray-600 text-sm mb-2">Quantity: {quantity}</p>
                    <div className="flex items-center mb-4">
                        <ReactStars
                            count={5}
                            value={rating}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    {
                        user && <div className="absolute -top-2 -right-2">
                            {pathname === `/books/${category}` ? (
                                ""
                            ) : (
                                <Link to={`/book/update/${_id}`} className="">
                                    <div className="flex items-center justify-center w-8 h-8 bg-gray-300 hover:bg-gray-600 transition-colors rounded-full">
                                        <FaPencil className="text-white text-sm" />
                                    </div>
                                </Link>
                            )}
                        </div>
                    }
                </div>
            </div>
        </Link>

    )
}




export default BookCard