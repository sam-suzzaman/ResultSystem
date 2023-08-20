import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./AddMark.css";

const AddMarkPageTwo = () => {
    const times = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            resultList: [
                {
                    id: "",
                    attendance: "",
                    mid1: "",
                    mid2: "",
                    assignment: "",
                    first_examine: "",
                    second_exmine: "",
                    third_examine: "",
                },
            ],
        },
    });

    const { fields } = useFieldArray({
        name: "resultList",
        control,
    });

    const handler = (data) => {
        console.log(data);
    };
    return (
        <div>
            <div className=" mt-2 ">
                <h2 className="text-center font-bold text-lg uppercase">
                    Add Marks
                </h2>
                <h3 className="text-center font-medium text-sm text-[#414141]">
                    Course Title:
                    <span className="capitalize">
                        Computer aided engineering drawing
                    </span>
                </h3>
                <h3 className="text-center font-medium text-sm text-[#434343]">
                    Course Code:
                    <span className="capitalize">CSE-104</span>
                </h3>
                <h3 className="text-center font-medium text-sm text-[#434343]">
                    Session:
                    <span className="capitalize">2017-18</span>
                </h3>
            </div>
            <div className="mt-6">
                <form onSubmit={handleSubmit(handler)} className="form-wrapper">
                    <div className="mark_input_form_container">
                        <div class="mark">
                            <h3>Student ID</h3>
                        </div>
                        <div class="mark">
                            <h3>Attendance</h3>
                        </div>
                        <div class="mark">
                            <h3 id="mid">Mid Term-01</h3>
                        </div>
                        <div class="mark">
                            <h3>Mid Term-02</h3>
                        </div>
                        <div class="mark">
                            <h3 id="asp">
                                Assignment/ <br /> Presentation{" "}
                            </h3>
                        </div>
                        <div class="mark">
                            <h3>1st Examine </h3>
                        </div>
                        <div class="mark">
                            <h3>2nd Examine </h3>
                        </div>
                        <div class="mark">
                            <h3>3rd Examine </h3>
                        </div>
                        {times.map((_, rowIndex) => {
                            return (
                                <React.Fragment key={rowIndex}>
                                    {fields.map((field, index) => {
                                        return (
                                            <React.Fragment key={field.id}>
                                                <input
                                                    type="number"
                                                    className="idField"
                                                    {...register(
                                                        `resultList.${rowIndex}.id`
                                                    )}
                                                    value={`1810290${_}`}
                                                    disabled
                                                />
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    {...register(
                                                        `resultList.${rowIndex}.attendance`
                                                    )}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    {...register(
                                                        `resultList.${rowIndex}.mid1`
                                                    )}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    {...register(
                                                        `resultList.${rowIndex}.mid2`
                                                    )}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    {...register(
                                                        `resultList.${rowIndex}.assignment`
                                                    )}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    {...register(
                                                        `resultList.${rowIndex}.first_examine`
                                                    )}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    {...register(
                                                        `resultList.${rowIndex}.second_examine`
                                                    )}
                                                />
                                                <input
                                                    type="number"
                                                    placeholder=""
                                                    {...register(
                                                        `resultList.${rowIndex}.third_examine`
                                                    )}
                                                />
                                            </React.Fragment>
                                        );
                                    })}
                                </React.Fragment>
                            );
                        })}
                    </div>

                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="btn btn-sm rounded-sm font-medium btn-accent text-sm bg-[#51a85d] hover:bg-[#368941] text-white"
                        >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMarkPageTwo;
