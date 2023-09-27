import { Link, NavLink } from "react-router-dom";
import avatarPhoto from "../../../assets/avatar_photo.jpg";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useUserContext } from "../../../context/Admin/UserContext";

const ProfileMenu = () => {
    const { user, userLogout } = useUserContext();
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
                            {user?.username || "unknown"}
                        </h3>
                        <p className="text-xs mb-0 text-slate-500 capitalize font-normal">
                            <span className="font-medium">role:</span>{" "}
                            <span className="">{user?.role || "..."}</span>
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
                    {user?.username ? (
                        <button
                            onClick={() => userLogout()}
                            className="flex items-center text-red-600 hover:text-red-700 hover:font-medium rounded-sm"
                        >
                            <FiLogOut />
                            <span className="text-[11px] uppercase font-medium ">
                                logout
                            </span>
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="flex items-center text-red-600 hover:text-red-700 hover:font-medium rounded-sm"
                        >
                            <span className="font-bold text-base">
                                <FiLogIn />
                            </span>
                            login
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;
