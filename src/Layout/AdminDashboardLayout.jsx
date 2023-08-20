import { NavLink, Outlet } from "react-router-dom";

// Icons
import { AiFillHome, AiOutlineUsergroupAdd } from "react-icons/ai";
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
            path: "/dashboard/admin/batch-list",
            icon: <AiOutlineUsergroupAdd />,
        },
    ];
    return (
        <SessionPageProvider>
            <div>
                <div className="drawer lg:drawer-open">
                    <input
                        id="Dashboard_Drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content px-6 py-4">
                        <Outlet />
                        {/* toggler */}
                    </div>
                    <div className="drawer-side h-full min-h-[75vh] top-[69px] min-[1024px]:top-0">
                        <label
                            htmlFor="Dashboard_Drawer"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-[250px] h-full bg-base-200 text-base-content">
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
