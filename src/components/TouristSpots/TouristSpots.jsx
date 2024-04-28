import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";

const TouristSpots = () => {

    const [spotsArr, setSpotsArr] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:5000/allTouristsSpot')
        .then(res => res.json())
        .then(data => {
            setSpotsArr(data);
            setLoading(false)
        })
    }, [])

    return (
        <div>
            {
                loading ?
                <div className="flex justify-center items-center mt-20">
                   <FadeLoader color="#ff0066"/>
                </div>
                :
                <div>
                    <AllTouristSpot spotsArr={spotsArr}/>
                </div>
            }
        </div>
    );
};

export default TouristSpots;