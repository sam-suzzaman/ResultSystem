import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import ToastComponent from "../Components/Shared/ToastComponent/ToastComponent";

const Main = () => {
    const location = useLocation();

    // Check if the current route is either '/login'
    const shouldShowNavbarAndFooter = !["/login"].includes(location.pathname);
    return (
        <div>
            {shouldShowNavbarAndFooter && <Navbar />}
            <Outlet />
            {shouldShowNavbarAndFooter && <Footer />}
            <ToastComponent />
        </div>
    );
};

export default Main;
