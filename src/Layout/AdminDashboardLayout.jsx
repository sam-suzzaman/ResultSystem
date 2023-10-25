import { NavLink, Outlet } from "react-router-dom";
// Icons
import { AiFillHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrDocumentPpt } from "react-icons/gr";
import { BsBookmarks } from "react-icons/bs";
import { SessionPageProvider } from "../context/Admin/SessionPageContext";

const AdminDashboardLayout = () => {
    const menu_items = [
        {
            id: 1,
            title: "Home",
            path: "/dashboard/admin/",
            icon: <AiFillHome />,
        },
        {
            id: 2,
            title: "sessions",
            path: "/dashboard/admin/session-list",
            icon: <AiOutlineUsergroupAdd />,
        },
        {
            id: 3,
            title: "add mark",
            path: "/dashboard/admin/add-mark",
            icon: <BsBookmarks />,
        },
        {
            id: 4,
            title: "get mark",
            path: "/dashboard/admin/get-mark",
            icon: <GrDocumentPpt />,
        },
    ];
    return (
        <SessionPageProvider>
            <div className="h-full relative">
                <div className="drawer lg:drawer-open h-full">
                    <input
                        id="Dashboard_Drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content px-6 py-4 overflow-auto">
                        <Outlet />
                    </div>
                    <div className="drawer-side h-full absolute !top-auto">
                        <label
                            htmlFor="Dashboard_Drawer"
                            className="drawer-overlay h-full"
                        ></label>
                        <ul className="menu h-full pl-2 pr-3 p-8 w-[250px] bg-base-200 text-base-content overflow-y-auto flex-nowrap ">
                            {/* Sidebar content here */}
                            {menu_items?.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className="border-b border-slate-300 mb-2 "
                                    >
                                        <NavLink
                                            to={item.path}
                                            className="capitalize font-semibold rounded-sm"
                                        >
                                            <span className="text-xl">
                                                {item.icon}
                                            </span>
                                            {item.title}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </SessionPageProvider>
    );
};

export default AdminDashboardLayout;
