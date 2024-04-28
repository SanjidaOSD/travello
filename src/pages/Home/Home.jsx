import CountryContainer from "../../components/CountryContainer/CountryContainer";
import Slider from "../../components/Slider/Slider";
import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";

const Home = () => {

    return (
        <div>
            <Slider />
            <div className="mt-20"></div>
            <AllTouristsSpot />
            <CountryContainer/>
        </div>
    );
};

export default Home;