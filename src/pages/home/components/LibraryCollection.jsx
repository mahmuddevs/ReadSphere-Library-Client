import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CollectionCard from '../../../components/CollectionCard'
import useAxios from '../../../hook/useAxios'

const LibraryCollection = () => {
    const axiosBase = useAxios()
    const [collection, setCollections] = useState([])
    useEffect(() => {
        axiosBase.get('/books/featured-books')
            .then(res => setCollections(res.data))
    }, [])
    return (
        <section className='bg-gray-100 py-14 md:py-24'>
            <div className="w-11/12 md:container mx-auto">
                <div className="border-b mb-5 flex justify-between text-sm">
                    <div className="text-primary-new flex items-center pb-2 pr-2 border-b-2 border-primary-new uppercase">
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
                    <Link to='/all-books' className="text-primary-new hover:text-secondary-new">
                        See All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {
                        collection.map((item) => {
                            return <CollectionCard key={item._id} {...item} />
                        })
                    }

                </div>
            </div>
        </section>

    )
}

export default LibraryCollection