import { Fade } from "react-awesome-reveal";

const HappyClients = () => {
    return (
        <section>
            <div className="px-5 text-center my-10">
                <Fade direction={'left'} cascade damping={0.1}>
                    <h1 className="font-bold text-2xl">Happy Clients</h1>
                </Fade>
                <Fade direction={'right'} cascade damping={0.1}>
                    <p className="text-gray-500 font-medium mt-3 max-w-[700px] mx-auto" >Satisfied clients share their success stories, reflecting our commitment to excellence and personalized service.</p>
                </Fade>
            </div>
            <Fade direction={'up'} cascade damping={0.1}>
            <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 mb-24">
                    <div>
                        <img className="w-full rounded-xl" src="https://i.postimg.cc/FKSPDrKp/happyclients.jpg" alt="Happy client image" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="border flex flex-col justify-center items-center rounded-xl hover:bg-[#ff0066] text-[#ff0066] hover:text-white duration-200 p-5">
                            <h1 className="text-lg font-bold text-black">Total Customer</h1>
                            <p className="text-4xl mt-3 font-black hover:text-white">2700+</p>
                        </div>
                        <div className="border flex flex-col justify-center items-center rounded-xl hover:bg-[#ff0066] text-[#ff0066] hover:text-white duration-200 p-5">
                            <h1 className="text-lg font-bold text-black">Happy Buyer</h1>
                            <p className="text-4xl mt-3 font-black hover:text-white">1200+</p>
                        </div>
                        <div className="border flex flex-col justify-center items-center rounded-xl hover:bg-[#ff0066] text-[#ff0066] hover:text-white duration-200 p-5">
                            <h1 className="text-lg font-bold text-black">Rental Customer</h1>
                            <p className="text-4xl mt-3 font-black hover:text-white">1500+</p>
                        </div>
                        <div className="border flex flex-col justify-center items-center rounded-xl hover:bg-[#ff0066] text-[#ff0066] hover:text-white duration-200 p-5">
                            <h1 className="text-lg font-bold text-black">Positive Feedback</h1>
                            <p className="text-4xl mt-3 font-black hover:text-white">1600+</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default HappyClients;