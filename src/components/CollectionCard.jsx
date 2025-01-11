import { Link } from "react-router-dom";

const CollectionCard = ({ _id, image, category, name, bookContent }) => {
    const truncateContent = (text, wordLimit = 25) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    return (
        <div className="rounded overflow-hidden shadow-lg flex flex-col h-full">
            <div className="relative">
                <a href="#">
                    <img
                        className="w-full h-56 object-contain"
                        src={image}
                        alt="Book Cover"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <Link to={`/books/${category}`}>
                    <div className="text-xs absolute top-0 right-0 bg-primary-new px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-primary-new transition duration-500 ease-in-out">
                        {category}
                    </div>
                </Link>
            </div>
            <div className="px-6 py-4 flex-grow">
                <a
                    href="#"
                    className="font-medium text-lg inline-block hover:text-primary-new transition duration-500 ease-in-out mb-2"
                >
                    {name}
                </a>
                <p className="text-gray-500 text-sm">
                    {truncateContent(bookContent)}
                </p>
            </div>
            <div className="px-6 pb-4">
                <Link to={`/book/${_id}`} className="btn btn-sm text-center bg-primary-new text-white py-2 rounded-lg hover:bg-accent-new/90 transition duration-500 ease-in-out">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default CollectionCard;
