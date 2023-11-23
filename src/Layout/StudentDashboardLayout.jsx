import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const StudentDashboardLayout = () => {
    const menu_items = [
        {
            id: 2,
            title: "Profile",
            path: "/dashboard/student/profile",
        },
        {
            id: 1,
            title: "Result",
            path: "/dashboard/student/result",
        },

        {
            id: 4,
            title: "user list",
            path: "/dashboard/user-list",
        },
        {
            id: 5,
            title: "manage categories",
            path: "/dashboard/categories",
        },
    ];
    return (
        <div className="h-full relative">
            <div className="drawer lg:drawer-open h-full">
                <input
                    id="Student_Dashboard_Drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content  px-6 py-4 overflow-auto">
                    <Outlet />
                </div>
                <div className="drawer-side h-full absolute !top-auto">
                    <label
                        htmlFor="Student_Dashboard_Drawer"
                        className="drawer-overlay h-full"
                    ></label>
                    <ul className="menu h-full pl-2 pr-3 p-8 w-[250px] bg-base-200 text-base-content overflow-y-auto flex-nowrap ">
                        {/* Sidebar content here */}
                        {menu_items?.map((item) => {
                            return (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        className="capitalize font-medium"
                                    >
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

export default StudentDashboardLayout;
