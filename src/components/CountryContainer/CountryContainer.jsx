import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import { FadeLoader } from "react-spinners";
import { Fade } from "react-awesome-reveal";

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
        <div>
            {
                loading ? 
                <div className="min-h-[calc(100vh-280px)] flex justify-center items-center mt-20">
                    <FadeLoader color="#ff0066" />
                </div>
                :
                <div className="container mx-auto px-5 my-28">
                    <div>
                    <Fade direction={'left'} cascade damping={0.1}>
                        <h1 className="text-2xl font-bold text-center">All Countries</h1>
                    </Fade>
                    <Fade direction={'right'} cascade damping={0.1}>
                        <h2 className="text-center font-medium max-w-[650px] mx-auto mt-3 mb-12">Explore South Asia&apos;s enchanting tourist spots, from the serene backwaters of Kerala to the majestic temples of Angkor Wat.</h2>
                    </Fade>
                    </div>
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            countries.map(country => <CountryCard key={country._id} country={country}/>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default CountryContainer;