import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import AdminDashboardPage from "../Pages/DashboardPages/AdminDashboardPage";
import Main from "../Layout/Main";

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
                element: <AdminDashboardPage></AdminDashboardPage>,
            },
            // {
            //     path: "/register",
            //     element: <RegisterPage></RegisterPage>,
            // },
            // {
            //     path: "/login",
            //     element: <LoginPage></LoginPage>,
            // },
            // {
            //     path: "*",
            //     element: <NotFoundPage />,
            // },
        ],
    },
]);

export default Routers;
