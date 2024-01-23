import { NavLink, Outlet } from "react-router-dom";
// Icons
import { AiFillHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrDocumentPpt } from "react-icons/gr";
import { BsBookmarks } from "react-icons/bs";
import { HiDocumentCheck } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaAngleDoubleDown } from "react-icons/fa";

import { SessionPageProvider } from "../context/Admin/SessionPageContext";
import styled from "styled-components";

const AdminDashboardLayout = () => {
    const menu_items = [
        // {
        //     id: 1,
        //     title: "Home",
        //     path: "/dashboard/admin/",
        //     icon: <AiFillHome />,
        // },
        {
            id: 7,
            title: "search",
            path: "/dashboard/admin/search",
            icon: <CiSearch />,
        },
        {
            id: 2,
            title: "sessions",
            path: ".",
            // path: "/dashboard/admin/session-list",
            icon: <AiOutlineUsergroupAdd />,
        },
        {
            id: 5,
            title: "Teachers",
            path: "/dashboard/admin/manage-teacher",
            // path: "/dashboard/admin/session-list",
            icon: <FaUserTie />,
        },
        {
            id: 3,
            title: "add mark",
            path: "/dashboard/admin/add-mark",
            icon: <BsBookmarks />,
        },
        {
            id: 4,
            title: "Marksheets",
            path: "/dashboard/admin/get-mark",
            icon: <GrDocumentPpt />,
        },
        {
            id: 6,
            title: "Transcripts",
            path: "/dashboard/admin/transcript",
            icon: <HiDocumentCheck />,
        },
        {
            id: 8,
            title: "Re-add",
            path: "/dashboard/admin/re-add",
            icon: <FaAngleDoubleDown />,
        },
    ];
    return (
        <Wrapper>
            <SessionPageProvider>
                <div className="h-full relative">
                    <div className="drawer lg:drawer-open h-full">
                        <input
                            id="Admin_Dashboard_Drawer"
                            type="checkbox"
                            className="drawer-toggle"
                        />
                        <div className="drawer-content px-6 py-4 overflow-auto">
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
                                <ul className="menu pl-2 pr-3 p-8 w-[250px] text-base-content overflow-y-auto flex-nowrap flex-1 bg-base-300">
                                    {/* Sidebar content here */}
                                    {menu_items?.map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <NavLink
                                                    to={item.path}
                                                    className="capitalize font-semibold rms-link"
                                                    end
                                                >
                                                    <span className="text-xl mr-3 inline-flex items-center ">
                                                        {item?.icon}
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
                </div>
            </SessionPageProvider>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    height: 100%;

    .menu .rms-link {
        border-radius: 4px;
        margin-bottom: 6px;
    }
    .menu .rms-link.active {
        background-color: var(--primary-clr);
        /* background-color: rgba(0, 0, 0, 0.06); */
        color: var(--white-clr);
        font-weight: 600;
        letter-spacing: 1px;
    }
`;
export default AdminDashboardLayout;
