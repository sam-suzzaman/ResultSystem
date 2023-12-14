import { createContext, useContext, useState } from "react";

const context = createContext();

const ResultStepContext = ({ children }) => {
    const [step, setStep] = useState(1);
    const [stepOneValue, setStepOneValue] = useState({});

    return (
        <context.Provider
            value={{ step, setStep, stepOneValue, setStepOneValue }}
        >
            {children}
        </context.Provider>
    );
};

export const useResultStepContext = () => useContext(context);
export default ResultStepContext;
