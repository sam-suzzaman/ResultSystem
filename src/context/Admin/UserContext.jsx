import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const userContext = React.createContext();

const UserContextProviderWrapper = ({ children }) => {
    // user
    const [user, setUser] = useState({ username: "", role: "" });
    const [userLoading, setUserLoading] = useState(true);
    const [userError, setUserError] = useState(false);
    const [token, setToken] = useState(
        localStorage.getItem("access-token") || ""
    );

    const handleLoginToken = (tokenValue) => {
        setToken(tokenValue);

        // // Clear the previous timeout, if any
        // if (tokenTimeOut) {
        //     clearTimeout(tokenTimeOut);
        // }

        // // Set a new timer to remove the token after expirationTime milliseconds
        // let tokenTimeOut = setTimeout(function () {
        //     localStorage.removeItem("access-token");
        // }, 3600000); //1hour
    };

    const getMeHandler = async () => {
        setUserLoading(true);
        try {
            if (token) {
                const config = {
                    headers: { token: `Bearer ${token}` },
                };
                const response = await axios.get(
                    "https://student-management-delta.vercel.app/user-info",
                    config
                );

                setUser(response?.data?.result);
                setUserLoading(false);
                setUserError(false);

                return;
            } else {
                setUser({ status: false });
                setUserLoading(false);
                return;
            }
        } catch (error) {
            const temp = { status: false };
            setUserLoading(false);
            setUserError(temp);
        }
    };

    useEffect(() => {
        getMeHandler();
    }, [token]);

    // user Logout
    const userLogout = () => {
        localStorage.setItem("access-token", "");
        handleLoginToken("");
    };

    return (
        <userContext.Provider
            value={{
                user,
                userLoading,
                setUserLoading,
                setToken,
                userError,
                userLogout,
                handleLoginToken,
            }}
        >
            {children}
        </userContext.Provider>
    );
};

const useUserContext = () => useContext(userContext);

export { useUserContext, UserContextProviderWrapper };
