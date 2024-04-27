import { useLoaderData } from "react-router-dom";
import SingleSpot from "../../components/SingleSpot/SingleSpot";
import { RiArrowDownSFill } from "react-icons/ri";

const AllTouristsSpot = () => {
    const allSpots = useLoaderData();

    return (

        <div className="container mx-auto px-5">
            <h1 className="text-xl md:text-2xl text-center font-semibold mt-5">All Tourist Spot</h1>
            <div className="flex justify-center items-center mt-5">
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="ps-10 pe-5  py-2 bg-[#ff0066] m-1 font-semibold text-white flex jusc rounded-lg items-center gap-[25px]">Sort By <RiArrowDownSFill /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu px-8 py-2 shadow-xl bg-base-100 border ml-1 rounded-lg hover:bg-[#ff0066] hover:text-white duration-200 cursor-pointer">
                        <li className="text-nowrap font-semibold">Average Cost</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {
                    allSpots.map(spot => <SingleSpot key={spot._id} spot={spot} /> )
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;