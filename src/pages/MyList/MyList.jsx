import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyListSingleSpot from "../../components/MyListSingleSpot/MyListSingleSpot";
import { FadeLoader } from "react-spinners";

const MyList = () => {

    const [myList, setMyList] = useState([]);
    const [dataLoading, setDataLoading] = useState(true)
    const {userData, loading} = useAuth();
    const {email} = userData || {};
    
    useEffect(()=>{
        fetch(`http://localhost:5000/allTouristsSpot/email/${email}`)
        .then(res => res.json())
        .then(data => {
            setMyList(data);
            setDataLoading(false)
        })
    }, [email])

    console.log(loading, dataLoading);

    return (
        <div className="min-h-[400px] container mx-auto px-5">
            <div>
                <h1 className="text-2xl font-bold text-center mt-10">My Added Spots</h1>
            </div>
            {
                loading ? 
                <div className="flex justify-center items-center mt-10">
                    <FadeLoader color="#ff0066" />
                </div>
                :
            
                dataLoading ?
                <div className="flex justify-center items-center mt-10">
                   <FadeLoader color="#ff0066" />
                </div>
                :
                <div>
                    <div className="mt-10 font-bold">
                        <div className="grid grid-cols-12 bg-[#ff0066] text-white border-x">
                            <div className="flex justify-center items-center col-span-1 border-y  py-2">
                                <h1>SL No</h1>
                            </div>
                            <div className="col-span-4 flex justify-center items-center border-y border-s py-2">
                                <h1>Spot Name</h1>
                            </div>
                            <div className="col-span-2 flex justify-center items-center border-y border-s py-2">
                                <h1>Conuntry</h1>
                            </div>
                            <div className="col-span-2 flex justify-center items-center border-y border-s py-2">
                                <h1>Average Cost</h1>
                            </div>
                            <div className="col-span-3 flex justify-center items-center border-y border-s py-2">
                                <h1>Actions</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            myList.map((spot, idx) => <MyListSingleSpot key={spot._id} spot={spot} idx={idx} /> )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default MyList;