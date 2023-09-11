import React from "react";
import Wrapper from "../../../../../../assets/wrappers/Admin/InternalMarkFormWrapper";
import { useInternalContext } from "../../../../../../context/Admin/InternalMarkContext";
import StepOne from "./MultipleStudentFormStep/StepOne";
import StepTwo from "./MultipleStudentFormStep/StepTwo";

const MultipleStudentForm = () => {
    const { stepValue } = useInternalContext();

    return (
        <Wrapper>
            <div>
                {stepValue === 1 && <StepOne />}
                {stepValue === 2 && <StepTwo />}
            </div>
        </Wrapper>
    );
};

export default MultipleStudentForm;
