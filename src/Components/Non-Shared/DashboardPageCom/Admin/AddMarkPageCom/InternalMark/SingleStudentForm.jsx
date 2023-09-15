import React from "react";
import FormStepOne from "../FormStepOne";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepTwo from "./SingleOrUpdateForm/FormStepTwo";
import Wrapper from "../../../../../../assets/wrappers/Admin/InternalMarkFormWrapper";

const SingleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <div>
            {stepValue === 1 && <FormStepOne name="internal" />}
            {stepValue === 2 && (
                <Wrapper>
                    <FormStepTwo />
                </Wrapper>
            )}
        </div>
    );
};

export default SingleStudentForm;
