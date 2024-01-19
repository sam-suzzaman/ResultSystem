import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { getAllHandler, postHandler } from "../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";

import { departments, sessions } from "../../../../../utils/AddMarkFieldsData";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AddStudentModal = ({ session }) => {
    // hooks
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const createStudentMutation = useMutation({
        mutationFn: postHandler,
        onSuccess: (data, variable, context) => {
            // toast.success("Student Created");
            Swal.fire({
                icon: "success",
                title: "Done...",
                text: "Student Added",
            });
            reset();
        },
        onError: (error, variables, context) => {
            // toast.warn("Something Wrong");
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.errors.message || "Something wrong",
            });
        },
    });

    const addStudentFormHandler = (data) => {
        const student = {
            ...data,
            currentSession: data?.session,
            presentAddress: "Agnibina Hall",
            permanentAddress: "Sherpur,Bangladesh",
        };
        createStudentMutation.mutate({
            body: student,
            url: "https://student-management-delta.vercel.app/user/create-student",
        });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="add_student_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box max-w-[500px] w-full rounded-sm">
                    <div className="modal-action mt-0">
                        <label
                            htmlFor="add_student_modal"
                            className="cursor-pointer p-1 text-white text-sm font-extrabold btn-error rounded-full capitalize"
                        >
                            <AiOutlineClose />
                        </label>
                    </div>
                    <h3 className="font-bold text-xl text-primary text-center mb-6">
                        Add Student
                    </h3>
                    <form
                        onSubmit={handleSubmit(addStudentFormHandler)}
                        noValidate
                        autoComplete="off"
                    >
                        {/* Department */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Department</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-sm input-bordered rounded-sm w-full p-4 number"
                                {...register("department")}
                                defaultValue="EEE"
                                readOnly
                            />
                        </div>
                        {/* session */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">
                                    Student Session
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-sm input-bordered rounded-sm w-full p-4 number"
                                {...register("session")}
                                defaultValue={session}
                                readOnly
                            />
                        </div>
                        {/* Name */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Student Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-sm input-bordered rounded-sm w-full p-4 capitalize"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Student name is Required",
                                    },
                                })}
                            />
                            {errors?.name && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.name?.message}
                                </span>
                            )}
                        </div>
                        {/* Email */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">
                                    Student email
                                </span>
                            </label>
                            <input
                                type="email"
                                placeholder="Type Here"
                                className="input input-sm input-bordered rounded-sm w-full p-4"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Student email is Required",
                                    },
                                })}
                            />
                            {errors?.email && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>
                        {/* Roll */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Student Roll</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-sm input-bordered rounded-sm w-full p-4 number"
                                {...register("roll", {
                                    required: {
                                        value: true,
                                        message: "Student Roll is Required",
                                    },
                                })}
                            />
                            {errors?.roll && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.roll?.message}
                                </span>
                            )}
                        </div>
                        {/* Registration */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">
                                    Registration No.
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-sm input-bordered rounded-sm w-full p-4 number"
                                {...register("regNo", {
                                    required: {
                                        value: true,
                                        message:
                                            "Student registration number is Required",
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "Too short (min 4 char)",
                                    },
                                    maxLength: {
                                        value: 4,
                                        message: "Too long (max 4 char)",
                                    },
                                })}
                            />
                            {errors?.regNo && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.regNo?.message}
                                </span>
                            )}
                        </div>
                        {/* Password */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-sm input-bordered rounded-sm w-full p-4 number"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "At least 8 char",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Max 20 char",
                                    },
                                })}
                            />
                            {errors?.password && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.session?.message}
                                </span>
                            )}
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className="btn btn-sm rounded-sm text-white bg-secondary hover:bg-primary text-xs font-normal  uppercase"
                            >
                                Add student
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudentModal;
