import CountryContainer from "../../components/CountryContainer/CountryContainer";
import HappyClients from "../../components/HappyClients/HappyClients";
import Slider from "../../components/Slider/Slider";
import UsersBenifits from "../../components/UsersBenifits/UsersBenifits";
import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";

const Home = () => {

    return (
        <div>
            <Slider />
            <div className="mt-20"></div>
            <AllTouristsSpot />
            <UsersBenifits/>
            <CountryContainer/>
            <HappyClients/>
        </div>
    );
};

export default Home;