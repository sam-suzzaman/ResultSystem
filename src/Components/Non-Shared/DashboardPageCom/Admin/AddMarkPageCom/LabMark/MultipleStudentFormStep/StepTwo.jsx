import React from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";
import LoadingCom from "../../../../../../Shared/LoadingCom/LoadingCom";
import styled from "styled-components";
import Swal from "sweetalert2";

const StepTwo = () => {
    const { setStepValue, stepOneValue, setStepTwoValue, selectedCourse } =
        useMarkFormStepContext();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const {
        isLoading,
        isError,
        data: students,
        error,
    } = useQuery("students", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/user/${stepOneValue.department}/${stepOneValue.session}`
        )
    );

    const addLabMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            setStepValue(3);
            reset();
        },
        onError: (error, variables, context) => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.message,
            });
        },
    });

    // calculate total values
    const getTotal = (attendance, labReport, assessment, finalExamination) => {
        if (attendance && labReport && assessment && finalExamination) {
            attendance = Number(attendance);
            labReport = Number(labReport);
            assessment = Number(assessment);
            finalExamination = Number(finalExamination);
            return attendance + labReport + assessment + finalExamination;
        } else {
            return "";
        }
    };

    const onSubmit = (data) => {
        const { resultList } = data;
        const mergedResult = resultList?.map((res) => {
            return {
                ...res,
                department: stepOneValue.department,
                semester: stepOneValue.semester,
                courseCode: selectedCourse.courseCode,
                courseName: selectedCourse.courseName,
                currentSession: stepOneValue.session,
            };
        });
        const result = { marks: mergedResult };

        addLabMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/lab/multiple",
        });
    };

    const backButtonHandler = () => {
        setStepValue(1);
    };

    if (isLoading) {
        return <LoadingCom />;
    }

    if (isError) {
        return <h2 className="font-bold text-lg">{error?.message}</h2>;
    }

    return (
        <Wrapper>
            <div className="mb-6 form-header">
                <h3 className="capitalize text-center text-sm font-normal number">
                    Nexus Institute of Sciences and Engineering
                </h3>
                <h3 className=" text-center text-sm font-normal number">
                    Department of Electrical and Electronic Engineering
                </h3>
                <div className="flex justify-center items-center gap-x-1 number">
                    <h3 className=" text-center text-sm font-normal number">
                        Course Code: {selectedCourse?.courseCode},
                    </h3>
                    <h3 className=" text-center text-sm font-normal number">
                        Course Title: {selectedCourse?.courseName}
                    </h3>
                </div>
                <div className="flex justify-center items-center gap-x-1 number">
                    <h3 className=" text-center text-sm font-normal number">
                        Lab Marks,
                    </h3>
                    <h3 className=" text-center text-sm font-normal number">
                        Session: {stepOneValue?.session}
                    </h3>
                </div>
            </div>

            <form
                className="w-full  mark_input_form_wrapper "
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="mark_input_form_container">
                    <div className="mark">
                        <h3 className="number">Student Roll</h3>
                    </div>
                    <div className="mark">
                        <h3 className="number font-light">Attendance(10%)</h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">Lab Report(10%)</h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">
                            <span className="number">continuous</span> <br />
                            <span className="number">assessment(20%)</span>
                        </h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">
                            Final Exam/ <br />
                            Mark(60%)
                        </h3>
                    </div>
                    <div className="mark">
                        <h3 className="number">Total</h3>
                    </div>

                    {students?.map((student, index) => {
                        const attendanceWatch = watch(
                            `resultList.${index}.attendance`
                        );
                        const labReportWatch = watch(
                            `resultList.${index}.labReport`
                        );
                        const assessmentWatch = watch(
                            `resultList.${index}.continuousAssesment`
                        );
                        const finalExamMark = watch(
                            `resultList.${index}.finalExamination`
                        );

                        let totalValue = getTotal(
                            attendanceWatch,
                            labReportWatch,
                            assessmentWatch,
                            finalExamMark
                        );

                        return (
                            <React.Fragment key={index + student.roll}>
                                <input
                                    type="text"
                                    className="roll-field number"
                                    {...register(`resultList.${index}.roll`)}
                                    defaultValue={student.roll}
                                    readOnly
                                />
                                {/* Attendance */}
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        className="number"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.attendance`,
                                            {
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
                                            }
                                        )}
                                    />
                                    {errors?.resultList?.[index]
                                        ?.attendance && (
                                        <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                            {
                                                errors?.resultList[index]
                                                    ?.attendance?.message
                                            }
                                        </span>
                                    )}
                                </div>

                                {/* Lab Report */}
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        className="number"
                                        {...register(
                                            `resultList.${index}.labReport`,
                                            {
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
                                            }
                                        )}
                                    />

                                    {errors?.resultList?.[index]?.labReport && (
                                        <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                            {
                                                errors?.resultList?.[index]
                                                    ?.labReport?.message
                                            }
                                        </span>
                                    )}
                                </div>

                                {/* Continuous Assessment */}
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        className="number"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.continuousAssesment`,
                                            {
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
                                            }
                                        )}
                                    />
                                    {errors?.resultList?.[index]
                                        ?.continuousAssesment && (
                                        <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                            {
                                                errors?.resultList?.[index]
                                                    ?.continuousAssesment
                                                    ?.message
                                            }
                                        </span>
                                    )}
                                </div>

                                {/* Final Exam Mark */}
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        className="number"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.finalExamination`,
                                            {
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
                                            }
                                        )}
                                    />
                                    {errors?.resultList?.[index]
                                        ?.finalExamination && (
                                        <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                            {
                                                errors?.resultList?.[index]
                                                    ?.finalExamination?.message
                                            }
                                        </span>
                                    )}
                                </div>

                                <span className="text-center text-xs font-medium number">
                                    {totalValue}
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-10 gap-x-4">
                    <button
                        className="btn btn-sm px-6  rounded-sm font-normal text-sm back_btn"
                        onClick={backButtonHandler}
                    >
                        back
                    </button>
                    <button
                        className="btn btn-sm  px-6 rounded-sm font-normal text-sm submit_btn"
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
        /* background-color: gray; */
        width: 100%;
        max-height: 70vh;
        /* height: 100%; */
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
