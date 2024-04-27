import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[400px] flex justify-center items-center flex-col">
                <h1 className="text-5xl font-bold text-red-500">Ooops!</h1>
                <h3 className="text-xl mt-2">Something went worng.</h3>
                <p className="font-medium mt-3">Please go back to Home page.</p>
                <Link to={'/'}> <button className="customBtn mt-3"> Home </button> </Link>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;