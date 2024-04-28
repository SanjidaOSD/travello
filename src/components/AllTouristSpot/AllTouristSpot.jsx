import PropTypes from 'prop-types';
import SingleSpot from '../SingleSpot/SingleSpot';
import { Link } from 'react-router-dom';

const AllTouristSpot = ({spotsArr}) => {

    return (
        <div className='container mx-auto px-5'>
            <h1 className="text-xl md:text-2xl text-center font-semibold mt-5">Tourist Spots</h1>
            <p className="text-gray-500 font-medium mt-3 max-w-[700px] mx-auto text-center" >Satisfied clients share their success stories, reflecting our commitment to excellence and personalized service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {
                    spotsArr.slice(0,6).map(spot => <SingleSpot key={spot._id} spot={spot} /> )
                }
            </div>
            <div className='flex justify-center mt-12'>
                <Link to={'/allTouristsSpot'}><button className='customBtn'>See All</button></Link>
            </div>
        </div>
    );
};


AllTouristSpot.propTypes = {
    spotsArr: PropTypes.array
};


export default AllTouristSpot;