import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaEnvelope} from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="bg-[#ff00660d] mt-32">
            <footer className="container mx-auto px-5 footer p-10 text-base-content">
                <aside>
                    <img className="w-[160px]" src="https://i.postimg.cc/wMDGTvh1/logo.png" alt="Logo" />
                    <p className="font-bold text-sm max-w-xs mt-3">Travelo is a provide all tourists spot in South Asia.</p>
                    <div>
                        <p className="flex gap-2 items-center mt-2 font-medium"><FaEnvelope/> support@travelo.com</p>
                        <p className="flex gap-2 items-center mt-2 font-medium"><IoCallSharp /> +8801863-931220, +8801567-953483</p>
                    </div>
                    <div className="flex justify-start items-center gap-5 mt-3 text-xl">
                        <h1 className="font-bold">Follow Us On - </h1>
                        <div className="cursor-pointer">
                            <FaFacebookF/>
                        </div>
                        <div className="cursor-pointer">
                            <FaLinkedinIn/>
                        </div>
                        <div className="cursor-pointer">
                            <FaInstagram/>
                        </div>
                        <div className="cursor-pointer">
                            <FaTwitter/>
                        </div>
                    </div>
                </aside> 
                <nav>
                    <h6 className="footer-title text-[#ff0066]">Services</h6> 
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Tours</a>
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Travels</a>
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Rental Service</a>
                </nav> 
                <nav>
                    <h6 className="footer-title text-[#ff0066]">Company</h6> 
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">About us</a>
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Contact</a>
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Jobs</a>
                </nav> 
                <nav>
                    <h6 className="footer-title text-[#ff0066]">Legal</h6> 
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Terms of use</a>
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Privacy policy</a>
                    <a className="font-semibold hover:text-[#08bdba] duration-200 cursor-pointer">Cookie policy</a>
                </nav>
            </footer>   
            <div className="h-[50px] w-full px-5 text-center bg-[#ff0066] flex justify-center items-center">
                <p className="font-semibold text-sm text-white">&copy; Copywrite 2024 | All Rights Reserved By Travelo</p>
            </div>
        </div>
    );
};

export default Footer;