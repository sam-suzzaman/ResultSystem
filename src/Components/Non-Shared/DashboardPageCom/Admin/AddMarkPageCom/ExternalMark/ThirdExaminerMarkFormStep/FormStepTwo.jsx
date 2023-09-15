import React, { useEffect, useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../../utils/fetchHandlers";
import { useForm } from "react-hook-form";
import LoadingCom from "../../../../../../Shared/LoadingCom/LoadingCom";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

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
            `https://student-management-delta.vercel.app/mark/${stepOneValue.department}/${stepOneValue.semester}/${stepOneValue.course}`
        )
    );

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
        console.log(result);
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
                                        className="roll_field"
                                        type="text"
                                        {...register(
                                            `resultList.${index}.roll`
                                        )}
                                        defaultValue={student?.roll}
                                        readOnly
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.firstExaminer`
                                        )}
                                        value={student?.firstExaminer}
                                        readOnly
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.secondExaminer`
                                        )}
                                        value={student?.secondExaminer}
                                        readOnly
                                    />

                                    <span className="text-xs font-medium capitalize text-center text-red-700">
                                        {dif[1]}
                                    </span>

                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.thirdExaminer`
                                        )}
                                        disabled={!dif[0]}
                                    />
                                </React.Fragment>
                            );
                        })}
                        {students?.length === 0 && (
                            <h2 className=" font-semibold capitalize text-lg">
                                No Students found
                            </h2>
                        )}
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
        </div>
    );
};

export default FormStepTwo;
