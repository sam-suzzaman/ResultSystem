import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import Main from "../Layout/Main";
import DashboardPage from "../Pages/DashboardPages/DashboardPage";
import AdminDashboardPage from "../Pages/DashboardPages/Admin/AdminDashboardPage";
import StudentDashboardPage from "../Pages/DashboardPages/Student/StudentDashboardPage";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import StudentDashboardLayout from "../Layout/StudentDashboardLayout";
import AddMarkPage from "../Pages/DashboardPages/Admin/AddMarkPage/AddMarkPage";
import LoginPage from "../Pages/AuthenticationPages/LoginPage/LoginPage";
import CourseListPage from "../Pages/DashboardPages/Admin/CourseListPage/CourseListPage";
import StudentListPage from "../Pages/DashboardPages/Admin/StudentListPage/StudentListPage";
import SessionListPage from "../Pages/DashboardPages/Admin/SessionListPage/SessionListPage";
import SingleSessionPage from "../Pages/DashboardPages/Admin/SingleSessionPage/SingleSessionPage";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "/dashboard",
                element: <DashboardPage />,
            },
            // {
            //     path: "/register",
            //     element: <RegisterPage></RegisterPage>,
            // },
            // {
            //     path: "/login",
            //     element: <LoginPage></LoginPage>,
            // },
            {
                path: "/dashboard/admin",
                element: (
                    <AdminDashboardLayout></AdminDashboardLayout>

                    // <ProtectedRoutes>
                    //     <DashboardLayout></DashboardLayout>
                    // </ProtectedRoutes>
                ),
                children: [
                    {
                        path: "/dashboard/admin",
                        element: <AdminDashboardPage></AdminDashboardPage>,
                    },
                    {
                        path: "/dashboard/admin/session-list",
                        element: <SessionListPage></SessionListPage>,
                    },
                    {
                        path: "/dashboard/admin/session-list/:session",
                        element: <SingleSessionPage></SingleSessionPage>,
                    },
                    {
                        path: "/dashboard/admin/batch-list/batch/student-list",
                        element: <StudentListPage></StudentListPage>,
                    },
                    {
                        path: "/dashboard/admin/session-list/:session/:semester/course",
                        element: <CourseListPage></CourseListPage>,
                    },
                    {
                        path: "/dashboard/admin/session-list/:session/:semester/add-mark",
                        element: <AddMarkPage></AddMarkPage>,
                    },
                ],
            },
            // {
            //     path: "/dashboard/student",
            //     element: (
            //         <StudentDashboardLayout></StudentDashboardLayout>

            //         // <ProtectedRoutes>
            //         //     <DashboardLayout></DashboardLayout>
            //         // </ProtectedRoutes>
            //     ),
            //     children: [
            //         {
            //             path: "/dashboard/student",
            //             element: <StudentDashboardPage></StudentDashboardPage>,
            //         },
            //         // {
            //         //     path: "/dashboard/blog-list",
            //         //     element: <BlogListPage></BlogListPage>,
            //         // },
            //     ],
            // },
            // {
            //     path: "*",
            //     element: <NotFoundPage />,
            // },
        ],
    },
]);

export default Routers;
