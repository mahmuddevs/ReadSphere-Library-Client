import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LibraryCollection = () => {
    const [collection, setCollections] = useState([])
    useEffect(() => {
        axios.get('/collection.json')
            .then(res => setCollections(res.data))
    }, [])
    return (
        <section className='bg-gray-100 pu-20 md:py-40'>
            <div className="w-11/12 md:container mx-auto ">
                <div className="border-b mb-5 flex justify-between text-sm">
                    <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                        <svg
                            className="h-6 mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v10h16V7H4z" />
                        </svg>
                        <a href="#" className="font-semibold inline-block">
                            Library Collection
                        </a>
                    </div>
                    <Link to='/all-books' className="text-indigo-600 hover:text-indigo-800">
                        See All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {
                        collection.map((item) => {
                            return <div key={item.id} className="rounded overflow-hidden shadow-lg flex flex-col">
                                <div className="relative">
                                    <a href="#">
                                        <img
                                            className="w-full h-56 object-contain"
                                            src={item?.image}
                                            alt="Book Cover"
                                        />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                    </a>
                                    <a href="#!">
                                        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                            {item?.category}
                                        </div>
                                    </a>
                                </div>
                                <div className="px-6 py-4 mb-auto">
                                    <a
                                        href="#"
                                        className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                                    >
                                        {item?.title}
                                    </a>
                                    <p className="text-gray-500 text-sm">
                                        {item?.description}
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span className="py-1 text-xs font-regular text-gray-900 flex flex-row items-center">
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m-4 0H5m14 0h-3m-6-2V5a2 2 0 012-2h4a2 2 0 012 2v3m-6 4h6"
                                            />
                                        </svg>
                                        {item?.added}
                                    </span>
                                    <span className="py-1 text-xs font-regular text-gray-900 flex flex-row items-center">
                                        <svg
                                            className="h-4 w-4 mr-1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                            />
                                        </svg>
                                        {item?.reviews}
                                    </span>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div>
        </section>

    )
}

export default LibraryCollection