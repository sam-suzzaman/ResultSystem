import React, { useEffect, useState } from "react";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "./AddMarkForm/FormStepTwo";
import Wrapper from "../../../../../../assets/wrappers/Admin/ImprovementFormWrapper";

const SingleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <div>
            {stepValue === 1 && <FormStepOne name="improvement" />}
            {stepValue === 2 && (
                <Wrapper>
                    <FormStepTwo />
                </Wrapper>
            )}
        </div>
    );
};

export default SingleStudentForm;
