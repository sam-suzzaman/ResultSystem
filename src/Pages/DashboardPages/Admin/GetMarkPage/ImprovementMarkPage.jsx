import React from "react";

import styled from "styled-components";
import { useResultStepContext } from "../../../../context/Admin/ResultStepContext";

import CommonStepOne from "../../../../Components/Non-Shared/DashboardPageCom/Admin/ResultPageCom/CommonStepOne";
import StepTwo from "../../../../Components/Non-Shared/DashboardPageCom/Admin/ResultPageCom/Improvement/StepTwo";

const ImprovementMarkPage = () => {
    const { step, setStep } = useResultStepContext();

    return (
        <Wrapper>
            {step === 1 && <CommonStepOne name="improvement" />}
            {step === 2 && <StepTwo />}
        </Wrapper>
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
export default ImprovementMarkPage;
