import React from "react";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import FormStepTwo from "./SingleOrUpdateForm/FormStepTwo";
import Wrapper from "../../../../../../assets/wrappers/Admin/ExternalMarkFormWrapper";

const SingleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <div className="">
            {stepValue === 1 && <FormStepOne name="semester final mark" />}
            {stepValue === 2 && (
                <Wrapper>
                    <FormStepTwo />
                </Wrapper>
            )}
        </div>
    );
};

export default SingleStudentForm;
