import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import SingleSpot from "../../components/SingleSpot/SingleSpot";

const Home = () => {

    const allSpots = useLoaderData()

    return (
        <div>
            <Slider/>
            <div>
                <div className="container mx-auto px-5 mt-20">
                    <h1 className="text-xl md:text-2xl text-center font-semibold mt-5">All Tourist Spot</h1>
                    <p className="max-w-[800px] mx-auto text-center font-semibold text-base mt-5 mb-12">Explore breathtaking destinations with our immersive tours. Expertly crafted unparalleled adventures await. Book your journey today.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                        {
                            allSpots.map(spot => <SingleSpot key={spot._id} spot={spot} /> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;