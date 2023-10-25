import { createContext, useContext, useState } from "react";

const markContext = createContext();

const GetMarkWrapper = ({ children }) => {
    const [step, setStep] = useState(1);
    const [stepOneValue, setStepOneValue] = useState({});

    const value = { step, setStep, stepOneValue, setStepOneValue };
    return (
        <markContext.Provider value={value}>{children}</markContext.Provider>
    );
};

const useGetMarkContext = () => useContext(markContext);

export { GetMarkWrapper, useGetMarkContext };
