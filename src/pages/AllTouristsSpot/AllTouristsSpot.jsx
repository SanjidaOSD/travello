import { useEffect, useState } from "react";
import AllSpot from "../../components/AllSpot/AllSpot";
import { FadeLoader } from "react-spinners";


const AllTouristsSpot = () => {

    const [spotsArr, setSpotsArr] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://travelo-server-gamma.vercel.app/allTouristsSpot')
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
                <div className="min-h-[calc(100vh-280px)] flex justify-center items-center mt-20">
                   <FadeLoader color="#ff0066"/>
                </div>
                :
                <AllSpot allSpotsArr={spotsArr}/>
            }
        </div> 
    );
};

export default AllTouristsSpot;