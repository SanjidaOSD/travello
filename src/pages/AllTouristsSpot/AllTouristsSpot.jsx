import { useLoaderData } from "react-router-dom";
import SingleSpot from "../../components/SingleSpot/SingleSpot";

const AllTouristsSpot = () => {
    const allSpots = useLoaderData();

    return (

        <div className="container mx-auto px-5">
            <h1 className="text-xl md:text-2xl text-center font-semibold mt-5">All Tourist Spot</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    allSpots.map(spot => <SingleSpot key={spot._id} spot={spot} /> )
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;