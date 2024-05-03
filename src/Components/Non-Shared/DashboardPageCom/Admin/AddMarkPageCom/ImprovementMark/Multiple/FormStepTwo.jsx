import React, { useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { useForm, useFieldArray } from "react-hook-form";

const FormStepTwo = () => {
    const [isRollSelected, setIsRollSelected] = useState(true);
    const { setStepValue, stepOneValue, selectedCourse } =
        useMarkFormStepContext();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        control,
        setValue,
        formState: { errors },
    } = useForm({ defaultValues: { marks: [{}] } });
    const { fields, append, remove } = useFieldArray({
        name: "marks",
        control,
    });

    const backButtonHandler = () => {
        setStepValue(1);
    };
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="mb-6">
                <h3 className="capitalize text-center text-sm font-normal">
                    Nexus Institute of Sciences and Engineering
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
                        Improvement Mark,
                    </h3>
                    <h3 className=" text-center text-sm font-normal">
                        Session: {stepOneValue?.session}
                    </h3>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                            <h3>action</h3>
                        </div>

                        {fields.map((field, index) => {
                            return (
                                <React.Fragment key={field.id}>
                                    <input
                                        type="text"
                                        {...register(`marks.${index}.roll`)}
                                        className="roll_field"
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `marks.${index}.firstExaminer`
                                        )}
                                        disabled={!isRollSelected}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `marks.${index}.secondExaminer`
                                        )}
                                        disabled={!isRollSelected}
                                    />

                                    <span className="text-xs font-medium capitalize text-center text-red-700">
                                        00
                                    </span>
                                    {index === 0 && (
                                        <span className=" opacity-0"></span>
                                    )}
                                    {index > 0 && (
                                        <button
                                            className="btn btn-xs w-max bg-red-600 text-white mx-auto"
                                            onClick={() => remove(index)}
                                        >
                                            X
                                        </button>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-center mt-2">
                    <button
                        className=" btn btn-xs bg-[#3ba550] hover:bg-[#2e763c] rounded-sm text-white font-normal text-xs"
                        onClick={() => append({})}
                    >
                        add new field
                    </button>
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
