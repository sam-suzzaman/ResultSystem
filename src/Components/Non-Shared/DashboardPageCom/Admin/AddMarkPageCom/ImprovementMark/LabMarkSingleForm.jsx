import React, { useEffect, useState } from "react";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import Wrapper from "../../../../../../assets/wrappers/Admin/ImprovementFormWrapper";
import StepTwo from "./LabImprove/StepTwo";

const SingleLabMarkForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <div>
            {stepValue === 1 && <FormStepOne name="improvement(lab)" />}
            {stepValue === 2 && (
                <Wrapper>
                    <StepTwo />
                </Wrapper>
            )}
        </div>
    );
};

export default SingleLabMarkForm;
