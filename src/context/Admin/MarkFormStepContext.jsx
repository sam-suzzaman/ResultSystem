import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const markFormStep = createContext();

const MarkFormStepProvider = ({ children }) => {
    const [stepValue, setStepValue] = useState(1); // default=1
    const [stepOneValue, setStepOneValue] = useState({});
    const [stepTwoValue, setStepTwoValue] = useState([]);
    const [Marksheet, setMarksheet] = useState({});
    const [selectedCourse, setSelectedCourse] = useState({});

    // Passing Values
    const values = {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepOneValue,
        stepTwoValue,
        setStepTwoValue,
        Marksheet,
        setMarksheet,
        selectedCourse,
        setSelectedCourse,
    };
    return (
        <markFormStep.Provider value={values}>{children}</markFormStep.Provider>
    );
};

const useMarkFormStepContext = () => useContext(markFormStep);

export { MarkFormStepProvider, useMarkFormStepContext };
