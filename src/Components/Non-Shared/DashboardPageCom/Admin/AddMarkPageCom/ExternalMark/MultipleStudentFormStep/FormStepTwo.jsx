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

const FormStepTwo = () => {
    const { setStepValue, stepOneValue, setStepTwoValue, selectedCourse } =
        useMarkFormStepContext();
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

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const backButtonHandler = () => {
        setStepValue(1);
    };

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

    const addMultipleExternalMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            toast.success("Mark Submitted");
            reset();
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            toast.warn("Something Wrong");
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        const { resultList } = data;
        setStepTwoValue(resultList);

        const mergedResult = resultList.map((res) => {
            return {
                ...res,
                department: stepOneValue.department,
                semester: stepOneValue.semester,
                courseId: stepOneValue.course,
            };
        });
        const result = { marks: mergedResult };

        addMultipleExternalMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/external/multiple",
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
                        Semester Final Marks,
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

                        {students?.map((student, index) => {
                            const firstExaminerWatch = watch(
                                `resultList.${index}.firstExaminer`
                            );
                            const secondExaminerWatch = watch(
                                `resultList.${index}.secondExaminer`
                            );

                            let dif = isGoToThirdExaminer(
                                firstExaminerWatch,
                                secondExaminerWatch
                            );

                            return (
                                <React.Fragment key={index}>
                                    <input
                                        className="roll_field"
                                        type="text"
                                        {...register(
                                            `resultList.${index}.roll`
                                        )}
                                        defaultValue={student.roll}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.firstExaminer`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.secondExaminer`
                                        )}
                                    />

                                    <span className="text-xs font-medium capitalize text-center text-red-700">
                                        {dif[1]}
                                    </span>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-x-2">
                    <button
                        className="btn btn-sm bg-[#f44040] hover:bg-[#ea3333] rounded-sm text-white font-normal text-sm"
                        onClick={backButtonHandler}
                    >
                        back
                    </button>
                    <button
                        className="btn btn-sm bg-[#3ba550] hover:bg-[#2e763c] rounded-sm text-white font-normal text-sm"
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
