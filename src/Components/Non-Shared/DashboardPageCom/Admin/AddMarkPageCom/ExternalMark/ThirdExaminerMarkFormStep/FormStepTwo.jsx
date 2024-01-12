import React, { useEffect, useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../../utils/fetchHandlers";
import { useForm } from "react-hook-form";
import LoadingCom from "../../../../../../Shared/LoadingCom/LoadingCom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import ResultErrorCom from "../../../../../../Shared/ResultErrorCom/ResultErrorCom";

const FormStepTwo = () => {
    const { setStepValue, stepOneValue, setStepTwoValue, selectedCourse } =
        useMarkFormStepContext();
    const [differences, setDifferences] = useState([]);
    const {
        isLoading,
        isError,
        data: students,
        error,
    } = useQuery("studentList", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/mark/theory-is-third-examiner-marks/${stepOneValue.department}/${stepOneValue?.session}/${stepOneValue.semester}/${selectedCourse?.courseName}/${selectedCourse?.courseCode}`
        )
    );
    // https://student-management-delta.vercel.app/mark/theory-is-third-examiner-marks/EEE/2017-18/1/Computer Programming/CSE-101
    // `https://student-management-delta.vercel.app/mark/${stepOneValue.department}/${stepOneValue.semester}/${selectedCourse?.courseName}/${selectedCourse?.courseCode}`
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const isGoToThirdExaminer = (firstExaminerNumber, secondExaminerNumber) => {
        if (
            firstExaminerNumber === undefined ||
            secondExaminerNumber === undefined ||
            firstExaminerNumber === "" ||
            secondExaminerNumber === ""
        ) {
            return [false, "not available"];
        } else {
            firstExaminerNumber = Number(firstExaminerNumber);
            secondExaminerNumber = Number(secondExaminerNumber);
            const difference = Math.abs(
                firstExaminerNumber - secondExaminerNumber
            );
            if (difference >= 12) {
                return [true, difference];
            }

            return [false, difference];
        }
    };

    // Initialize differences with initial values
    useEffect(() => {
        const initialDifferences = students?.map((student) =>
            isGoToThirdExaminer(student.firstExaminer, student.secondExaminer)
        );
        setDifferences(initialDifferences);
    }, [students]);

    const backButtonHandler = () => {
        setStepValue(1);
    };

    const queryClient = useQueryClient();
    const addMultipleExternalMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            queryClient.invalidateQueries("studentList");
            reset();
            Swal.fire({
                icon: "success",
                title: "Done",
                text: "Mark Submitted",
            });
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            // toast.warn("Something Wrong");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error?.message,
            });
        },
    });

    const onSubmit = (data) => {
        const { resultList } = data;
        setStepTwoValue(resultList);

        const mergedResult = resultList.map((res) => {
            return {
                roll: res.roll,
                thirdExaminer: res.thirdExaminer,
                department: stepOneValue.department,
                semester: stepOneValue.semester,
                courseId: stepOneValue.course,
                courseCode: selectedCourse.courseCode,
                courseName: selectedCourse.courseName,
                currentSession: stepOneValue.session,
            };
        });
        const result = { marks: mergedResult };

        addMultipleExternalMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/third/multiple",
        });
    };

    if (isLoading) {
        return <LoadingCom />;
    }

    if (isError) {
        return <h2 className="font-bold text-lg">{error?.message}</h2>;
    }

    if (students?.length === 0) {
        return (
            <ResultErrorCom
                homeURL="/dashboard/admin/add-mark/external"
                msg="There is no student"
            />
        );
    }
    return (
        <div>
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
                        3rd Examiner Mark,
                    </h3>
                    <h3 className=" text-center text-sm font-normal">
                        Session: {stepOneValue?.session}
                    </h3>
                </div>
            </div>
            <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
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
                            <h3>Third Examiner Mark</h3>
                        </div>
                        {students?.map((student, index) => {
                            const dif =
                                differences?.length > 0 && differences[index];

                            return (
                                <React.Fragment key={index}>
                                    <input
                                        className="roll_field number"
                                        type="text"
                                        {...register(
                                            `resultList.${index}.roll`
                                        )}
                                        defaultValue={student?.roll}
                                        readOnly
                                    />
                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="number"
                                            {...register(
                                                `resultList.${index}.firstExaminer`,
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
                                                        value: 60,
                                                        message:
                                                            "Max (60) marks",
                                                    },
                                                }
                                            )}
                                            value={student?.firstExaminer}
                                            readOnly
                                        />
                                        {errors?.resultList?.[index]
                                            ?.firstExaminer && (
                                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700 text-center number">
                                                {
                                                    errors?.resultList?.[index]
                                                        ?.firstExaminer?.message
                                                }
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="number"
                                            {...register(
                                                `resultList.${index}.secondExaminer`,
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
                                                        value: 60,
                                                        message:
                                                            "Max (60) marks",
                                                    },
                                                }
                                            )}
                                            value={student?.secondExaminer}
                                            readOnly
                                        />
                                        {errors?.resultList?.[index]
                                            ?.secondExaminer && (
                                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700 text-center number">
                                                {
                                                    errors?.resultList?.[index]
                                                        ?.secondExaminer
                                                        ?.message
                                                }
                                            </span>
                                        )}
                                    </div>

                                    <span className="text-xs font-medium capitalize text-center text-red-700 number">
                                        {dif[1]}
                                    </span>

                                    <div className="flex flex-col">
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="number"
                                            {...register(
                                                `resultList.${index}.thirdExaminer`,
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
                                                        value: 60,
                                                        message:
                                                            "Max (60) marks",
                                                    },
                                                }
                                            )}
                                            disabled={!dif[0]}
                                        />
                                        {errors?.resultList?.[index]
                                            ?.thirdExaminer && (
                                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700 text-center number">
                                                {
                                                    errors?.resultList?.[index]
                                                        ?.thirdExaminer?.message
                                                }
                                            </span>
                                        )}
                                    </div>
                                </React.Fragment>
                            );
                        })}
                        {/* {students?.length === 0 && (
                            <h2 className=" font-semibold capitalize text-lg">
                                No Students found
                            </h2>
                        )} */}
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-x-2">
                    <button
                        className="btn btn-sm back_btn rounded-sm text-white font-normal text-sm"
                        onClick={backButtonHandler}
                    >
                        back
                    </button>
                    <button
                        className="btn btn-sm bg-primary hover:bg-secondary rounded-sm text-white font-normal text-sm"
                        type="submit"
                    >
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormStepTwo;
