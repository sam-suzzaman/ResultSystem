import { Link, NavLink } from "react-router-dom";
import jkkniuLogo from "../../../assets/Jkkniu_logo.png";
import avatarPhoto from "../../../assets/avatar_photo.jpg";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

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
                        Jatiya Kabi Kazi Nazrul Islam University
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                            <div className="flex justify-end items-center mr-6 cursor-pointer">
                                <img
                                    src={avatarPhoto}
                                    alt="avatar_photo"
                                    className="w-10 rounded-full"
                                />
                                <div className="">
                                    <h3 className="text-xs font-medium capitalize mb-0 text-slate-700">
                                        User name
                                    </h3>
                                    <p className="text-xs mb-0 text-slate-500">
                                        Admin
                                    </p>
                                </div>
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-5 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-sm w-52"
                        >
                            <li>
                                <NavLink
                                    to="/dashboard/admin"
                                    className="capitalize rounded-sm"
                                >
                                    <span className="text-lg">
                                        <MdOutlineDashboardCustomize />
                                    </span>
                                    dashboard
                                </NavLink>
                            </li>
                            <li>
                                <a className="capitalize rounded-sm">
                                    <span className="text-lg">
                                        <AiOutlineSetting />
                                    </span>
                                    Settings
                                </a>
                            </li>
                            <li>
                                <button className="flex items-center text-red-600 hover:text-red-700 hover:font-medium rounded-sm">
                                    <FiLogOut />
                                    <span className="text-[11px] uppercase font-medium ">
                                        logout
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>

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
