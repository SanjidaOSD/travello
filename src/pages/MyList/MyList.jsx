import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyListSingleSpot from "../../components/MyListSingleSpot/MyListSingleSpot";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";

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

    // Update spot data function
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                fetch(`http://localhost:5000/allTouristsSpot/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myList.filter(spot => spot._id !== id)
                            setMyList(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div className="min-h-[400px] container mx-auto px-5">
            <div>
                <h1 className="text-2xl font-bold text-center mt-10">My Added Spots</h1>
            </div>
            {
                loading ? 
                <div className="min-h-[calc(100vh-280px)] flex justify-center items-center mt-10">
                    <FadeLoader color="#ff0066" />
                </div>
                :
            
                dataLoading ?
                <div className="min-h-[calc(100vh-280px)] flex justify-center items-center mt-10">
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
                            myList.map((spot, idx) => <MyListSingleSpot 
                                                            key={spot._id} 
                                                            spot={spot} 
                                                            idx={idx} 
                                                            handleDelete={handleDelete}
                                                            /> )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default MyList;