import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const internalMarkContext = createContext();
const InternalMarkContextProvider = ({ children }) => {
    const [stepValue, setStepValue] = useState(1);
    const [stepOneValue, setStepOneValue] = useState({});
    const [stepTwoValue, setStepTwovalue] = useState([]);
    const [internalMark, setInternalMark] = useState({});

    // Passing Values
    const values = {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepOneValue,
        stepTwoValue,
        setStepTwovalue,
        internalMark,
        setInternalMark,
    };
    return (
        <internalMarkContext.Provider value={values}>
            {children}
        </internalMarkContext.Provider>
    );
};

const useInternalContext = () => useContext(internalMarkContext);

export { InternalMarkContextProvider, useInternalContext };
