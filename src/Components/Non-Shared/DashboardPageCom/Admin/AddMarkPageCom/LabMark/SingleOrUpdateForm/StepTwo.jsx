import React, { useEffect, useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../../utils/fetchHandlers";
import Swal from "sweetalert2";
import styled from "styled-components";

const StepTwo = () => {
    const [total, setTotal, setOneValue] = useState(0);
    const [internalResult, setInternalResult] = useState({});
    const [isRollSelect, setIsRollSelect] = useState(false);

    const {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepTwoValue,
        selectedCourse,
    } = useMarkFormStepContext();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        setValue,
    } = useForm();

    const rollWatch = watch(`roll`);
    const attendanceWatch = watch(`attendance`);
    const labReportWatch = watch(`labReport`);
    const continuousAssesmentWatch = watch(`continuousAssesment`);
    const finalExaminationWatch = watch(`finalExamination`);

    const addOrUpdateSingleLabMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            // toast.success("Mark Updated");
            Swal.fire({
                title: "Done!",
                text: "Mark Updated Successfully",
                icon: "success",
                confirmButtonText: "Close",
            });
            reset();
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            // toast.warn("Something Wrong");
            Swal.fire({
                title: "Oops!",
                text: "Mark Updated Failed",
                icon: "error",
                confirmButtonText: "Close",
            });
        },
    });

    const backButtonHandler = () => {
        setStepValue(1);
    };

    // calculate internal total value
    useEffect(() => {
        if (
            attendanceWatch &&
            labReportWatch &&
            continuousAssesmentWatch &&
            finalExaminationWatch
        ) {
            let attendance = Number(attendanceWatch);
            let labReport = Number(labReportWatch);
            let continuousAssessment = Number(continuousAssesmentWatch);
            let final = Number(finalExaminationWatch);
            const temp = attendance + labReport + continuousAssessment + final;
            setTotal(temp);
            return;
        } else {
            setTotal("...");
            return;
        }
    }, [
        attendanceWatch,
        labReportWatch,
        continuousAssesmentWatch,
        finalExaminationWatch,
    ]);

    // Todo:(update url) Fetch Student data if exists
    useEffect(() => {
        if (rollWatch && rollWatch !== "" && rollWatch.length == 8) {
            setIsRollSelect(true);
            const url = `https://student-management-delta.vercel.app/mark/${stepOneValue?.department}/${stepOneValue?.semester}/${selectedCourse?.courseName}/${selectedCourse.courseCode}/${rollWatch}`;
            getAllHandler(url)
                .then((res) => setInternalResult(res))
                .catch((err) => console.log(err));
        } else {
            setIsRollSelect(false);
            setInternalResult({});
        }
    }, [rollWatch]);

    // Set Student Data in the state
    useEffect(() => {
        if (internalResult?.attendance) {
            setValue("attendance", internalResult?.attendance);
        } else {
            setValue("attendance", "");
        }
        if (internalResult?.labReport) {
            setValue("labReport", internalResult?.labReport);
        } else {
            setValue("labReport", "");
        }
        if (internalResult?.continuousAssesment) {
            setValue(
                "continuousAssesment",
                internalResult?.continuousAssesment
            );
        } else {
            setValue("continuousAssesment", "");
        }
        if (internalResult?.finalExamination) {
            setValue("finalExamination", internalResult?.finalExamination);
        } else {
            setValue("finalExamination", "");
        }
    }, [internalResult]);

    const onSubmit = (data) => {
        const result = {
            department: stepOneValue.department,
            semester: stepOneValue.semester,
            roll: data.roll,
            attendance: data.attendance,
            labReport: data.labReport,
            continuousAssesment: data.continuousAssesment,
            finalExamination: data.finalExamination,
            courseCode: selectedCourse.courseCode,
            courseName: selectedCourse.courseName,
            currentSession: stepOneValue.session,
        };

        addOrUpdateSingleLabMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/lab/single",
        });
    };

    return (
        <Wrapper>
            <div className="mb-6 ">
                <h3 className="capitalize text-center text-sm font-normal f-roboto">
                    Jaitya kabi kazi nazrul islam university
                </h3>
                <h3 className=" text-center text-sm font-normal f-roboto">
                    {/* Department of {stepOneValue?.department} */}
                    Department of Electrical and Electronic Engineering
                </h3>
                <div className="flex justify-center items-center gap-x-1">
                    <h3 className=" text-center text-sm font-normal f-roboto">
                        Course Code: {selectedCourse?.courseCode},
                    </h3>
                    <h3 className=" text-center text-sm font-normal f-roboto">
                        Course Title: {selectedCourse?.courseName}
                    </h3>
                </div>
                <div className="flex justify-center items-center gap-x-1">
                    <h3 className=" text-center text-sm font-normal f-roboto">
                        Internal Marks,
                    </h3>
                    <h3 className=" text-center text-sm font-normal f-roboto">
                        Session: {stepOneValue?.session}
                    </h3>
                </div>
            </div>
            <form
                className="w-full  mark_input_form_wrapper"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="mark_input_form_container">
                    <div className="mark">
                        <h3 className="number">Student Roll</h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">Attendance(10%)</h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">lab report(10%)</h3>
                    </div>
                    <div className="mark">
                        <h3>
                            <span className="number">continuous</span> <br />
                            <span className="number">assessment(20%)</span>
                        </h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">
                            Final Exam
                            <br /> Mark(60%)
                        </h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">Total</h3>
                    </div>

                    <React.Fragment>
                        {/* Roll */}
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="roll-field number"
                                {...register(`roll`)}
                            />
                        </div>

                        {/* Attendance */}
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="number"
                                {...register(`attendance`, {
                                    required: {
                                        value: true,
                                        message: "Mark required",
                                    },
                                    min: {
                                        value: 0,
                                        message: "be at least (0)",
                                    },
                                    max: {
                                        value: 10,
                                        message: "Max (10) marks",
                                    },
                                })}
                                disabled={!isRollSelect}
                            />
                            {errors?.attendance && (
                                <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                    {errors?.attendance?.message}
                                </span>
                            )}
                        </div>

                        {/* Lab Report */}
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="number"
                                {...register(`labReport`, {
                                    required: {
                                        value: true,
                                        message: "Mark required",
                                    },
                                    min: {
                                        value: 0,
                                        message: "Be at least (0)",
                                    },
                                    max: {
                                        value: 10,
                                        message: "Max (10) marks",
                                    },
                                })}
                                disabled={!isRollSelect}
                            />
                            {errors?.labReport && (
                                <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                    {errors?.labReport?.message}
                                </span>
                            )}
                        </div>

                        {/* Assessment */}
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="number"
                                {...register(`continuousAssesment`, {
                                    required: {
                                        value: true,
                                        message: "Mark required",
                                    },
                                    min: {
                                        value: 0,
                                        message: "Be at least (0)",
                                    },
                                    max: {
                                        value: 20,
                                        message: "Max (20) marks",
                                    },
                                })}
                                disabled={!isRollSelect}
                            />
                            {errors?.continuousAssesment && (
                                <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                    {errors?.continuousAssesment?.message}
                                </span>
                            )}
                        </div>

                        {/* Final Mark */}
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="number"
                                {...register(`finalExamination`, {
                                    required: {
                                        value: true,
                                        message: "Mark required",
                                    },
                                    min: {
                                        value: 0,
                                        message: "Be at least (0)",
                                    },
                                    max: {
                                        value: 60,
                                        message: "Max (60) marks",
                                    },
                                })}
                                disabled={!isRollSelect}
                            />
                            {errors?.finalExamination && (
                                <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                    {errors?.finalExamination?.message}
                                </span>
                            )}
                        </div>

                        <span className="text-center text-xs font-medium number">
                            {total}
                        </span>
                    </React.Fragment>
                </div>
                <div className="flex justify-center mt-8 gap-x-2">
                    <button
                        className="btn btn-sm rounded-sm font-normal text-sm back_btn px-5"
                        onClick={backButtonHandler}
                    >
                        back
                    </button>
                    <button
                        className="btn btn-sm rounded-sm font-normal text-sm submit_btn px-5"
                        type="submit"
                    >
                        submit
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .mark_input_form_wrapper {
        width: 100%;
        max-height: 40vh;
        overflow-y: auto;
        padding: 10px;
        padding-top: 0;
        scrollbar-width: auto; /* width of the scrollbar */
        scrollbar-color: #888 #f2f2f2; /* thumb color and track color */
    }
    /* Customize scrollbar for Chrome, Safari, and newer versions of Edge */
    .mark_input_form_wrapper::-webkit-scrollbar {
        width: 5px; /* width of the vertical scrollbar */
    }

    .mark_input_form_wrapper::-webkit-scrollbar-thumb {
        background-color: #888; /* color of the thumb */
        border-radius: 5px; /* rounded corners for the thumb */
    }

    .mark_input_form_wrapper::-webkit-scrollbar-track {
        background-color: #f2f2f2; /* color of the track */
    }

    .mark_input_form_container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        justify-content: space-between;
        align-items: center;
        grid-row-gap: 13px;
        grid-column-gap: 2px;
    }
    .mark_input_form_container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        overflow: -moz-scrollbars-none; /* Firefox */
    }
    .mark_input_form_container::-webkit-scrollbar {
        display: none;
    }

    /* Target the first row */
    .mark_input_form_container > *:nth-child(-n + 6) {
        background-color: rgb(235, 235, 235);
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        padding: 4px 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mark_input_form_container .mark h3 {
        color: #363636;
        font-size: 13px;
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
    }

    .mark_input_form_container input {
        width: 100%;
        max-width: 50px;
        height: 22px;
        box-shadow: 0px 0px 0px 0.2px;
        border: none;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        border-radius: 1.5px;
        outline: none;
        margin: 0 auto;
        padding: 4px 4px;
    }
    .mark_input_form_container input.roll-field,
    input.total-field {
        min-width: fit-content;
        font-size: 11px;
        border: none;
        outline: none;
    }
    .mark_input_form_container input:focus {
        border: 1px solid #9e9e9e;
        outline: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default StepTwo;
