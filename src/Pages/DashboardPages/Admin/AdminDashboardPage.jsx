import React from "react";
import { useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminDashboardPage = () => {
    // To Controll Dashboard Toggle-Button
    // const location = useLocation();

    // Check if the current route is either '/login' or '/register', true=show || false=hidden
    // const shouldDshboardTogglerShow = ["/dashboard/admin"].includes(
    //     location.pathname
    // );
    return (
        <>
            <div>Admin Dashboard Page </div>
            {/* Dashboard Toggler Button */}

            <label
                htmlFor="Dashboard_Drawer"
                className="btn btn-primary btn-sm drawer-button lg:hidden ml-1"
            >
                <RxHamburgerMenu></RxHamburgerMenu>
            </label>
        </>
    );
};

export default AdminDashboardPage;
