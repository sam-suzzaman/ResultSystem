import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import {
    getSingleHandler,
    updateHandler,
} from "../../../../../utils/fetchHandlers";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const UpdateCourseModal = ({
    singleCourse,
    setShowUpdateModal,
    session,
    semester,
}) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        reset();
    }, [singleCourse]);

    const queryClient = useQueryClient();
    const updateCoursenMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            queryClient.invalidateQueries("courseList");
            toast.success(" Course Updated");
            reset();
            setShowUpdateModal(false);
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            toast.warn("Something Wrong");
        },
    });
    const addCourseFormHandler = (data) => {
        const id = singleCourse._id;
        const updateCourse = {
            ...data,
            credit: data.credit * 1,
            semester: semester * 1,
        };
        updateCoursenMutation.mutate({
            body: updateCourse,
            url: `https://student-management-delta.vercel.app/course/${session}/EEE/${id}`,
        });
    };

    // if (isLoading) {
    //     return <h2>loadingn...</h2>;
    // }

    return (
        <div>
            <input
                type="checkbox"
                id="update_course_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box max-w-[600px] w-full rounded-sm">
                    <div className="modal-action mt-0">
                        <label
                            htmlFor="update_course_modal"
                            className="btn btn-xs text-white btn-error text-sm font-bold rounded-full capitalize"
                        >
                            <AiOutlineClose />
                        </label>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold  text-sm text-center uppercase">
                            update course
                        </h3>
                        {/* <div className="flex justify-center gap-x-4 mt-1">
                            <h3 className="font-bold  text-xs text-center uppercase">
                                Session:{session}
                            </h3>{" "}
                            <h3 className="font-bold  text-xs text-center uppercase">
                                Semester: {semester}
                            </h3>
                        </div> */}
                    </div>
                    <form onSubmit={handleSubmit(addCourseFormHandler)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Course Code
                                </span>
                            </label>
                            <input
                                {...register("courseCode", {
                                    required: {
                                        value: true,
                                        message: "Course Code is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered w-full rounded-sm uppercase"
                                defaultValue={singleCourse?.courseCode}
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    {errors.courseCode?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Course Title
                                </span>
                            </label>
                            <input
                                {...register("courseName", {
                                    required: {
                                        value: true,
                                        message: "Course Title is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered w-full rounded-sm"
                                defaultValue={singleCourse?.courseName}
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    {errors?.courseName?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Course Credit
                                </span>
                            </label>
                            <input
                                {...register("credit", {
                                    required: {
                                        value: true,
                                        message: "Course Credit is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered w-full rounded-sm"
                                defaultValue={singleCourse?.credit}
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    {errors.credit?.message}
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-center mt-3 mb-4">
                            <button className="btn btn-sm rounded-sm bg-[#2d9958] text-white hover:bg-[#4fa070] text-xs font-medium">
                                update course
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCourseModal;
