import { FaCalendar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { Fade } from "react-awesome-reveal";

const SpotDetails = () => {
    const spot = useLoaderData();
    const {countryName, spotName, image, location, description, average, seasonality, travelTime, totalVisitor, displayName, email} = spot
    

    return (
        <div className="container mx-auto px-5 mt-10">
            <h1 className="text-xl text-center font-semibold mb-10">Details of {spotName}</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="h-full">
                    <Fade direction={'left'} cascade damping={0.1} className="w-full">
                            <img className="w-full h-[450px] object-cover rounded-lg" src={image} alt="Spot Image" />
                    </Fade>
                    </div>
                    <div className="px-8 py-5 shadow-xl rounded-lg border-t">
                    <Fade direction={'right'} cascade damping={0.1}>
                            <h1 className="text-2xl font-bold">{spotName}</h1>
                            <h3 className="text-lg font-semibold mt-1">{countryName}</h3>
                            <div className="flex items-center gap-5">
                                <h3 className="font-medium">Season :</h3>
                                <h3 className="px-5 py-1 bg-[#ff00661c] inline-block my-2 font-bold">{seasonality}</h3>
                            </div>
                            <h3 className="text-sm font-medium mt-1">{description}</h3>
                            <hr className="my-3 border border-dashed"/>
                            <div className="flex gap-10">
                                <h3 className="flex items-center gap-1 mt-2 font-semibold"> <FaSackDollar/> {average} $</h3>
                                <h3 className="flex items-center gap-1 mt-2 font-semibold"> <FaCalendar/> {travelTime}</h3>
                            </div>
                            <h3 className="flex items-center gap-1 mt-2 font-semibold"><TiLocation className="text-xl" />{location}</h3>
                            <h3 className="font-medium mt-2 ml-1">Total visitor per year - {totalVisitor}</h3>
                            <hr className="my-3 border border-dashed"/>
                            <div className="flex items-center gap-3 font-medium text-[12px]">
                                <h1>Spot Added By : </h1>
                                <div>
                                    <p>{displayName}</p>
                                    <p>{email}</p>
                                </div>
                            </div>
                    </Fade>
                    </div>
            </div>
        </div>
    );
};

export default SpotDetails;