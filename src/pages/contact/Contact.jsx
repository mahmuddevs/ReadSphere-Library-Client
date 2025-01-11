import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

const Contact = () => {
    const handleContact = (e) => {
        const name = e.target.name.value
        e.preventDefault();
        Swal.fire({
            title: `Thanks You ${name} For Your Message!`,
            text: "We Will Talk to you Shortly!",
            icon: "success"
        });
    };

    return (
        <div className="">
            <section className="container mb-12 mx-auto">
                <div className="md:w-8/12 mx-auto space-y-2 text-center">
                    <h4 className="text-lg font-semibold">Contact Us</h4>
                    <h2 className="text-2xl md:text-3xl text-primary-new">Whant to Connect?</h2>
                    <p className="text-sm md:text-base">Have questions or feedback? We'd love to hear from you!</p>
                </div>
            </section>

            <section className="pb-14">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary-new">Get in Touch</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        You can reach us through any of the following methods:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mx-auto items-center w-9/12">
                        <div className="space-y-6">
                            <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                                <FaPhone className="text-primary-new text-4xl" />
                                <h4 className="text-lg font-semibold text-primary-new mt-4">Phone</h4>
                                <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                                <FaEnvelope className="text-primary-new text-4xl" />
                                <h4 className="text-lg font-semibold text-primary-new mt-4">Email</h4>
                                <p className="text-sm text-gray-600">info@readsphere.com</p>
                            </div>
                            <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
                                <FaMapMarkerAlt className="text-primary-new text-4xl" />
                                <h4 className="text-lg font-semibold text-primary-new mt-4">Address</h4>
                                <p className="text-sm text-gray-600">123 Library St, Cityville</p>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="omx-auto text-center">
                                <h2 className="text-2xl font-bold text-primary-new">Send Us a Message</h2>
                                <p className="mt-4 text-gray-700 text-base">
                                    Fill out the form below, and we'll get back to you as soon as possible.
                                </p>
                                <div className="max-w-lg mx-auto mt-8">
                                    <form onSubmit={handleContact}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="form-control">
                                                <label className="label text-left">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    className="input input-bordered w-full"
                                                />
                                            </div>
                                            <div className="form-control">
                                                <label className="label text-left">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    className="input input-bordered w-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-control mt-6">
                                            <label className="label text-left">Message</label>
                                            <textarea
                                                rows="4"
                                                name="message"
                                                placeholder="Your Message"
                                                className="textarea textarea-bordered w-full"
                                            ></textarea>
                                        </div>
                                        <div className="mt-6">
                                            <button className="btn bg-primary-new hover:bg-secondary-new text-white w-full">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Contact;
