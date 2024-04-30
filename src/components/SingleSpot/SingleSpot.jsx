import PropTypes from 'prop-types';
import { FaCalendar, FaSackDollar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SingleSpot = ({spot}) => {
    const {_id, spotName, image, average, seasonality, travelTime, totalVisitor} = spot;

    return (
            <div className='shadow-lg hover:shadow-2xl duration-300 rounded-b-xl w-full flex-col flex hover:scale-[1.01] cursor-pointer h-full'>
                <div>
                    <img className='h-[250px] w-full object-cover rounded-t-xl' src={image} alt="Spot Image" />
                </div>
                <div className='p-5 w-full rounded-b-xl border-x-2 border-b-2 flex flex-col h-full'>
                    <div className='flex-grow'>
                        <h1 className='text-2xl font-bold'>{spotName}</h1>
                        <div className='flex gap-5 my-2 font-semibold'>
                            <h3 className='flex items-center gap-2'><FaSackDollar className='mb-[2px]'/> {average}$</h3>
                            <h3 className='flex items-center gap-2'><FaCalendar className='mb-[2px]'/> {travelTime}</h3>
                        </div>
                        <h3 className='font-medium mb-2'>Season : <span className='font-semibold'>{seasonality}</span></h3>
                        <h3 className='font-medium mb-2'>Total Visitor Per Year : <span className='font-semibold'>{totalVisitor}</span></h3>
                    </div>
                    <div>
                        <Link to={`/spotDetails/${_id}`}><button className='customBtn w-full mx-auto block rounded-lg mt-5'>View Details</button></Link>
                    </div>
                </div>
            </div>
    );
};

SingleSpot.propTypes = {
    spot: PropTypes.object
};

export default SingleSpot;