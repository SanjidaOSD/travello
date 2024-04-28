import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
            setLoading(false)
        })
    }, [])

    return (
        <div className="container mx-auto px-5 my-28">
            <div>
                <h1 className="text-2xl font-bold text-center">Our Country</h1>
                <h2 className="text-center font-medium max-w-[650px] mx-auto mt-3 mb-12">Explore South Asia's enchanting tourist spots, from the serene backwaters of Kerala to the majestic temples of Angkor Wat.</h2>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    countries.map(country => <CountryCard key={country._id} country={country}/>)
                }
            </div>
        </div>
    );
};

export default CountryContainer;