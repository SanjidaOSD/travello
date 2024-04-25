import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {

    const {googleLogin} = useAuth();


    const handleGoogleLogin = () =>{
        googleLogin()
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
                <div className="px-3 py-1 border flex justify-center items-center gap-1 cursor-pointer border-[#ff0066] font-semibold text-[#ff0066] hover:bg-[#ff0066] hover:border-transparent hover:text-white duration-200">
                    <FaGithub className="text-xl"/>
                    <h1 className="mt-1">Github</h1>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;