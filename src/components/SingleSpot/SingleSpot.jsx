import PropTypes from 'prop-types';

const SingleSpot = ({spot}) => {
    const {spotName, image, average, seasonality, travelTime, totalVisitor} = spot;
    console.log(image);
    return (
        <div className='shadow-xl rounded-b-xl w-full'>
            <div>
                <img className='h-[220px] w-full object-cover rounded-t-xl' src={image} alt="Spot Image" />
            </div>
            <div className='p-5 w-full'>
                <h1>{spotName}</h1>
                <h3>{average}</h3>
                <h3>{travelTime}</h3>
                <h3>{seasonality}</h3>
                <h3>{totalVisitor}</h3>
                <button className='customBtn w-full mx-auto block rounded-lg'>View Details</button>
            </div>
        </div>
    );
};

SingleSpot.propTypes = {
    spot: PropTypes.object
};

export default SingleSpot;