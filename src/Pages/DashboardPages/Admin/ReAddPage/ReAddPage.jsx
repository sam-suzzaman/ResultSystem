import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { departments, semesters } from "../../../../utils/AddMarkFieldsData";
import { getAllHandler, updateHandler } from "../../../../utils/fetchHandlers";
import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";

const ReAddPage = () => {
    // States
    const [isDeptSelected, setIsDeptSelected] = useState(false);
    const [sessionData, setSessionData] = useState([]);

    // Hooks
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    // Watch
    const deptWatch = watch("department");

    // To Fetch Sessions based on dept
    useEffect(() => {
        if (deptWatch && deptWatch !== "default") {
            setIsDeptSelected(true);
            const url = `https://student-management-delta.vercel.app/session/department/${deptWatch}`;
            getAllHandler(url)
                .then((res) => setSessionData(res))
                .catch((err) => console.log(err));
        } else {
            setIsDeptSelected(false);
        }
    }, [deptWatch]);

    const reAddMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            Swal.fire({
                icon: "success",
                title: "Done...",
                text: "Re-add Successfully Done",
            });
            reset();
        },
        onError: (error, variables, context) => {
            // console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:
                    error?.response?.data?.errors?.message ||
                    "Something went wrong!",
            });
        },
    });

    // Form Submission Handler
    const onSubmit = (data) => {
        reAddMutation.mutate({
            body: data,
            url: "https://student-management-delta.vercel.app/user/drop-student",
        });
    };

    return (
        <Wrapper>
            {/* Form container */}
            <div className="drop-form-container">
                <div className="mt-8">
                    <h2 className="text-2xl text-center font-bold text-secondary">
                        Re-add Student
                    </h2>
                    <h4 className="text-[12px] font-medium text-center  mt-2">
                        By submitting this form, you are initiating Semester
                        Regression
                        <br />
                        for the selected student
                    </h4>
                </div>
                <form
                    className="w-full max-w-md mx-auto grid grid-cols-1 items-start gap-y-4 add-mark-form mt-8"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Department */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm number"
                            {...register("department", {
                                validate: {
                                    isValidValue: (value) => {
                                        return (
                                            value !== "default" ||
                                            "Department is Required"
                                        );
                                    },
                                },
                            })}
                            defaultValue="default"
                        >
                            <option disabled value="default">
                                Select Department
                            </option>
                            {departments.map((dept) => {
                                return (
                                    <option
                                        key={dept._id}
                                        value={dept.name}
                                        className="number"
                                    >
                                        {dept.displayName}
                                    </option>
                                );
                            })}
                        </select>
                        {errors?.department && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.department?.message}
                            </span>
                        )}
                    </div>

                    {/* Addmission Session */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Student Addmission Session
                            </span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm number"
                            disabled={!isDeptSelected}
                            {...register("addmissionSession", {
                                validate: {
                                    isValidValue: (value) => {
                                        return (
                                            value !== "default" ||
                                            "Addmission Session Required"
                                        );
                                    },
                                },
                                required: {
                                    value: true,
                                    message: "Addmission Session Required",
                                },
                            })}
                            defaultValue="default"
                        >
                            <option disabled value="default">
                                Select Addmission Session
                            </option>
                            {sessionData?.map((session) => {
                                return (
                                    <option
                                        key={session._id}
                                        value={session.session}
                                        className="number"
                                    >
                                        {session.session}
                                    </option>
                                );
                            })}
                        </select>
                        {errors?.addmissionSession && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.addmissionSession?.message}
                            </span>
                        )}
                    </div>

                    {/* Readdmission Session */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Re-add Session</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm number"
                            disabled={!isDeptSelected}
                            {...register("reAddSession", {
                                validate: {
                                    isValidValue: (value) => {
                                        return (
                                            value !== "default" ||
                                            "Session Required"
                                        );
                                    },
                                },
                                required: {
                                    value: true,
                                    message: "Session Required",
                                },
                            })}
                            defaultValue="default"
                        >
                            <option disabled value="default">
                                Select a Session
                            </option>
                            {sessionData?.map((session) => {
                                return (
                                    <option
                                        key={session._id}
                                        value={session.session}
                                        className="number"
                                    >
                                        {session.session}
                                    </option>
                                );
                            })}
                        </select>
                        {errors?.reAddSession && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.reAddSession?.message}
                            </span>
                        )}
                    </div>
                    {/* ReAddSemester */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Re-add Semester</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm number"
                            disabled={!isDeptSelected}
                            {...register("reAddSemester", {
                                validate: {
                                    isValidValue: (value) => {
                                        return (
                                            value !== "default" ||
                                            "Semester is Required"
                                        );
                                    },
                                },
                                required: {
                                    value: true,
                                    message: "Semester  is Required",
                                },
                            })}
                            defaultValue="default"
                        >
                            <option disabled value="default">
                                Select Semester
                            </option>
                            {semesters.map((semester) => {
                                return (
                                    <option
                                        key={semester._id}
                                        value={semester.session}
                                        className="number"
                                    >
                                        {semester.semester}
                                    </option>
                                );
                            })}
                        </select>
                        {errors?.reAddSemester && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.reAddSemester?.message}
                            </span>
                        )}
                    </div>

                    {/* Student Roll */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Student Roll</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your roll"
                            className="input input-bordered w-full input-sm rounded-sm number"
                            disabled={!isDeptSelected}
                            {...register("roll", {
                                required: {
                                    value: true,
                                    message: "Student Roll required",
                                },
                                minLength: {
                                    value: 8,
                                    message: "Roll is too short",
                                },
                                maxLength: {
                                    value: 8,
                                    message: "Roll is too long",
                                },
                            })}
                        />
                        {errors?.roll && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.roll?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-center mt-3">
                        <button
                            className="py-2 px-8 bg-primary hover:bg-secondary  text-white text-sm font-semibold capitalize tracking-widest rounded-sm"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section``;
export default ReAddPage;
