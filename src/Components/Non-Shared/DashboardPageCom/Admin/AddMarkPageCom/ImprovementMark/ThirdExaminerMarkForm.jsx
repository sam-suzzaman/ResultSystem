import React from "react";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "./ThirdExaminerForm/FormStepTwo";
import Wrapper from "../../../../../../assets/wrappers/Admin/ImprovementThirdExaminerFromWrapper";

const ThirdExaminerMarkForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <div>
            {stepValue === 1 && (
                <FormStepOne name="third examiner (Improvement)" />
            )}
            {stepValue === 2 && (
                <Wrapper>
                    <FormStepTwo />
                </Wrapper>
            )}
        </div>
    );
};

export default ThirdExaminerMarkForm;
