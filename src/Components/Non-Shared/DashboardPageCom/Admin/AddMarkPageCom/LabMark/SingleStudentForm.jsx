import React from "react";

import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import StepTwo from "./SingleOrUpdateForm/StepTwo";
import FormStepOne from "../FormStepOne";

const SingleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <div>
            {stepValue === 1 && <FormStepOne title="Update Mark" name="lab" />}
            {stepValue === 2 && <StepTwo />}
        </div>
    );
};

export default SingleStudentForm;
