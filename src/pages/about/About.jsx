import { FaBook, FaGlobe, FaUsers } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-gray-100">
            <section className="bg-blue-900 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">
                        Welcome to <span className="text-yellow-400">ReadSphere</span>, your gateway to knowledge, imagination, and discovery.
                    </p>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Who We Are</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        ReadSphere is a community-driven library that provides access to a diverse collection of books, journals, and digital resources. We believe in the power of reading to transform lives and foster learning.
                    </p>
                    <div className="flex flex-wrap mt-8 justify-center gap-8">
                        <div className="flex items-center space-x-4">
                            <FaBook className="text-blue-900 text-4xl" />
                            <div>
                                <h4 className="font-semibold text-lg">Extensive Collection</h4>
                                <p className="text-sm text-gray-600">
                                    Thousands of books across various genres and languages.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaGlobe className="text-blue-900 text-4xl" />
                            <div>
                                <h4 className="font-semibold text-lg">Global Access</h4>
                                <p className="text-sm text-gray-600">
                                    Digital resources accessible from anywhere in the world.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaUsers className="text-blue-900 text-4xl" />
                            <div>
                                <h4 className="font-semibold text-lg">Community Focus</h4>
                                <p className="text-sm text-gray-600">
                                    A space for collaboration, creativity, and shared growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-blue-50 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        To make knowledge accessible to everyone and inspire a lifelong love for learning and reading.
                    </p>
                    <div className="flex flex-wrap mt-8 justify-center gap-6">
                        <div className="p-6 bg-white shadow-md rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-blue-900">Empower Readers</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Provide tools and resources to empower individuals through reading.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-blue-900">Build Community</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Foster a culture of shared knowledge and mutual support.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-blue-900">Innovate Learning</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Blend traditional and digital resources to meet modern needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Meet Our Team</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Passionate individuals dedicated to fostering knowledge and creativity.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {[1, 2, 3].map((member) => (
                            <div
                                key={member}
                                className="bg-white shadow-md rounded-lg p-6 text-center"
                            >
                                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200"></div>
                                <h4 className="text-lg font-semibold text-blue-900 mt-4">
                                    Member {member}
                                </h4>
                                <p className="text-sm text-gray-600">Role {member}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
