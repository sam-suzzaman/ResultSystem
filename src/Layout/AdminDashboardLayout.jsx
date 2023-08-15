import { NavLink, Outlet } from "react-router-dom";

// Icons
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const AdminDashboardLayout = () => {
    const menu_items = [
        {
            id: 1,
            title: "Batch list",
            path: "/dashboard/admin/batch-list",
            icon: <AiOutlineUsergroupAdd />,
        },
    ];
    return (
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
                <div className="drawer-side h-full min-h-[75vh]">
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
                                    className="border-b border-slate-300"
                                >
                                    <NavLink
                                        to={item.path}
                                        className="capitalize font-semibold"
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
    );
};

export default AdminDashboardLayout;
