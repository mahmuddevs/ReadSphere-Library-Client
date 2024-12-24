import ReactStars from "react-rating-stars-component";
const BookCard = () => {
    const book = {
        imageUrl: '/placeholder.svg?height=300&width=200',
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        category: 'Classic Literature',
        quantity: 5,
        rating: 3
    }

    const { imageUrl,
        name,
        author,
        category,
        quantity,
        rating } = book
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div>
                <img
                    src='https://w7.pngwing.com/pngs/808/357/png-transparent-textbook-a-thick-book-painted-text-comic-book-thumbnail.png'
                    alt={`Cover of ${name}`}
                    layout="fill"
                    className="w-full h-60"
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
                <button className="btn btn-primary btn-sm">
                    Details
                </button>
            </div>
        </div>
    )
}

export default BookCard