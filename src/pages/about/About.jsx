import { FaBook, FaGlobe, FaUsers } from "react-icons/fa";

const About = () => {
    const teamMembers = [
        {
            name: "Jane Doe",
            role: "Founder & CEO",
            image: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            name: "John Smith",
            role: "Head of Visa Services",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name: "Michael Lee",
            role: "Legal Advisor",
            image: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    ];

    return (
        <div className="w-11/12 sm:container mx-auto">
            <section className="text-center my-8 md:my-16 space-y-2">
                <div className="md:w-8/12 mx-auto space-y-2">
                    <h4 className="text-lg font-semibold">About Us</h4>
                    <h2 className="text-2xl md:text-3xl text-primary-new">Who We Are?</h2>
                    <p className="text-base md:text-lg">ReadSphere is a community-driven library that provides access to a diverse collection of books, journals, and digital resources. We believe in the power of reading to transform lives and foster learning.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 !mt-8 md:!mt-16">
                    <div className="flex items-center space-x-4 flex-col">
                        <FaBook className="text-primary-new text-4xl" />
                        <div>
                            <h4 className="font-semibold text-lg">Extensive Collection</h4>
                            <p className="text-sm text-gray-600">
                                Thousands of books across various genres and languages.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 flex-col">
                        <FaGlobe className="text-primary-new text-4xl" />
                        <div>
                            <h4 className="font-semibold text-lg">Global Access</h4>
                            <p className="text-sm text-gray-600">
                                Digital resources accessible from anywhere in the world.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 flex-col">
                        <FaUsers className="text-primary-new text-4xl" />
                        <div>
                            <h4 className="font-semibold text-lg">Community Focus</h4>
                            <p className="text-sm text-gray-600">
                                A space for collaboration, creativity, and shared growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#e8f2f8] py-12 rounded-lg">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary-new">Our Mission</h2>
                    <p className="my-4 text-gray-700 text-sm md:text-base">
                        To make knowledge accessible to everyone and inspire a lifelong love for learning and reading.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 w-10/12 mx-auto">
                        <div className="p-6 bg-white shadow-md rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-primary-new">Empower Readers</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Provide tools and resources to empower individuals through reading.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-primary-new">Build Community</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Foster a culture of shared knowledge and mutual support.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg text-center">
                            <h3 className="text-xl font-semibold text-primary-new">Innovate Learning</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                Blend traditional and digital resources to meet modern needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary-new">Meet Our Team</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Passionate individuals dedicated to fostering knowledge and creativity.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {teamMembers?.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white shadow-md rounded-lg p-6 text-center"
                            >
                                <div className="w-24 h-24 mx-auto rounded-full bg-gray-200">
                                    <img src={member.image} alt="" className="rounded-full" />
                                </div>
                                <h4 className="text-lg font-semibold text-primary-new mt-4">
                                    {member.name}
                                </h4>
                                <p className="text-sm text-gray-600">Role {member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
