import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../utils/fetchHandlers";
import {
    departments,
    semesters,
} from "../../../../../../utils/AddMarkFieldsData";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
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
