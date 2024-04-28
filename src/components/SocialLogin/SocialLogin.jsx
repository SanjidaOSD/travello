import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {

    const {googleLogin, githubLogin, setLoading} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const previousLocation = location?.state || '/';

    // Handle Google Login
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(()=> {
            Swal.fire({
                icon: "success",
                title: "Login Successfull"
            });
            navigate(previousLocation)
        })
        .catch(()=> {
            Swal.fire({
                icon: "error",
                title: "Login Failed"
            });
            setLoading(false);
        })
    }
   
    // Handle Github Login
    const handleGithubLogin = () =>{
        githubLogin()
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
    }
   
    return (
        <div>
            <div className="flex gap-5 justify-center flex-wrap mt-3">
                <div onClick={handleGoogleLogin} className="px-3 pt-1 pb-1 border flex justify-center items-center gap-1 cursor-pointer text-[#ff0066] border-[#ff0066] font-semibold hover:bg-[#ff0066] hover:border-transparent hover:text-white duration-200">
                    <FaGoogle className="text-xl"/>
                    <h1 className="mt-1">Google</h1>
                </div>
                <div onClick={handleGithubLogin} className="px-3 py-1 border flex justify-center items-center gap-1 cursor-pointer border-[#ff0066] font-semibold text-[#ff0066] hover:bg-[#ff0066] hover:border-transparent hover:text-white duration-200">
                    <FaGithub className="text-xl"/>
                    <h1 className="mt-1">Github</h1>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;