import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import CommonStepOne from "./Components/CommonStepOne";
import InternalStepTwo from "./Components/InternalStepTwo";

const resultContext = createContext();

const InternalMarkPage = () => {
    const [step, setStep] = useState(1);
    const [stepOneValue, setStepOneValue] = useState({});

    return (
        <resultContext.Provider
            value={{ step, setStep, stepOneValue, setStepOneValue }}
        >
            <Wrapper>
                {step === 1 && <CommonStepOne name="internal" />}
                {step === 2 && <InternalStepTwo />}
            </Wrapper>
        </resultContext.Provider>
    );
};

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .search-title {
        font-size: calc(0.75rem + 0.5vw);
        font-weight: 700;
        text-transform: capitalize;
        color: var(--primary-clr);
        margin-bottom: 9px;
        text-align: center;
    }
    .search-form {
        margin: 0 auto;
        width: 100%;
        /* max-width: 900px; */
        padding: 2rem 1.5rem;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    .input-groups {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(auto, 250px));
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;

export const useResultContext = () => useContext(resultContext);
export default InternalMarkPage;
