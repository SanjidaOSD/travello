import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from "react-spinners";

const ProtectedRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    
    if(loading){
        return <>
            <div className="min-h-[calc(100vh-280px)] flex justify-center items-center mt-20">
                <FadeLoader color="#ff0066" />
            </div>
        </>
    }
    if(!user){
        return <Navigate to={"/login"} state={location?.pathname || '/'} />
    }
    return(
        <div>
            {children}
        </div>
    );
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
};

export default ProtectedRoute;