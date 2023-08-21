import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllHandler } from "../../utils/fetchHandlers";

const sessionPageContext = React.createContext();

const SessionPageProvider = ({ children }) => {
    const [sessionList, setSessionList] = useState([]);

    return (
        <sessionPageContext.Provider value={{}}>
            {children}
        </sessionPageContext.Provider>
    );
};

export { sessionPageContext, SessionPageProvider };
