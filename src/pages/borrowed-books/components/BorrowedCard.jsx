import ReactStars from "react-rating-stars-component"
const BorrowedCard = ({ bookDetails, requestDate, returnDate }) => {
    const { author, category, image, name, rating } = bookDetails
    console.log(bookDetails.author)

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img
                src={image}
                alt={`${name} cover`}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                <h4 className="text-base font-semibold text-gray-800">{author}</h4>
                <p className="text-sm text-gray-600">Category: {category}</p>
                <div className="flex items-center mt-2">
                    <ReactStars
                        count={5}
                        value={rating}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">Borrowed Date:</span> {requestDate}
                    </p>
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">Return Date:</span> {returnDate}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BorrowedCard