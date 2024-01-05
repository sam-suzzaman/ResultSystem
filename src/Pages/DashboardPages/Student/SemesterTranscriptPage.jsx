import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import StepOneForm from "../../../Components/Non-Shared/DashboardPageCom/Student/TranscriptPageCom/Semester/StepOneForm";
import StepTwoTranscript from "../../../Components/Non-Shared/DashboardPageCom/Student/TranscriptPageCom/Semester/StepTwoTranscript";

const transcriptContext = createContext();
const SemesterTranscriptPage = () => {
    const [step, setStep] = useState(1); //1
    const [stepOneValue, setStepOneValue] = useState({});

    return (
        <Wrapper>
            <transcriptContext.Provider
                value={{ step, setStep, stepOneValue, setStepOneValue }}
            >
                {step === 1 && <StepOneForm />}
                {step === 2 && <StepTwoTranscript />}
            </transcriptContext.Provider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .row-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 10px;
    }
`;

export const useSemesterTranscriptContext = () => useContext(transcriptContext);

export default SemesterTranscriptPage;
