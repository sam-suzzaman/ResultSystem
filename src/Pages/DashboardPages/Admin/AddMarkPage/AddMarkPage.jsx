import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./AddMark.css";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";
import { useQuery } from "react-query";
import { getAllHandler } from "../../../../utils/fetchHandlers";

const AddMarkPage = () => {
    const times = [1, 2];
    const { session } = useParams();
    const { pathname } = useLocation();
    const {
        isLoading,
        isError,
        data: studentList,
        error,
    } = useQuery("studentList", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/user/EEE/${session}`
        )
    );
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm();

    // const { fields } = useFieldArray({
    //     name: "resultList",
    //     control,
    // });

    const handler = (data) => {
        console.log(data);
    };

    if (isLoading) {
        return <LoadingCom />;
    }
    if (isError) {
        return (
            <h2 className="text-center font-bold text-lg mt-4">
                {error?.message}
            </h2>
        );
    }

    return (
        <div className="mb-6">
            <div className="">
                <Breadcrumb location={pathname} />
            </div>
            <div className=" mt-4 ">
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
                        <div className="mark">
                            <h3>Student ID</h3>
                        </div>
                        <div className="mark">
                            <h3>Attendance</h3>
                        </div>
                        <div className="mark">
                            <h3 id="mid">Mid Term-01</h3>
                        </div>
                        <div className="mark">
                            <h3>Mid Term-02</h3>
                        </div>
                        <div className="mark">
                            <h3 id="asp">
                                Assignment/ <br /> Presentation
                            </h3>
                        </div>
                        <div className="mark">
                            <h3>1st Examine </h3>
                        </div>
                        <div className="mark">
                            <h3>2nd Examine </h3>
                        </div>
                        <div className="mark">
                            <h3>3rd Examine </h3>
                        </div>
                        {studentList?.map((student, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <input
                                        type="text"
                                        className="idField"
                                        {...register(`resultList.${index}.id`)}
                                        defaultValue={student?.roll}
                                        readOnly
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.attendance`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.mid1`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.mid2`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.assignment`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.first_examine`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.second_examine`
                                        )}
                                    />
                                    <input
                                        type="text"
                                        placeholder=""
                                        {...register(
                                            `resultList.${index}.third_examine`
                                        )}
                                    />
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

export default AddMarkPage;
