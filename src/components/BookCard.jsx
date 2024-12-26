import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const BookCard = ({ _id, image, name, author, category, quantity, rating }) => {
    const { pathname } = useLocation()
    return (
        <div className="md:max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div>
                <img
                    src={image}
                    alt={`Cover of ${name}`}
                    layout="fill"
                    className="w-full h-60 object-contain"
                />
            </div>
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 truncate" title={name}>{name}</h2>
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
                <div className="space-x-4">
                    <Link to={`/book/${_id}`} className="btn btn-primary btn-sm">
                        Details
                    </Link>
                    {pathname === "/books/Fiction" ?
                        "" :
                        <Link to={`/book/update/${_id}`} className="btn btn-neutral btn-sm">
                            Update
                        </Link>}
                </div>
            </div>
        </div>
    )
}

export default BookCard