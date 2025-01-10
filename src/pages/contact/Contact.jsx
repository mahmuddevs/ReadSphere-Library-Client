import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="bg-gray-100">
            <section className="bg-blue-900 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-lg">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Get in Touch</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        You can reach us through any of the following methods:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:w-8/12 mx-auto">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                            <FaPhone className="text-blue-900 text-4xl" />
                            <h4 className="text-lg font-semibold text-blue-900 mt-4">Phone</h4>
                            <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                            <FaEnvelope className="text-blue-900 text-4xl" />
                            <h4 className="text-lg font-semibold text-blue-900 mt-4">Email</h4>
                            <p className="text-sm text-gray-600">info@readsphere.com</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                            <FaMapMarkerAlt className="text-blue-900 text-4xl" />
                            <h4 className="text-lg font-semibold text-blue-900 mt-4">Address</h4>
                            <p className="text-sm text-gray-600">123 Library St, Cityville</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Send Us a Message</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Fill out the form below, and we'll get back to you as soon as possible.
                    </p>
                    <div className="max-w-lg mx-auto mt-8">
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label text-left">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label text-left">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <label className="label text-left">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>
                            <div className="mt-6">
                                <button className="btn btn-primary w-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
