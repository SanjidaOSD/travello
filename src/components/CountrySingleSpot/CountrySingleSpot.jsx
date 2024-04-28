import PropTypes from 'prop-types';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CountrySingleSpot = ({spot}) => {

    const {_id, countryName, spotName, location, description, average, seasonality} = spot || {}

    return (
        <div className='border p-8 rounded-lg shadow-xl'>
            <div>
                <h1 className='text-2xl font-bold'>{spotName}</h1>
                <h1 className='text-xl font-semibold mt-1'>{countryName}</h1>
                <h1 className='text-sm font-medium mt-5 text-justify'>{description}</h1>
                <hr className='my-5 border-dashed border-gray-300' />
                <div className='flex gap-8 items-center'>
                    <h1 className='text-xl text-gray-600 flex gap-2 items-center font-bold'><FaSackDollar/> {average}$</h1>
                    <h1 className='text-xl text-gray-600 flex gap-2 items-center font-bold'><FaCalendarAlt/> {seasonality}</h1>
                </div>
                <h1 className='text-lg font-bold flex gap-2 items-center mt-3 text-gray-600'> <FaLocationDot className='text-xl'/> {location}</h1> 
            </div>
            <div className='mt-5 flex justify-end'>
                <Link to={`/spotDetails/${_id}`}><button className='customBtn w-[150px] rounded-lg'>See Details</button></Link>
            </div>
        </div>
    );
};

CountrySingleSpot.propTypes = {
    spot: PropTypes.object,
    idx: PropTypes.number
};

export default CountrySingleSpot;