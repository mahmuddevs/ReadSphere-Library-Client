import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <section className="container mx-auto relative my-6">
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col gap-4 justify-center items-center text-white w-10/12 mx-auto lg:w-full text-center">
                <h1 className="text-2xl md:text-4xl font-bold">Welcome to Your Digital Library Hub</h1>
                <p className='font-medium'>Discover, borrow, and manage books effortlessly with our Library Management System. Your gateway to endless knowledge.</p>
            </div>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper h-[40vh] md:h-[60vh] rounded-xl"
            >
                <SwiperSlide className="relative w-full h-[40vh] md:h-[60vh] flex justify-center items-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                    <img src="/images/banner-1.jpg" alt="Banner 1" className="h-[40vh] md:h-[60vh] object-cover w-full z-0" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-[40vh] md:h-[60vh] flex justify-center items-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                    <img src="/images/banner-2.jpg" alt="Banner 2" className="h-[40vh] md:h-[60vh] object-cover w-full z-0" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-[40vh] md:h-[60vh] flex justify-center items-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                    <img src="/images/banner-3.jpg" alt="Banner 3" className="h-[40vh] md:h-[60vh] object-cover w-full z-0" />
                </SwiperSlide>
            </Swiper>
        </section>

    )
}

export default Banner