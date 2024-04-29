import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from 'react-awesome-reveal';

const Slider = () => {


    return (
        <section>
                <div className='relative'>
                    <Swiper 
                        className="mySwiper"
                        navigation={true} 
                        modules={[Navigation, Autoplay ]}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        centeredSlides={true}
                        >
                        <SwiperSlide>
                            <div className="h-[calc(100vh-75px)] bg-[url('https://i.postimg.cc/Pr5jL7Hq/Tajmahal.jpg')] bg-center bg-cover bg-no-repeat">
                                <div className='w-full h-full bg-black bg-opacity-60'>                              
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[calc(100vh-75px)] bg-[url('https://i.postimg.cc/2j2pfxWN/bandarban.jpg')] bg-center bg-cover bg-no-repeat">
                                <div className='w-full h-full bg-black bg-opacity-60'>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="h-[calc(100vh-75px)] bg-[url('https://i.postimg.cc/GhV5cghV/Screenshot-1.jpg')] bg-center bg-cover bg-no-repeat">
                                <div className='w-full h-full bg-black bg-opacity-60'>
                                </div>
                            </div>
                        </SwiperSlide>        
                    </Swiper>
                    <div className='container h-full mx-auto px-5 text-center absolute top-0 left-1/2 -translate-x-1/2 z-10'>
                        <div className='w-full h-full flex flex-col justify-center items-center px-10'>
                            <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold leading-[60px] max-w-[670]' >
                                Discover Your
                                <span className='text-[#fa0066]'>
                                    <Typewriter
                                        words={[' Next Adventure', ' Ideal Journey', ' Perfect Getaway']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                With Us.
                            </h1>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <p className='text-sm md:text-base font-medium text-white mt-10 mb-20 max-w-[670px]'>Explore breathtaking destinations, indulge in unique experiences, and create unforgettable memories with our expertly curated travel packages. Your perfect getaway awaits!</p>
                            </Fade>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <div >
                                    <Link to={'/allTouristsSpot'} className='px-10 py-2 bg-[#ff0066] text-white font-semibold border-2 border-transparent hover:border-white hover:bg-transparent duration-200'>Explore Now</Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Slider;