import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const CountryCard = ({country}) => {

    const {countryName, image, description} = country || {};

    return (
        <Fade direction={'up'} cascade damping={0.1}>
            <Link to={`/country/${countryName}`}>
                <div className='p-5 rounded-lg shadow-lg hover:shadow-2xl flex flex-col duration-300 hover:scale-[1.01] cursor-pointer h-full'>
                    <div>
                        <img className='w-full h-[250px] rounded-lg object-cover' src={image} alt="Country Image" />
                    </div>
                    <div className='flex-grow'>
                        <h1 className='text-2xl font-bold mt-5'>{countryName}</h1>
                        <p className='text-justify font-medium mt-2'>{description}</p>
                    </div>
                </div>
            </Link>
        </Fade>
    );
};

CountryCard.propTypes = {
    country: PropTypes.object
};


export default CountryCard;