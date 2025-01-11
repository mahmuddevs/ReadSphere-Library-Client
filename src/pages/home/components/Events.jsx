import React from "react";

const Events = () => {
    // Events data
    const eventsData = [
        {
            date: "JUN 15, 2025",
            title: "Author Meet & Greet: J.K. Rowling",
            description: "Join us for an evening with the beloved author of the Harry Potter series.",
            location: "Virtual Event",
        },
        {
            date: "JUL 22, 2025",
            title: "Book Club: 'The Midnight Library'",
            description: "Discuss Matt Haig's thought-provoking novel with fellow book lovers.",
            location: "Local Library, Room 3B",
        },
        {
            date: "AUG 5, 2025",
            title: "Writing Workshop: Crafting Compelling Characters",
            description: "Learn techniques to create memorable characters in your stories.",
            location: "Community Center Auditorium",
        },
    ];

    return (
        <section className="bg-gray-100">
            <div className="w-11/12 md:max-w-6xl mx-auto py-14 md:py-24">
                <div className="text-center space-y-4 mb-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Upcoming Literary Events
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        Explore our Upcoming Literary Events and connect with fellow book lovers! From author meet-and-greets to engaging workshops, there's something for everyone to enjoy and be inspired by.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                        >
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="text-accent-new text-sm font-semibold mb-2">
                                        {event.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{event.description}</p>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {event.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
