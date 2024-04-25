import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li className="mx-1 font-semibold"><NavLink to={'/'}>Home</NavLink></li>
        <li className="mx-1 font-semibold"><NavLink to={'/allTouristsSpot'}>All Tourists Sopt</NavLink></li>
        <li className="mx-1 font-semibold"><NavLink to={'/addTouristsSpot'}>Add Tourists Sopt</NavLink></li>
        <li className="mx-1 font-semibold"><NavLink to={'/myList'}>My List</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    </div>
                    <NavLink to={'/'} className="btn btn-ghost hover:bg-transparent text-xl">
                        <img className="w-[120px]" src="https://i.postimg.cc/wMDGTvh1/logo.png" alt="Logo" />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <Link to={'/login'} className="customBtn">Login</Link>
                    <Link to={'/register'} className="customBtn">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;