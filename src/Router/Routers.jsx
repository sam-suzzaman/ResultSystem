import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import Main from "../Layout/Main";
import DashboardPage from "../Pages/DashboardPages/DashboardPage";
import AdminDashboardPage from "../Pages/DashboardPages/Admin/AdminDashboardPage";
import StudentDashboardPage from "../Pages/DashboardPages/Student/StudentDashboardPage";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import StudentDashboardLayout from "../Layout/StudentDashboardLayout";
import BatchListPage from "../Pages/DashboardPages/Admin/BatchListPage/BatchListPage";
import SingleBatchPage from "../Pages/DashboardPages/Admin/SingleBatchPage/SingleBatchPage";
import SemesterPage from "../Pages/DashboardPages/Admin/SemesterPage/SemesterPage";

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
                        path: "/dashboard/admin/batch-list",
                        element: <BatchListPage></BatchListPage>,
                    },
                    {
                        path: "/dashboard/admin/batch-list/batch",
                        element: <SingleBatchPage></SingleBatchPage>,
                    },
                    {
                        path: "/dashboard/admin/batch-list/batch/semester-details",
                        element: <SemesterPage></SemesterPage>,
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
