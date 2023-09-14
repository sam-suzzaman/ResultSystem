import React from "react";
import Wrapper from "../../../../../../assets/wrappers/Admin/InternalMarkFormWrapper";
import StepTwo from "./MultipleStudentFormStep/StepTwo";
import FormStepOne from "../FormStepOne";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";

const MultipleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <>
            {stepValue === 1 && <FormStepOne name="internal" />}
            <Wrapper>{stepValue === 2 && <StepTwo />}</Wrapper>
        </>
    );
};

export default MultipleStudentForm;
