import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../context/Admin/UserContext";
import LoadingCom from "../Components/Shared/LoadingCom/LoadingCom";

const ProtectLoginRoute = ({ children }) => {
    const location = useLocation();
    const { user, userLoading } = useUserContext();

    let from = location.state?.from?.pathname || "/"; // to navigate right location after login

    if (userLoading) {
        return <LoadingCom />;
    }
    
    if (user?.role) {
        return <Navigate to={from} state={{ from: location }} replace />;
    }

    // If the user is not logged in, allow them to access the login route
    return children;
};

export default ProtectLoginRoute;
