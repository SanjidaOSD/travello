import { TbHeartDollar } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BiGift, BiSupport } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { Fade } from "react-awesome-reveal";


const UsersBenifits = () => {
    return (
        <div className="container mx-auto px-5 mt-28">
            <Fade direction={'left'} cascade damping={0.1}>
                <h1 className="text-2xl font-bold text-center">Users Benifit</h1>
            </Fade>
            <Fade direction={'right'} cascade damping={0.1}>
                <h2 className="text-center font-medium max-w-[650px] mx-auto mt-3 mb-12">Discover local gems, plan trips effortlessly, insights on attractions, dining, and accommodations for unforgettable travel experiences.</h2>
            </Fade>
            <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">  
                <Fade direction={'up'} cascade damping={0.1}>
                    <div className="p-8 shadow-lg rounded-xl">
                        <div className="w-20 h-20 bg-red-50 rounded-lg flex justify-center items-center">
                            <BiGift className="text-4xl text-gray-600" />
                        </div>
                        <div>
                            <h1 className="text-[22px] mt-5 font-bold">Easy To Book</h1>
                            <p className="text-justify mt-2">Seamless booking process for hassle-free travel arrangements, ensuring convenience and simplicity for every step of your journey.</p>
                        </div>
                    </div>
                </Fade>
                <Fade direction={'up'} cascade damping={0.1}>
                    <div className="p-8 shadow-lg rounded-xl">
                        <div className="w-20 h-20 bg-red-50 rounded-lg flex justify-center items-center">
                            <TbHeartDollar className="text-4xl text-gray-600" />
                        </div>
                        <div>
                            <h1 className="text-[22px] mt-5 font-bold">Cheap than Other</h1>
                            <p className="text-justify mt-2">Find unbeatable prices, making your travel experiences more affordable and enjoyable compared to other options available.</p>
                        </div>
                    </div>
                </Fade>
                <Fade direction={'up'} cascade damping={0.1}>
                <div className="p-8 shadow-lg rounded-xl">
                    <div className="w-20 h-20 bg-red-50 rounded-lg flex justify-center items-center">
                        <RiDiscountPercentLine  className="text-4xl text-gray-600" />
                    </div>
                    <div>
                        <h1 className="text-[22px] mt-5 font-bold">Best Offers</h1>
                        <p className="text-justify mt-2">Discover top deals, ensuring you access the finest promotions and discounts for a budget-friendly and rewarding travel experience.</p>
                    </div>
                </div>
                </Fade>
                <Fade direction={'up'} cascade damping={0.1}>
                <div className="p-8 shadow-lg rounded-xl">
                    <div className="w-20 h-20 bg-red-50 rounded-lg flex justify-center items-center">
                        <BiSupport className="text-4xl text-gray-600" />
                    </div>
                    <div>
                        <h1 className="text-[22px] mt-5 font-bold">24/7 Support</h1>
                        <p className="text-justify mt-2">Round-the-clock assistance guarantees immediate help and peace of mind, ensuring your queries are addressed at any time.</p>
                    </div>
                </div>
                </Fade>
                <Fade direction={'up'} cascade damping={0.1}>
                <div className="p-8 shadow-lg rounded-xl">
                    <div className="w-20 h-20 bg-red-50 rounded-lg flex justify-center items-center">
                        <HiOutlineReceiptRefund className="text-4xl text-gray-600" />
                    </div>
                    <div>
                        <h1 className="text-[22px] mt-5 font-bold">Fast Refund</h1>
                        <p className="text-justify mt-2">Swift reimbursement ensures hassle-free transactions, swiftly returning your funds for a seamless and satisfactory customer experience</p>
                    </div>
                </div>
                </Fade>
                <Fade direction={'up'} cascade damping={0.1}>
                <div className="p-8 shadow-lg rounded-xl">
                    <div className="w-20 h-20 bg-red-50 rounded-lg flex justify-center items-center">
                        <HiOutlineViewfinderCircle className="text-4xl text-gray-600" />
                    </div>
                    <div>
                        <h1 className="text-[22px] mt-5 font-bold">Find All Spots</h1>
                        <p className="text-justify mt-2">Find unbeatable prices, making your travel experiences more affordable and enjoyable compared to other options available.</p>
                    </div>
                </div>
                </Fade>
                
            </div>
        </div>
    );
};

export default UsersBenifits;