import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { departments, semesters } from "../../../../../utils/AddMarkFieldsData";

import { getAllHandler } from "../../../../../utils/fetchHandlers";

import { useForm } from "react-hook-form";

import { useResultStepContext } from "../../../../../context/Admin/ResultStepContext";

const CommonStepOne = ({ name }) => {
    const { setStep, setStepOneValue } = useResultStepContext();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const [isDeptSelected, setIsDeptSelected] = useState(false);
    const [isSessionSelected, setIsSessionSelected] = useState(false);
    const [isSemesterSelect, setIsSemesterSelect] = useState(false);
    const [sessionData, setSessionData] = useState([]);
    const [courseData, setCourseData] = useState([]);

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");

    // fetch session data
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

    // fetch
    useEffect(() => {
        if (sessionWatch) {
            setIsSessionSelected(true);
        } else {
            setIsSessionSelected(false);
        }
    }, [sessionWatch]);

    // fetch course
    useEffect(() => {
        if (semesterWatch) {
            setIsSemesterSelect(true);
            const url = `https://student-management-delta.vercel.app/course/${sessionWatch}/${deptWatch}/${semesterWatch}`;
            getAllHandler(url)
                .then((res) => setCourseData(res))
                .catch((err) => console.log(err));
        } else {
            setIsSemesterSelect(false);
        }
    }, [semesterWatch]);

    // form handler
    const onSubmit = (data) => {
        let temp = courseData.find((course) => course?._id === data.course);
        setStepOneValue({ ...data, ...temp });
        setStep(2);
    };

    return (
        <Wrapper>
            <div className="mb-10">
                <h4 className="text-xs font-bold text-center uppercase mb-1">
                    {name}
                </h4>
                <h2 className="text-3xl text-center font-bold capitalize ">
                    search result
                </h2>
            </div>
            <form
                className="w-full max-w-md mx-auto grid grid-cols-1 items-start gap-y-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* department */}
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
                        {departments?.map((dept) => {
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

                {/* session */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Session</span>
                    </label>
                    <select
                        className="select select-bordered rounded-sm select-sm number"
                        disabled={!isDeptSelected}
                        {...register("session", {
                            validate: {
                                isValidValue: (value) => {
                                    return (
                                        value !== "default" ||
                                        "Session is Required"
                                    );
                                },
                            },
                            required: {
                                value: true,
                                message: "Session  is Required",
                            },
                        })}
                        defaultValue="default"
                    >
                        <option disabled value="default">
                            Select Session
                        </option>
                        {sessionData?.map((session) => {
                            return (
                                <option
                                    className="number"
                                    key={session._id}
                                    value={session.session}
                                >
                                    {session.session}
                                </option>
                            );
                        })}
                    </select>
                    {errors?.session && (
                        <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                            {errors.session?.message}
                        </span>
                    )}
                </div>

                {/* semester */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Semester</span>
                    </label>
                    <select
                        className="select select-bordered rounded-sm select-sm number"
                        disabled={!isSessionSelected}
                        {...register("semester", {
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
                                    className="number"
                                    key={semester._id}
                                    value={semester.session}
                                >
                                    {semester.semester}
                                </option>
                            );
                        })}
                    </select>
                    {errors?.semester && (
                        <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                            {errors.semester?.message}
                        </span>
                    )}
                </div>

                {/* course */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Course</span>
                    </label>
                    <select
                        className="select select-bordered rounded-sm select-sm number"
                        disabled={!isSemesterSelect}
                        {...register("course", {
                            validate: {
                                isValidValue: (value) => {
                                    return (
                                        value !== "default" ||
                                        "Course is Required"
                                    );
                                },
                            },
                            required: {
                                value: true,
                                message: "Course  is Required",
                            },
                        })}
                        defaultValue="default"
                    >
                        <option disabled value="default">
                            Select Course
                        </option>

                        {courseData?.length === 0 ? (
                            <option
                                value="default"
                                disabled
                                className="capitalize"
                            >
                                no course found
                            </option>
                        ) : (
                            courseData?.map((course) => {
                                return (
                                    course?.credit !== 1.5 && (
                                        <option
                                            key={course._id}
                                            value={course._id}
                                            className="number"
                                        >
                                            {course.courseName} (
                                            {course.courseCode})
                                        </option>
                                    )
                                );
                            })
                        )}
                    </select>
                    {errors?.course && (
                        <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                            {errors.course?.message}
                        </span>
                    )}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        className="py-2 px-8 bg-primary hover:bg-secondary  text-white text-sm font-semibold capitalize tracking-widest rounded-sm"
                        type="submit"
                    >
                        search
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
`;
export default CommonStepOne;
