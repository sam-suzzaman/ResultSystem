import { NavLink } from "react-router-dom";
import avatarPhoto from "../../../assets/avatar_photo.jpg";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const ProfileMenu = () => {
    return (
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
                        <p className="text-xs mb-0 text-slate-500">Admin</p>
                    </div>
                </div>
            </label>
            <ul
                tabIndex={0}
                className="mt-5 z-[1] p-2 shadow-md menu menu-sm dropdown-content bg-base-100 rounded-sm w-52"
            >
                <li>
                    <NavLink
                        to="/dashboard/admin/"
                        className="capitalize rounded-sm"
                    >
                        <span className="text-lg">
                            <MdOutlineDashboardCustomize />
                        </span>
                        dashboard
                    </NavLink>
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
    );
};

export default ProfileMenu;
