import { Link, NavLink } from "react-router-dom";
import jkkniuLogo from "../../../assets/Jkkniu_logo.png";
import ProfileMenu from "./ProfileMenu";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="shadow-md bg-base-100 sticky top-0 z-10">
            <div className="navbar w-full max-w-7xl mx-auto justify-between">
                <div className="navbar-start">
                    <div className="w-12">
                        <Link to="/">
                            <img
                                className="w-full"
                                src={jkkniuLogo}
                                alt="jkkniu_logo"
                            />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link
                        to="/"
                        className="font-bold hidden md:block text-xl uppercase"
                    >
                        Dept. of Electrical and Electronic Engineering
                    </Link>
                </div>
                <div className="navbar-end">
                    <ProfileMenu />
                    <Link
                        to="/login"
                        className="btn btn-sm rounded-sm bg-[#ff9645] hover:bg-[#fa9455] text-xs font-medium text-white"
                    >
                        <span className="font-bold text-base">
                            <FiLogIn />
                        </span>
                        login
                    </Link>

                    {/* <button className="flex justify-end items-center text-red-600 hover:text-red-700 hover:font-medium">
                            <span className="text-[10px] uppercase font-medium mr-1">
                                logout
                            </span>
                            <FiLogOut />
                        </button> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
