import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <section className="relative">
            <div className="absolute inset-0 z-10 pointer-events-none flex flex-col gap-4 justify-center items-center text-white w-10/12 mx-auto lg:w-full text-center mt-12">
                <h1 className="text-xl md:text-4xl font-bold">Welcome to Your Digital Library</h1>
                <p className='text-sm md:text-base font-medium'>Discover, borrow, and manage books effortlessly with our Library Management System. Your gateway to endless knowledge.</p>
                <a href='#categories' className='btn pointer-events-auto'>Explore</a>
            </div>

            <Swiper
                loop
                modules={[Navigation, Autoplay]}
                navigation={{
                    enabled: window.innerWidth > 640, // Enables navigation buttons only on larger screens
                }}
                autoplay={{
                    delay: 5000, // Delay in ms between each slide (5 seconds)
                    disableOnInteraction: false, // Keeps autoplay even after user interaction
                }}
                className="mySwiper h-[65vh] md:h-[85vh]"
            >
                <SwiperSlide className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                    <img src="/images/banner-1.jpg" alt="Banner 1" className="h-[65vh] md:h-[85vh] object-cover w-full z-0" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                    <img src="/images/banner-2.jpg" alt="Banner 2" className="h-[65vh] md:h-[85vh] object-cover w-full z-0" />
                </SwiperSlide>
                <SwiperSlide className="relative w-full h-[65vh] md:h-[85vh] flex justify-center items-center">
                    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
                    <img src="/images/banner-3.jpg" alt="Banner 3" className="h-[65vh] md:h-[85vh] object-cover w-full z-0" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;
