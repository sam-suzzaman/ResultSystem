import React, { useEffect, useState } from "react";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { useMutation } from "react-query";
import Swal from "sweetalert2";

const FormStepTwo = () => {
    const { setStepValue, stepOneValue, setStepTwovalue, selectedCourse } =
        useMarkFormStepContext();
    const [difference, setDifference] = useState(0);
    const [internalResult, setInternalResult] = useState({});
    const [isRollSelected, setIsRollSelected] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        control,
        setValue,
        formState: { errors },
    } = useForm();

    const rollWatch = watch(`roll`);
    const firstExaminerWatch = watch(`firstExaminer`);
    const secondExaminerWatch = watch(`secondExaminer`);

    const backButtonHandler = () => {
        setStepValue(1);
    };

    // checking mark difference
    useEffect(() => {
        if (
            firstExaminerWatch === undefined ||
            secondExaminerWatch === undefined ||
            firstExaminerWatch === "" ||
            secondExaminerWatch === ""
        ) {
            setDifference("...");
        } else {
            let firstExaminer = Number(firstExaminerWatch);
            let secondExaminer = Number(secondExaminerWatch);
            const difference = Math.abs(firstExaminer - secondExaminer);
            // if (difference >= 12) {
            //     setDifference(difference);
            // } else {
            //     setDifference("...");
            // }
            setDifference(difference);
        }
    }, [firstExaminerWatch, secondExaminerWatch]);

    useEffect(() => {
        if (rollWatch && rollWatch !== "" && rollWatch.length == 8) {
            setIsRollSelected(true);
            const url = `https://student-management-delta.vercel.app/mark/improve-is-third-examiner-mark/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.semester}/${selectedCourse.courseName}/${selectedCourse.courseCode}/${rollWatch}`;
            // https://student-management-delta.vercel.app/mark/improve-is-third-examiner-mark/EEE/2017-18/1/Computer Programming/CSE-101/18102940
            getAllHandler(url)
                .then((res) => setInternalResult(res))
                .catch((err) => console.log(err));
        } else {
            setIsRollSelected(false);
            setInternalResult({});
        }
    }, [rollWatch]);

    useEffect(() => {
        if (internalResult?.firstExaminer) {
            setValue("firstExaminer", internalResult?.firstExaminer);
        } else {
            setValue("firstExaminer", "");
        }
        if (internalResult?.secondExaminer) {
            setValue("secondExaminer", internalResult?.secondExaminer);
        } else {
            setValue("secondExaminer", "");
        }
        if (internalResult?.thirdExaminer) {
            setValue("thirdExaminer", internalResult?.thirdExaminer);
        } else {
            setValue("thirdExaminer", "");
        }
    }, [internalResult]);

    const improvemntThirdExaminerMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            Swal.fire({
                title: "Done!",
                text: "Mark Submitted Successfully",
                icon: "success",
                confirmButtonText: "Close",
            });
            reset();
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            Swal.fire({
                title: "Opps...!",
                text:
                    error.response.data.errors.common.message +
                    " or Mark alreday submitted",
                icon: "error",
                confirmButtonText: "Close",
            });
        },
    });

    const onSubmit = (data) => {
        const result = {
            department: stepOneValue.department,
            semester: stepOneValue.semester,
            currentSession: stepOneValue.session,
            roll: data.roll,
            courseName: selectedCourse.courseName,
            courseCode: selectedCourse.courseCode,
            // firstExaminer: data.firstExaminer,
            // secondExaminer: data.secondExaminer,
            thirdExaminer: data.thirdExaminer,
        };

        improvemntThirdExaminerMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/improve/third",
        });
    };

    return (
        <>
            <div className="mb-6">
                <h3 className="capitalize text-center text-sm font-normal">
                    Jaitya kabi kazi nazrul islam university
                </h3>
                <h3 className=" text-center text-sm font-normal">
                    Department of {stepOneValue?.department}
                </h3>
                <div className="flex justify-center items-center gap-x-1">
                    <h3 className=" text-center text-sm font-normal">
                        Course Code: {selectedCourse?.courseCode},
                    </h3>
                    <h3 className=" text-center text-sm font-normal">
                        Course Title: {selectedCourse?.courseName}
                    </h3>
                </div>
                <div className="flex justify-center items-center gap-x-1">
                    <h3 className=" text-center text-sm font-normal">
                        Improvemnt Marks (3rd Examiner),
                    </h3>
                    <h3 className=" text-center text-sm font-normal">
                        Session: {stepOneValue?.session}
                    </h3>
                </div>
            </div>
            <form
                action=""
                className=""
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="w-full mt-8 mark_wrapper">
                    <div className="mark_container">
                        <div className="mark">
                            <h3>Student Roll</h3>
                        </div>
                        <div className="mark">
                            <h3>First Examiner Mark</h3>
                        </div>
                        <div className="mark">
                            <h3>Second Examiner Mark</h3>
                        </div>
                        <div className="mark">
                            <h3>Difference</h3>
                        </div>
                        <div className="mark">
                            <h3>third examiner mark</h3>
                        </div>

                        <React.Fragment>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    {...register(`roll`, {
                                        required: {
                                            value: true,
                                            message: "Roll required",
                                        },
                                    })}
                                    className="roll_field number"
                                />
                                {errors?.roll && (
                                    <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                        {errors?.roll?.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="number"
                                    {...register(`firstExaminer`, {
                                        required: {
                                            value: true,
                                            message: "Mark required",
                                        },
                                        min: {
                                            value: 0,
                                            message: "be at least (0)",
                                        },
                                        max: {
                                            value: 60,
                                            message: "Max (60) marks",
                                        },
                                    })}
                                    disabled={!isRollSelected}
                                    readOnly
                                />
                                {errors?.firstExaminer && (
                                    <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                        {errors?.firstExaminer?.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    placeholder=""
                                    className="number"
                                    {...register(`secondExaminer`, {
                                        required: {
                                            value: true,
                                            message: "Mark required",
                                        },
                                        min: {
                                            value: 0,
                                            message: "be at least (0)",
                                        },
                                        max: {
                                            value: 60,
                                            message: "Max (60) marks",
                                        },
                                    })}
                                    disabled={!isRollSelected}
                                    readOnly
                                />
                                {errors?.secondExaminer && (
                                    <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                        {errors?.secondExaminer?.message}
                                    </span>
                                )}
                            </div>

                            <span className="text-xs font-medium capitalize text-center text-red-700 number">
                                {difference}
                            </span>

                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    className="number"
                                    placeholder=""
                                    {...register(`thirdExaminer`, {
                                        required: {
                                            value: true,
                                            message: "Mark required",
                                        },
                                        min: {
                                            value: 0,
                                            message: "be at least (0)",
                                        },
                                        max: {
                                            value: 60,
                                            message: "Max (60) marks",
                                        },
                                    })}
                                    disabled={!isRollSelected}
                                />
                                {errors?.thirdExaminer && (
                                    <span className=" mt-1 label-text-alt text-xs font-semibold capitalize text-red-700 text-center">
                                        {errors?.thirdExaminer?.message}
                                    </span>
                                )}
                            </div>
                        </React.Fragment>
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-x-2">
                    <button
                        className="btn btn-sm rounded-sm font-normal text-sm back_btn px-6"
                        onClick={backButtonHandler}
                    >
                        back
                    </button>
                    <button
                        className="btn btn-sm rounded-sm font-normal text-sm submit_btn px-6"
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
