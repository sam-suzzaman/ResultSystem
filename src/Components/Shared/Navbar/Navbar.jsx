import jkkniuLogo from "../../../assets/Jkkniu_logo.png";
import avatarPhoto from "../../../assets/avatar_photo.jpg";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="shadow-md">
            <div className="navbar bg-base-100 w-full max-w-7xl mx-auto justify-between">
                <div className="navbar-start">
                    <div className="w-12">
                        <img
                            className="w-full"
                            src={jkkniuLogo}
                            alt="jkkniu_logo"
                        />
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="font-bold hidden md:block text-xl uppercase">
                        Jatiya Kabi Kazi Nazrul Islam University
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-end items-center mr-6">
                        <img
                            src={avatarPhoto}
                            alt="avatar_photo"
                            className="w-10"
                        />
                        <div className="">
                            <h3 className="text-xs font-medium capitalize mb-0 text-slate-700">
                                User name
                            </h3>
                            <p className="text-xs mb-0 text-slate-500">Admin</p>
                        </div>
                    </div>
                    <button className="flex justify-end items-center text-red-600 hover:text-red-700 hover:font-medium">
                        <span className="text-[10px] uppercase font-medium mr-1">
                            logout
                        </span>
                        <FiLogOut />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
