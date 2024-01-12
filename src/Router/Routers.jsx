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
import SemesterFinalMarkPage from "../Pages/DashboardPages/Admin/GetMarkPage/SemesterFinalMarkPage";
import ResultPage from "../Pages/DashboardPages/Student/ResultPage";
import Profile from "../Pages/DashboardPages/Student/Profile";
import EditProfilePage from "../Pages/DashboardPages/Student/EditProfilePage";
import ResetPassword from "../Pages/DashboardPages/Student/ProfilePage/ResetPassword";
import CourseFinalMarkPage from "../Pages/DashboardPages/Admin/GetMarkPage/CourseFinalMarkPage";
import ResultStepContext from "../context/Admin/ResultStepContext";
import ImprovementMarkPage from "../Pages/DashboardPages/Admin/GetMarkPage/ImprovementMarkPage";
import TranscriptPageStudent from "../Pages/DashboardPages/Student/TranscriptPage";
import TranscriptPageAdmin from "../Pages/DashboardPages/Admin/TranscriptPage/TranscriptPage";
import SemesterTranscriptPageAdmin from "../Pages/DashboardPages/Admin/TranscriptPage/SemesterTranscriptPage";
import SemesterTranscriptPageStudent from "../Pages/DashboardPages/Student/SemesterTranscriptPage";
import ProtectStudentRoute from "./ProtectStudentRoute";

import InternalMarkPageStudent from "../Pages/DashboardPages/Student/ResultPage/InternalMarkPage";
import SemesterMarkPageStudent from "../Pages/DashboardPages/Student/ResultPage/SemesterMarkPage";
import ImproveMarkPageStudent from "../Pages/DashboardPages/Student/ResultPage/ImproveMarkPage";
import LabImproveAddMarkPage from "../Pages/DashboardPages/Admin/AddMarkPage/LabImproveAddMarkPage";

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
            // {
            //     path: "/dashboard",
            //     element: <DashboardPage />,
            // },
            {
                path: "/dashboard/admin",
                element: (
                    <ProtectAdminRoutes>
                        <AdminDashboardLayout></AdminDashboardLayout>
                    </ProtectAdminRoutes>
                ),
                children: [
                    // {
                    //     path: "/dashboard/admin",
                    //     element: (
                    //         <ProtectAdminRoutes>
                    //             <AdminDashboardPage></AdminDashboardPage>
                    //         </ProtectAdminRoutes>
                    //     ),
                    // },
                    {
                        // path: ".",
                        index: true,
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
                        path: "/dashboard/admin/add-mark/theory-improvement",
                        element: <ImprovementMarkAddPage />,
                    },
                    {
                        path: "/dashboard/admin/add-mark/lab-improvement",
                        element: <LabImproveAddMarkPage />,
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
                        element: (
                            <ResultStepContext>
                                <InternalMarkPage />
                            </ResultStepContext>
                        ),
                    },
                    {
                        path: "/dashboard/admin/get-mark/course-final",
                        element: (
                            <ResultStepContext>
                                <CourseFinalMarkPage />
                            </ResultStepContext>
                        ),
                    },
                    {
                        path: "/dashboard/admin/get-mark/semester-final",
                        element: (
                            <ResultStepContext>
                                <SemesterFinalMarkPage />
                            </ResultStepContext>
                        ),
                    },
                    {
                        path: "/dashboard/admin/get-mark/improve",
                        element: (
                            <ResultStepContext>
                                <ImprovementMarkPage />
                            </ResultStepContext>
                        ),
                    },
                    {
                        path: "/dashboard/admin/transcript",
                        element: <TranscriptPageAdmin />,
                    },
                    {
                        path: "/dashboard/admin/transcript/semester",
                        element: <SemesterTranscriptPageAdmin />,
                    },
                ],
            },
            {
                path: "/dashboard/student",
                element: (
                    <ProtectStudentRoute>
                        <StudentDashboardLayout></StudentDashboardLayout>
                    </ProtectStudentRoute>
                ),
                children: [
                    // {
                    //     // path: "/dashboard/student",
                    //     index: true,
                    //     element: (
                    //         <ProtectStudentRoute>
                    //             <StudentDashboardPage></StudentDashboardPage>
                    //         </ProtectStudentRoute>
                    //     ),
                    // },
                    {
                        // path: "/dashboard/student/profile",
                        index: true,
                        element: <Profile />,
                    },
                    {
                        path: "/dashboard/student/result",
                        element: <ResultPage />,
                    },
                    {
                        path: "/dashboard/student/result/internal",
                        element: <InternalMarkPageStudent />,
                    },
                    {
                        path: "/dashboard/student/result/semester",
                        element: <SemesterMarkPageStudent />,
                    },
                    {
                        path: "/dashboard/student/result/improve",
                        element: <ImproveMarkPageStudent />,
                    },
                    {
                        path: "/dashboard/student/profile/:id",
                        element: <EditProfilePage />,
                    },
                    {
                        path: "/dashboard/student/reset/:id",
                        element: <ResetPassword />,
                    },
                    {
                        path: "/dashboard/student/transcript",
                        element: <TranscriptPageStudent />,
                    },
                    {
                        path: "/dashboard/student/transcript/semester",
                        element: <SemesterTranscriptPageStudent />,
                    },
                ],
            },
            // {
            //     path: "*",
            //     element: <NotFoundPage />,
            // },
        ],
    },
]);

export default Routers;
