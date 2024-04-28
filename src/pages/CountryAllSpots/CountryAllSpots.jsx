import { useState } from "react";
import { useParams } from "react-router-dom";

const CountryAllSpots = () => {
    const {country} = useParams()
    const [countrySpots, setCountrySpots] = useState([])
    const [loading, setLoading] = useState(true)

    
    return (
        <div>
            <h1>{country} All Spot shows here</h1>
        </div>
    );
};

export default CountryAllSpots;