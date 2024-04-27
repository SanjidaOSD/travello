import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyListSingleSpot = ({spot, idx, handleDelete}) => {
    const {spotName, countryName, average, _id} = spot




    return (
        <div className="grid grid-cols-12 border-x font-medium">
            <div className="flex justify-center items-center col-span-1 border-b py-2">
                <h1>{idx + 1}</h1>
            </div>
            <div className="col-span-4 flex justify-center items-center border-b border-s py-4">
                <h1>{spotName}</h1>
            </div>
            <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                <h1>{countryName}</h1>
            </div>
            <div className="col-span-2 flex justify-center items-center border-b border-s py-4">
                <h1>{average} $</h1>
            </div>
            <div className="col-span-3 flex justify-center items-center border-b border-s py-4 gap-5 flex-wrap">
                <Link to={`/updateSpot/${_id}`}><button className='px-3 py-1 bg-green-500 font-semibold text-white rounded-md'>Update</button></Link>
                <button onClick={()=>handleDelete(_id)} className='px-3 py-1 bg-red-500 font-semibold text-white rounded-md'>Delete</button>
            </div>
        </div>
    );
};

MyListSingleSpot.propTypes = {
    spot: PropTypes.object,
    idx: PropTypes.number,
    handleDelete:PropTypes.func,
    handleUpdate:PropTypes.func
};

export default MyListSingleSpot;