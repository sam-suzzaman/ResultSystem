import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const StudentDashboardLayout = () => {
    const menu_items = [
        {
            id: 1,
            title: "blog list",
            path: "/dashboard/blog-list",
        },
        {
            id: 2,
            title: "create blog",
            path: "/dashboard/create-blog",
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
        <div>
            <div className="drawer lg:drawer-open">
                <input
                    id="Dashboard_Drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content  px-6 py-10">
                    <Outlet />
                    {/* toggler */}
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="Dashboard_Drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-[250px] h-full bg-base-200 text-base-content">
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
