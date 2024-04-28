import CountryContainer from "../../components/CountryContainer/CountryContainer";
import HappyClients from "../../components/HappyClients/HappyClients";
import Slider from "../../components/Slider/Slider";
import TouristSpots from "../../components/TouristSpots/TouristSpots";
import UsersBenifits from "../../components/UsersBenifits/UsersBenifits";

const Home = () => {

    return (
        <div>
            <Slider />
            <div className="mt-20"></div>
            <TouristSpots/>
            <UsersBenifits/>
            <CountryContainer/>
            <HappyClients/>
        </div>
    );
};

export default Home;