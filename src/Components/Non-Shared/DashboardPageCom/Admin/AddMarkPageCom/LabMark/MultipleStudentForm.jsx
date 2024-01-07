import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../utils/fetchHandlers";
import {
    departments,
    semesters,
} from "../..../../../../../../../utils/AddMarkFieldsData";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import FormStepOne from "../FormStepOne";
import StepTwo from "./MultipleStudentFormStep/StepTwo";
import StepThree from "./MultipleStudentFormStep/StepThree";

const MultipleStudentForm = () => {
    const { stepValue } = useMarkFormStepContext();

    return (
        <>
            {stepValue === 1 && <FormStepOne name="Lab" />}
            {stepValue === 2 && <StepTwo />}
            {stepValue === 3 && <StepThree />}
        </>
    );
};

export default MultipleStudentForm;
