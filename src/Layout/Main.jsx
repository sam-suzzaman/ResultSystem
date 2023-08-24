import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import ToastComponent from "../Components/Shared/ToastComponent/ToastComponent";

const Main = () => {
    const location = useLocation();

    // Check if the current route is either '/login'
    const shouldShowNavbarAndFooter = !["/login"].includes(location.pathname);
    return (
        <>
            <div className="main_wrapper">
                {shouldShowNavbarAndFooter && <Navbar />}
                <div className="content_wrapper">
                    <Outlet />
                </div>
                {shouldShowNavbarAndFooter && <Footer />}
            </div>
            <ToastComponent />
        </>
    );
};

export default Main;
