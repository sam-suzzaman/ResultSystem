import React from "react";
import Wrapper from "../../../../../../assets/wrappers/Admin/ExternalThirdExaminerFormWrapper";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "./ThirdExaminerMarkFormStep/FormStepTwo";

const ThirdExaminerMarkForm = () => {
    const { stepValue } = useMarkFormStepContext();
    return (
        <Wrapper>
            <div>
                {stepValue === 1 && <FormStepOne name="Third Examiner Mark" />}
                {stepValue === 2 && (
                    <Wrapper>
                        <FormStepTwo />
                    </Wrapper>
                )}
            </div>
        </Wrapper>
    );
};

export default ThirdExaminerMarkForm;
