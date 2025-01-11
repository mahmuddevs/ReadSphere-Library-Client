import ReactStars from "react-rating-stars-component"
import moment from 'moment'

const BorrowedTable = ({ _id, bookDetails, requestDate, returnDate, handleReturnBook }) => {
    const { author, category, image, name, rating } = bookDetails

    const requestDateSt = moment(requestDate).format('YYYY-MM-DD')

    return (
        <tr className="even:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">
                <img
                    src={image}
                    alt={`${name} cover`}
                    className="w-16 h-16 object-contain mx-auto"
                />
            </td>
            <td className="border border-gray-300 px-4 py-2">
                <div>
                    <h2 className="text-sm font-bold text-gray-800">{name}</h2>
                    <p className="text-xs font-medium text-gray-500">By: {author}</p>
                    <p className="text-xs font-medium text-gray-500">Category: {category}</p>
                </div>
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
                <ReactStars
                    count={5}
                    value={rating}
                    edit={false}
                    size={18}
                    activeColor="#ffd700"
                />
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">{requestDateSt}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{returnDate}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                    onClick={() => handleReturnBook(_id)}
                    className="btn btn-sm bg-primary-new hover:bg-secondary-new text-white"
                >
                    Return
                </button>
            </td>
        </tr>
    )
}

export default BorrowedTable
