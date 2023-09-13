import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const externalMarkContext = createContext();
const ExternalMarkContextProvider = ({ children }) => {
    const [stepValue, setStepValue] = useState(1);
    const [stepOneValue, setStepOneValue] = useState({});
    const [stepTwoValue, setStepTwovalue] = useState([]);
    const [externalMark, setExternalMark] = useState({});
    const [selectedCourse, setSelectedCourse] = useState({});

    // Passing Values
    const values = {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepOneValue,
        stepTwoValue,
        setStepTwovalue,
        externalMark,
        setExternalMark,
        selectedCourse,
        setSelectedCourse,
    };
    return (
        <externalMarkContext.Provider value={values}>
            {children}
        </externalMarkContext.Provider>
    );
};

const useExternalContext = () => useContext(externalMarkContext);

export { ExternalMarkContextProvider, useExternalContext };
