import React from 'react'
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <section className="py-12 bg-primary-new text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2">
                            <CountUp end={10000} />+
                        </div>
                        <div className="text-lg opacity-90">Books Available</div>
                    </div>

                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2">
                            <CountUp end={5000} />+
                        </div>
                        <div className="text-lg opacity-90">Active Readers</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2"> <CountUp end={50} />+
                        </div>
                        <div className="text-lg opacity-90">Categories</div>
                    </div>

                    <div className="p-4">
                        <div className="text-4xl font-bold mb-2"> <CountUp end={1200} />
                            +</div>
                        <div className="text-lg opacity-90">Monthly Downloads</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats