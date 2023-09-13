import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const externalThirdMarkContext = createContext();
const ExternalThirdExamierMarkContextProvider = ({ children }) => {
    const [stepValue, setStepValue] = useState(1);
    const [stepOneValue, setStepOneValue] = useState({});
    const [stepTwoValue, setStepTwovalue] = useState([]);
    const [internalMark, setInternalMark] = useState({});
    const [selectedCourse, setSelectedCourse] = useState({});

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
        selectedCourse,
        setSelectedCourse,
    };
    return (
        <externalThirdMarkContext.Provider value={values}>
            {children}
        </externalThirdMarkContext.Provider>
    );
};

const useExternalThirdExaminerContext = () =>
    useContext(externalThirdMarkContext);

export {
    ExternalThirdExamierMarkContextProvider,
    useExternalThirdExaminerContext,
};
