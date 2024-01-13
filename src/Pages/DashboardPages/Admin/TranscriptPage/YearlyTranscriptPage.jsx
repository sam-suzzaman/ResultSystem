import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import StepOneForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/TranscriptPageCom/Semester/StepOneForm";
import { useMarkFormStepContext } from "../../../../context/Admin/MarkFormStepContext";
import StepTwo from "../../../../Components/Non-Shared/DashboardPageCom/Admin/TranscriptPageCom/Yearly/StepTwo";

const YearlyTranscriptPage = () => {
    const { stepValue } = useMarkFormStepContext();
    return (
        <Wrapper>
            {stepValue === 1 && (
                <StepOneForm formName="Year final" type="year_final" />
            )}
            {stepValue === 2 && <StepTwo />}
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

// export const useSemesterTranscriptContext = () => useContext(transcriptContext);

export default YearlyTranscriptPage;
