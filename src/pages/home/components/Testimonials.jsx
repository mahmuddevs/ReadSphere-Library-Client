const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Alice Johnson",
            review:
                "This library has the best collection of mystery novels! I couldn't put 'Mystery in the Woods' down. Highly recommend!",
            rating: 5,
            image:
                "https://randomuser.me/api/portraits/women/47.jpg",
        },
        {
            id: 2,
            name: "David Smith",
            review:
                "As a science lover, 'The Wonders of the Universe' gave me a fresh perspective on space. The visuals were incredible!",
            rating: 4,
            image:
                "https://randomuser.me/api/portraits/men/52.jpg",
        },
        {
            id: 3,
            name: "Emily Davis",
            review:
                "I found 'The Art of Mindfulness' to be so helpful. It really helped me center myself in these chaotic times.",
            rating: 5,
            image:
                "https://randomuser.me/api/portraits/women/54.jpg",
        },
        {
            id: 4,
            name: "Michael Lee",
            review:
                "History buffs will enjoy 'The Enigma of Ancient Civilizations'. I learned so much about ancient cultures.",
            rating: 4,
            image:
                "https://randomuser.me/api/portraits/men/62.jpg",
        },
    ];
    return (
        <div className="w-11/12 md:container mx-auto my-16 text-center">
            <div className="text-center space-y-4 my-8">
                <h2 className="text-4xl font-bold text-gray-800">Reader Reviews & Testimonials</h2>
                <p className="text-lg text-gray-600">
                    Hear from our readers about their favorite books and experiences.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white p-6 rounded-lg drop-shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full object-cover mr-4"
                                src={review.image}
                                alt={review.name}
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">
                                    {review.name}
                                </h3>
                                <div className="flex text-yellow-500">
                                    {Array.from({ length: review.rating }).map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            className="w-5 h-5"
                                        >
                                            <path d="M10 15l-5 3 2-6-5-4h6L10 0l2 6h6l-5 4 2 6z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials