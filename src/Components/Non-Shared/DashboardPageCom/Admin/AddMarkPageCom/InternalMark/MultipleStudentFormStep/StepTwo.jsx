import React from "react";
import { useForm } from "react-hook-form";
import LoadingCom from "../../../../../../Shared/LoadingCom/LoadingCom";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../../utils/fetchHandlers";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import styled from "styled-components";

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

    const addMultipleInternalMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            // toast.success("Mark Submitted");
            // setStudentData([]);
            setStepValue(3);
            reset();
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            toast.warn("Something Wrong");
        },
    });

    const backButtonHandler = () => {
        setStepValue(1);
    };

    const getTotal = (attendance, midOne, midTwo, presentationOrAssignment) => {
        if (attendance && midOne && midTwo && presentationOrAssignment) {
            attendance = Number(attendance);
            midOne = Number(midOne);
            midTwo = Number(midTwo);
            presentationOrAssignment = Number(presentationOrAssignment);
            return attendance + midOne + midTwo + presentationOrAssignment;
        } else {
            return "";
        }
    };

    const onSubmit = (data) => {
        const { resultList } = data;
        setStepTwoValue(resultList);
        const mergedResult = resultList.map((res) => {
            return {
                ...res,
                department: stepOneValue.department,
                semester: stepOneValue.semester,
                courseId: stepOneValue.course,
                courseCode: selectedCourse.courseCode,
                courseName: selectedCourse.courseName,
                currentSession: stepOneValue.session,
            };
        });
        const result = { marks: mergedResult };
        addMultipleInternalMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/internal/multiple",
        });
    };

    if (isLoading) {
        return <LoadingCom />;
    }

    if (isError) {
        return <h2 className="font-bold text-lg">{error?.message}</h2>;
    }

    return (
        <>
            <Wrapper>
                <div className="mb-6 form-header">
                    <h3 className="capitalize text-center text-sm font-normal number">
                        Jaitya kabi kazi nazrul islam university
                    </h3>
                    <h3 className=" text-center text-sm font-normal number">
                        Department of {stepOneValue?.department}
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
                            Internal Marks,
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
                            <h3>Student Roll</h3>
                        </div>
                        <div className="mark">
                            <h3>Attendance</h3>
                        </div>
                        <div className="mark">
                            <h3>Midterm-1</h3>
                        </div>
                        <div className="mark">
                            <h3>Midterm-2</h3>
                        </div>
                        <div className="mark">
                            <h3>
                                assignment/ <br />
                                presentation
                            </h3>
                        </div>
                        <div className="mark">
                            <h3>Total</h3>
                        </div>

                        {students?.map((student, index) => {
                            const attendanceWatch = watch(
                                `resultList.${index}.attendance`
                            );
                            const midOneWatch = watch(
                                `resultList.${index}.midOne`
                            );
                            const midTwoWatch = watch(
                                `resultList.${index}.midTwo`
                            );
                            const presentationOrAssignmentWatch = watch(
                                `resultList.${index}.presentationOrAssignment`
                            );

                            let totalValue = getTotal(
                                attendanceWatch,
                                midOneWatch,
                                midTwoWatch,
                                presentationOrAssignmentWatch
                            );

                            return (
                                <React.Fragment key={index + student.roll}>
                                    <input
                                        type="text"
                                        className="roll-field number"
                                        {...register(
                                            `resultList.${index}.roll`
                                        )}
                                        defaultValue={student.roll}
                                        readOnly
                                    />
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
                                                        message:
                                                            "Mark required",
                                                    },
                                                    min: {
                                                        value: 0,
                                                        message:
                                                            "be at least (0)",
                                                    },
                                                    max: {
                                                        value: 10,
                                                        message:
                                                            "Max (10) marks",
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

                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            className="number"
                                            {...register(
                                                `resultList.${index}.midOne`,
                                                {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Mark required",
                                                    },
                                                    min: {
                                                        value: 0,
                                                        message:
                                                            "Be at least (0)",
                                                    },
                                                    max: {
                                                        value: 10,
                                                        message:
                                                            "Max (10) marks",
                                                    },
                                                }
                                            )}
                                        />

                                        {errors?.resultList?.[index]
                                            ?.midOne && (
                                            <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                                {
                                                    errors?.resultList?.[index]
                                                        ?.midOne?.message
                                                }
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            className="number"
                                            placeholder=""
                                            {...register(
                                                `resultList.${index}.midTwo`,
                                                {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Mark required",
                                                    },
                                                    min: {
                                                        value: 0,
                                                        message:
                                                            "Be at least (0)",
                                                    },
                                                    max: {
                                                        value: 10,
                                                        message:
                                                            "Max (10) marks",
                                                    },
                                                }
                                            )}
                                        />
                                        {errors?.resultList?.[index]
                                            ?.midTwo && (
                                            <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                                {
                                                    errors?.resultList?.[index]
                                                        ?.midTwo?.message
                                                }
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            className="number"
                                            placeholder=""
                                            {...register(
                                                `resultList.${index}.presentationOrAssignment`,
                                                {
                                                    required: {
                                                        value: true,
                                                        message:
                                                            "Mark required",
                                                    },
                                                    min: {
                                                        value: 0,
                                                        message:
                                                            "Be at least (0)",
                                                    },
                                                    max: {
                                                        value: 10,
                                                        message:
                                                            "Max (10) marks",
                                                    },
                                                }
                                            )}
                                        />
                                        {errors?.resultList?.[index]
                                            ?.presentationOrAssignment && (
                                            <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                                {
                                                    errors?.resultList?.[index]
                                                        ?.presentationOrAssignment
                                                        ?.message
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
        </>
    );
};

const Wrapper = styled.section`
    .form-header {
        font-family: var(--roboto);
    }
`;

export default StepTwo;
