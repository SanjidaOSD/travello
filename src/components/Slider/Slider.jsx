import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { CgArrowLongDown } from "react-icons/cg";

const Slider = () => {

    return (
        <section>
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
                               <div className='container h-full mx-auto px-5 text-center'>
                                    <div className='w-full h-full flex flex-col justify-center items-center px-10'>
                                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold leading-[60px] max-w-[670]' >Discover Your Dream Home Here</h1>
                                        <p className='text-sm md:text-base font-medium text-white mt-5 mb-20 max-w-[670px]'>Discover a curated selection of premier real estate listings. Find your dream home with ease. Start exploring today for your perfect match.</p>
                                        <div data-aos="zoom-in">
                                            <Link to={'/allTouristsSpot'} className='px-10 py-2 bg-[#08bdba] text-white font-semibold border-2 border-transparent hover:border-white hover:bg-transparent duration-200'>Explore Now</Link>
                                        </div>
                                        <div className='flex justify-center items-center flex-col mt-16'>
                                            <p className='text-white'>Scroll Down</p>
                                            <CgArrowLongDown className='text-white text-3xl mt-3'/>
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[calc(100vh-75px)] bg-[url('https://i.postimg.cc/2j2pfxWN/bandarban.jpg')] bg-center bg-cover bg-no-repeat">
                            <div className='w-full h-full bg-black bg-opacity-60'>
                                <div className='container h-full mx-auto px-5 text-center'>
                                    <div className='w-full h-full flex flex-col justify-center items-center px-10'>
                                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold leading-[60px] max-w-[670]'>Experience Your Dream Vacation</h1>
                                        <p className='text-sm md:text-base font-medium text-white mt-5 mb-20 max-w-[670px]'>Explore our curated selection of vacation rentals. Find the perfect getaway for your dream vacation. Start planning your unforgettable experience today.</p>
                                        <div >
                                            <Link to={'/allTouristsSpot'} className='px-10 py-2 bg-[#08bdba] text-white font-semibold border-2 border-transparent hover:border-white hover:bg-transparent duration-200'>Explore Now</Link>
                                        </div>
                                        <div className='flex justify-center items-center flex-col mt-16'>
                                            <p className='text-white'>Scroll Down</p>
                                            <CgArrowLongDown className='text-white text-3xl mt-3'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[calc(100vh-75px)] bg-[url('https://i.postimg.cc/GhV5cghV/Screenshot-1.jpg')] bg-center bg-cover bg-no-repeat">
                            <div className='w-full h-full bg-black bg-opacity-60'>
                                <div className='container h-full mx-auto px-5 text-center'>
                                    <div className='w-full h-full flex flex-col justify-center items-center px-10'>
                                        <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-white font-bold leading-[60px] max-w-[670]'>Perfect Student Residence</h1>
                                        <p className='text-sm md:text-base font-medium text-white mt-5 mb-20 max-w-[670px]'>Discover an optimal student residence, designed for academic success. Find comfort, convenience, and a supportive environment for your studies.</p>
                                        <div >
                                            <Link to={'/allTouristsSpot'} className='px-10 py-2 bg-[#08bdba] text-white font-semibold border-2 border-transparent hover:border-white hover:bg-transparent duration-200'>Explore Now</Link>
                                        </div>
                                        <div className='flex justify-center items-center flex-col mt-16'data-aos="fade-up">
                                            <p className='text-white'>Scroll Down</p>
                                            <CgArrowLongDown className='text-white text-3xl mt-3'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>        
                </Swiper>
        </section>
    );
};

export default Slider;