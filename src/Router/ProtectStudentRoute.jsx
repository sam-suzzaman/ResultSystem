import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../context/Admin/UserContext";
import LoadingCom from "../Components/Shared/LoadingCom/LoadingCom";

const ProtectStudentRoute = ({ children }) => {
    const location = useLocation();
    const { user, userLoading } = useUserContext();
    console.log(user);
    if (userLoading) {
        return <LoadingCom />;
    }
    if (user?.role === "student") {
        return children;
    } else if (user?.role) {
        return <Navigate to="/" />;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectStudentRoute;
