import React from "react";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "./Multiple/FormStepTwo";
import Wrapper from "../../../../../../assets/wrappers/Admin/ImprovementMultipleFormWrapper";

const MultipleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();
    return (
        <div>
            {stepValue === 1 && (
                <FormStepOne name="Multiple Improvement Marks" />
            )}
            {stepValue === 2 && (
                <Wrapper>
                    <FormStepTwo />
                </Wrapper>
            )}
        </div>
    );
};

export default MultipleStudentForm;
