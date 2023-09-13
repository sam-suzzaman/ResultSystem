import React from "react";
import StepOne from "./ThirdExaminerMarkFormStep/StepOne";
import StepTwo from "./ThirdExaminerMarkFormStep/StepTwo";
import { useExternalThirdExaminerContext } from "../../../../../../context/Admin/ExternalThridExaminerMarkContext";
import Wrapper from "../../../../../../assets/wrappers/Admin/ExternalThirdExaminerFormWrapper";

const ThirdExaminerMarkForm = () => {
    const { stepValue } = useExternalThirdExaminerContext();
    return (
        <Wrapper>
            <div>
                {stepValue === 1 && <StepOne />}
                {stepValue === 2 && <StepTwo />}
            </div>
        </Wrapper>
    );
};

export default ThirdExaminerMarkForm;
