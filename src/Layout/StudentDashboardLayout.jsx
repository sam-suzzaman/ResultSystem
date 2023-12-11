import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

import deptLogo from "../assets/deptLogo.jpg";

import { LuFlagTriangleRight } from "react-icons/lu";
import { BiUserPin } from "react-icons/bi";

const StudentDashboardLayout = () => {
    const menu_items = [
        {
            id: 2,
            title: "Profile",
            icon: <BiUserPin />,
            path: "/dashboard/student/profile",
        },
        {
            id: 1,
            title: "Result",
            icon: <LuFlagTriangleRight />,
            path: "/dashboard/student/result",
        },
    ];

    return (
        <Wrapper>
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
                    <div className="rms-sidebar drawer-side h-full absolute !top-auto">
                        <label
                            htmlFor="Student_Dashboard_Drawer"
                            className="drawer-overlay h-full"
                        ></label>
                        <div className=" h-full  flex flex-col items-center">
                            {/* <div className="brand">
                                <img src={deptLogo} alt="eee" />
                            </div> */}
                            <ul className="menu pl-2 pr-3 p-8 w-[250px] text-base-content overflow-y-auto flex-nowrap flex-1">
                                {/* Sidebar content here */}
                                {menu_items?.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <NavLink
                                                to={item.path}
                                                className="capitalize font-medium rms-link"
                                            >
                                                <span className="text-xl">
                                                    {item?.icon}
                                                </span>{" "}
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    height: 100%;
    box-shadow: 4px 0 6px rgba(0, 0, 0, 0.4);

    .menu .rms-link {
        border-radius: 4px;
        margin-bottom: 6px;
    }
    .menu .rms-link.active {
        background-color: rgba(0, 0, 0, 0.06);
        color: var(--primary-clr);
        font-weight: 600;
        letter-spacing: 1px;
    }
`;

export default StudentDashboardLayout;
