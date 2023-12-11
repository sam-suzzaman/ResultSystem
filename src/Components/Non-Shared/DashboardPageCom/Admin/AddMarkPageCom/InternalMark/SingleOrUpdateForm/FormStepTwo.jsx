import React, { useEffect, useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";

const FormStepTwo = () => {
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
    const midOneWatch = watch(`midOne`);
    const midTwoWatch = watch(`midTwo`);
    const presentationOrAssignmentWatch = watch(`presentationOrAssignment`);

    const addSingleInternalMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            toast.success("Mark Updated");
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

    // calculate total value
    useEffect(() => {
        if (
            attendanceWatch &&
            midOneWatch &&
            midTwoWatch &&
            presentationOrAssignmentWatch
        ) {
            let attendance = Number(attendanceWatch);
            let mid1 = Number(midOneWatch);
            let mid2 = Number(midTwoWatch);
            let assignment = Number(presentationOrAssignmentWatch);
            const temp = attendance + mid1 + mid2 + assignment;
            setTotal(temp);
            return;
        } else {
            setTotal("...");
            return;
        }
    }, [
        attendanceWatch,
        midOneWatch,
        midTwoWatch,
        presentationOrAssignmentWatch,
    ]);

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

    useEffect(() => {
        if (internalResult?.attendance) {
            setValue("attendance", internalResult?.attendance);
        } else {
            setValue("attendance", "");
        }
        if (internalResult?.midOne) {
            setValue("midOne", internalResult?.midOne);
        } else {
            setValue("midOne", "");
        }
        if (internalResult?.midTwo) {
            setValue("midTwo", internalResult?.midTwo);
        } else {
            setValue("midTwo", "");
        }
        if (internalResult?.presentationOrAssignment) {
            setValue(
                "presentationOrAssignment",
                internalResult?.presentationOrAssignment
            );
        } else {
            setValue("presentationOrAssignment", "");
        }
    }, [internalResult]);

    const onSubmit = (data) => {
        const result = {
            department: stepOneValue.department,
            semester: stepOneValue.semester,
            roll: data.roll,
            courseId: stepOneValue.course,
            attendance: data.attendance,
            midOne: data.midOne,
            midTwo: data.midTwo,
            presentationOrAssignment: data.presentationOrAssignment,
            courseCode: selectedCourse.courseCode,
            courseName: selectedCourse.courseName,
            currentSession: stepOneValue.session,
        };

        addSingleInternalMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/internal/single",
        });
    };

    return (
        <>
            <div className="mb-6 ">
                <h3 className="capitalize text-center text-sm font-normal f-roboto">
                    Jaitya kabi kazi nazrul islam university
                </h3>
                <h3 className=" text-center text-sm font-normal f-roboto">
                    Department of {stepOneValue?.department}
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
                            assignment/
                            <br /> presentation
                        </h3>
                    </div>
                    <div className="mark">
                        <h3>Total</h3>
                    </div>

                    <React.Fragment>
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="roll-field number"
                                {...register(`roll`)}
                            />
                        </div>
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
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="number"
                                {...register(`midOne`, {
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
                            {errors?.midOne && (
                                <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                    {errors?.midOne?.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="number"
                                {...register(`midTwo`, {
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
                            {errors?.midTwo && (
                                <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                    {errors?.midTwo?.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <input
                                type="text"
                                className="number"
                                {...register(`presentationOrAssignment`, {
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
                            {errors?.presentationOrAssignment && (
                                <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                    {errors?.presentationOrAssignment?.message}
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
        </>
    );
};

export default FormStepTwo;
