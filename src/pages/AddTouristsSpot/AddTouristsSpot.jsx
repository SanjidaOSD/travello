import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import useAuth from "../../hooks/useAuth";
import { Fade } from "react-awesome-reveal";


const AddTouristsSpot = () => {

    const {register, handleSubmit, formState: { errors }} = useForm()
    const {userData} = useAuth()
    const {displayName, email} = userData || {};

    const handleAddSpot = (data, e) =>{

        const {countryName, spotName, image, location, description, average, seasonality, travelTime, totalVisitor, displayName, email} = data;

        const newSpot = {countryName, spotName, image, location, description, average, seasonality, travelTime, totalVisitor, displayName, email}
        // Send data to server side
        fetch('http://localhost:5000/allTouristsSpot', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Successfull',
                    text: 'Tourist Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
                  e.target.reset();
            }
        })
    }


    return (
        <div className="container mx-auto px-5">
            <h1 className="text-xl md:text-2xl text-center font-semibold mt-5">Add A Tourist Spot from Southeast Asia</h1>
            <div>
                <form onSubmit={handleSubmit(handleAddSpot)} className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <select className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" {...register("countryName" , { required: true })}>
                                    <option className="font-semibold" value="">Country Name</option>
                                    <option className="font-semibold" value="Bangladesh">Bangladesh</option>
                                    <option className="font-semibold" value="Thailand">Thailand</option>
                                    <option className="font-semibold" value="Indonesia">Indonesia</option>
                                    <option className="font-semibold" value="Malaysia">Malaysia</option>
                                    <option className="font-semibold" value="Vietnam">Vietnam</option>
                                    <option className="font-semibold" value="Cambodia">Cambodia</option>
                                </select>
                                {errors.countryName && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" type="text" placeholder="Tourist Spot Name" name="spotName" {...register("spotName", { required: true })} />
                                {errors.spotName && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" type="text" placeholder="Image URL" name="image" {...register("image", { required: true })} />
                                {errors.image && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" type="text" placeholder="Location" name="location" {...register("location", { required: true })} />
                                {errors.location && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div className="md:col-span-2">
                            <Fade direction={'up'} cascade damping={0.1}>
                                <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold col-span-2" type="text" placeholder="Sort Description" name="description" {...register("description", { required: true })} />
                                {errors.description && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" type="text" placeholder="Average Cost" name="average" {...register("average", { required: true })} />
                                {errors.average && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <select className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" {...register("seasonality", { required: true })}>
                                    <option className="font-semibold" value="">Seasonality</option>
                                    <option className="font-semibold" value="Summer">Summer</option>
                                    <option className="font-semibold" value="Winter">Winter</option>
                                </select>
                                {errors.seasonality && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <select className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" {...register("travelTime", { required: true })}>
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
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <select className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" {...register("totalVisitor", { required: true })}>
                                    <option className="font-semibold" value="">Total Visitor / Year</option>
                                    <option className="font-semibold" value="5000">5000</option>
                                    <option className="font-semibold" value="10000">10000</option>
                                    <option className="font-semibold" value="20000">20000</option>
                                    <option className="font-semibold" value="50000">50000</option>
                                    <option className="font-semibold" value="75000">75000</option>
                                    <option className="font-semibold" value="100000">100000</option>
                                </select>
                                {errors.totalVisitor && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" type="text" placeholder="User Name" value={displayName} name="displayName" {...register("displayName", { required: true })} />
                                {errors.location && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                        <div>
                            <Fade direction={'up'} cascade damping={0.1}>
                                <input className="px-5 py-2 bg-red-50 w-full my-1 placeholder:text-gray-900 placeholder:font-semibold text-gray-900 font-semibold" type="text" placeholder="Email" value={email} name="email" {...register("email", { required: true })} />
                                {errors.location && <span className="font-medium text-red-500 ml-5">This field is required</span>}
                            </Fade>
                        </div>
                    </div>
                    <Fade direction={'up'} cascade damping={0.1}>
                        <button type="submit" className="customBtn block mx-auto mt-10">Add Spot</button>
                    </Fade>
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;