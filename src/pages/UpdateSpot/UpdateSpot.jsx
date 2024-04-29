import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const UpdateSpot = () => {
    const {id} = useParams();
    const [spot, setSpot] = useState({});
    const [loading, setLoading] = useState(true);
    const {register, handleSubmit, formState: { errors }} = useForm()
    const {countryName, spotName, image, location, description, average, seasonality, travelTime, totalVisitor} =  spot;

    // Update spot data function
    const handleUpdate = (data) =>{
        fetch(`http://localhost:5000/allTouristsSpot/${id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Successfull',
                    text: 'Spot updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            }
        })
    }


    useEffect(()=>{
        fetch(`http://localhost:5000/allTouristsSpot/${id}`)
        .then(res => res.json())
        .then(data => {
            setSpot(data);
            setLoading(false);
        })
    }, [id])


    return (
        <div className="container mx-auto px-5">
            <h1 className="text-xl md:text-2xl text-center font-semibold mt-5">Update {spotName}</h1>
            {
                loading ?
                <div className="min-h-[calc(100vh-280px)] flex justify-center items-center mt-10">
                    <FadeLoader color="#ff0066" />
                </div>
                :
                <div>
                <form onSubmit={handleSubmit(handleUpdate)} className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
                        <div>
                            <select defaultValue={countryName} className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" {...register("countryName" , { required: true })}>
                                <option className="font-semibold" value="">Country Name</option>
                                <option className="font-semibold" value="Bangladesh">Bangladesh</option>
                                <option className="font-semibold" value="Thailand">Thailand</option>
                                <option className="font-semibold" value="Indonesia">Indonesia</option>
                                <option className="font-semibold" value="Malaysia">Malaysia</option>
                                <option className="font-semibold" value="Vietnam">Vietnam</option>
                                <option className="font-semibold" value="Cambodia">Cambodia</option>
                            </select>
                            {errors.countryName && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div>
                            <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" type="text" defaultValue={spotName} placeholder="Tourist Spot Name" name="spotName" {...register("spotName", { required: true })} />
                            {errors.spotName && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div>
                            <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" type="text" defaultValue={image} placeholder="Image URL" name="image" {...register("image", { required: true })} />
                            {errors.image && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div>
                            <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" type="text" defaultValue={location} placeholder="Location" name="location" {...register("location", { required: true })} />
                            {errors.location && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div className="md:col-span-2">
                            <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold col-span-2" type="text" defaultValue={description} placeholder="Sort Description" name="description" {...register("description", { required: true })} />
                            {errors.description && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div>
                            <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" type="text" defaultValue={average} placeholder="Average Cost" name="average" {...register("average", { required: true })} />
                            {errors.average && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div>
                            <select defaultValue={seasonality} className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" {...register("seasonality", { required: true })}>
                                <option className="font-semibold" value="">Season</option>
                                <option className="font-semibold" value="Summer">Summer</option>
                                <option className="font-semibold" value="Winter">Winter</option>
                            </select>
                            {errors.seasonality && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div>
                            <select defaultValue={travelTime} className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" {...register("travelTime", { required: true })}>
                                <option className="font-semibold" value="">Travel Time</option>
                                <option className="font-semibold" value="1 Days">1 Days</option>
                                <option className="font-semibold" value="3 Days">3 Days</option>
                                <option className="font-semibold" value="5 Days">5 Days</option>
                                <option className="font-semibold" value="7 Days">7 Days</option>
                                <option className="font-semibold" value="10 Days">10 Days</option>
                                <option className="font-semibold" value="15 Days">15 Days</option>
                                <option className="font-semibold" value="30 Days">30 Days</option>
                            </select>
                            {errors.travelTime && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                        <div>
                            <select defaultValue={totalVisitor} className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-800 placeholder:font-semibold text-gray-950 font-semibold" {...register("totalVisitor", { required: true })}>
                                <option className="font-semibold" value="">Total Visitor / Year</option>
                                <option className="font-semibold" value="5000">5000</option>
                                <option className="font-semibold" value="10000">10000</option>
                                <option className="font-semibold" value="20000">20000</option>
                                <option className="font-semibold" value="50000">50000</option>
                                <option className="font-semibold" value="75000">75000</option>
                                <option className="font-semibold" value="100000">100000</option>
                            </select>
                            {errors.totalVisitor && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                        </div>
                    </div>
                    <button type="submit" className="customBtn block mx-auto mt-10">Update Spot</button>
                </form>
            </div>
            }
        </div>
    );
};

export default UpdateSpot;