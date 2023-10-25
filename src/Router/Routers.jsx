import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/HomePage/HomePage";
import Main from "../Layout/Main";
import DashboardPage from "../Pages/DashboardPages/DashboardPage";
import AdminDashboardPage from "../Pages/DashboardPages/Admin/AdminDashboardPage";
import StudentDashboardPage from "../Pages/DashboardPages/Student/StudentDashboardPage";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import StudentDashboardLayout from "../Layout/StudentDashboardLayout";
import LoginPage from "../Pages/AuthenticationPages/LoginPage/LoginPage";
import CourseListPage from "../Pages/DashboardPages/Admin/CourseListPage/CourseListPage";
import StudentListPage from "../Pages/DashboardPages/Admin/StudentListPage/StudentListPage";
import SessionListPage from "../Pages/DashboardPages/Admin/SessionListPage/SessionListPage";
import SingleSessionPage from "../Pages/DashboardPages/Admin/SingleSessionPage/SingleSessionPage";
import AddMarkPage from "../Pages/DashboardPages/Admin/AddMarkPage/AddMarkPage";
import AddMarkPageTwo from "../Pages/DashboardPages/Admin/AddMarkPageTwo/AddMarkPage";
import InternalMarkAddPage from "../Pages/DashboardPages/Admin/AddMarkPage/InternalMarkAddPage";
import ExternalMarkAddPage from "../Pages/DashboardPages/Admin/AddMarkPage/ExternalMarkAddPage";
import LabMarkAddPage from "../Pages/DashboardPages/Admin/AddMarkPage/LabMarkAddPage";
import ImprovementMarkAddPage from "../Pages/DashboardPages/Admin/AddMarkPage/ImprovementMarkAddPage";
import ProtectAdminRoutes from "./ProtectAdminRoutes";
import ProtectLoginRoute from "./ProtectLoginRoute";
import GetMarkPage from "../Pages/DashboardPages/Admin/GetMarkPage/GetMarkPage";
import InternalMarkPage from "../Pages/DashboardPages/Admin/GetMarkPage/InternalMarkPage";
import SemesterCourseMarkPage from "../Pages/DashboardPages/Admin/GetMarkPage/SemesterCourseMarkPage";
import SemesterFinalMarkPage from "../Pages/DashboardPages/Admin/GetMarkPage/SemesterFinalMarkPage";

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
                element: (
                    <ProtectLoginRoute>
                        <LoginPage></LoginPage>
                    </ProtectLoginRoute>
                ),
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
                    <ProtectAdminRoutes>
                        <AdminDashboardLayout></AdminDashboardLayout>
                    </ProtectAdminRoutes>

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
                        path: "/dashboard/admin/add-mark",
                        element: <AddMarkPage />,
                    },
                    {
                        path: "/dashboard/admin/add-mark/internal",
                        element: <InternalMarkAddPage />,
                    },
                    {
                        path: "/dashboard/admin/add-mark/external",
                        element: <ExternalMarkAddPage />,
                    },
                    {
                        path: "/dashboard/admin/add-mark/lab",
                        element: <LabMarkAddPage />,
                    },
                    {
                        path: "/dashboard/admin/add-mark/improvement",
                        element: <ImprovementMarkAddPage />,
                    },
                    {
                        path: "/dashboard/admin/session-list/:session",
                        element: <SingleSessionPage></SingleSessionPage>,
                    },
                    {
                        path: "/dashboard/admin/:session/student-list",
                        element: <StudentListPage></StudentListPage>,
                    },
                    {
                        path: "/dashboard/admin/session-list/:session/:semester/course",
                        element: <CourseListPage></CourseListPage>,
                    },
                    {
                        path: "/dashboard/admin/session-list/:session/:semester/add-mark/:courseCode",
                        element: <AddMarkPageTwo></AddMarkPageTwo>,
                    },
                    {
                        path: "/dashboard/admin/get-mark",
                        element: <GetMarkPage></GetMarkPage>,
                    },
                    {
                        path: "/dashboard/admin/get-mark/internal",
                        element: <InternalMarkPage />,
                    },
                    {
                        path: "/dashboard/admin/get-mark/course-final",
                        element: <SemesterCourseMarkPage />,
                    },
                    {
                        path: "/dashboard/admin/get-mark/semester-final",
                        element: <SemesterFinalMarkPage />,
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
