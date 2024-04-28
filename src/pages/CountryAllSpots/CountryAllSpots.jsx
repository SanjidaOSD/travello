import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountrySingleSpot from "../../components/CountrySingleSpot/CountrySingleSpot";
import { FadeLoader } from "react-spinners";

const CountryAllSpots = () => {
    const {country} = useParams()
    const [countrySpots, setCountrySpots] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/country/${country}`)
        .then(res => res.json())
        .then(data => {
            setCountrySpots(data)
            setLoading(false)
        })
    },[country])
    
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mt-10">{country}&apos;s All Spots</h1>
            {
                loading ?
                <div className="flex justify-center items-center mt-20">
                   <FadeLoader color="#ff0066" />
                </div>
                : 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-28 gap-10 container mx-auto px-5">
                {
                    countrySpots.map(spot => <CountrySingleSpot key={spot._id}  spot={spot}/>)
                }
                </div>
            }
        </div>
    );
};

export default CountryAllSpots;