import React, { useEffect, useState } from "react";
import {
    departments,
    semesters,
} from "../../../../../../../utils/AddMarkFieldsData";
import { useForm } from "react-hook-form";
import { useExternalContext } from "../../../../../../../context/Admin/ExternalMarkContext";
import { getAllHandler } from "../../../../../../../utils/fetchHandlers";

const StepOne = () => {
    const { setStepValue, setStepOneValue, setSelectedCourse } =
        useExternalContext();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        getValues,
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

    useEffect(() => {
        if (sessionWatch) {
            setIsSessionSelected(true);
        } else {
            setIsSessionSelected(false);
        }
    }, [sessionWatch]);

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

    const onSubmit = (data) => {
        let temp = courseData.find((course) => course?._id === data.course);
        setSelectedCourse(temp);
        setStepOneValue(data);
        setStepValue(2);
    };
    return (
        <>
            <div className="mb-4">
                <h2 className="text-xl text-center font-bold uppercase ">
                    add mark
                </h2>
                <h4 className="text-sm font-medium text-center uppercase mt-1">
                    semester final
                </h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full max-w-2xl mx-auto grid grid-cols-1 items-start">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm"
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
                                    <option key={dept._id} value={dept.name}>
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

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Session</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm"
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

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Semester</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm"
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

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Course</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm"
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
                                        <option
                                            key={course._id}
                                            value={course._id}
                                        >
                                            {course.courseCode}{" "}
                                            {course.courseName}
                                        </option>
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
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="btn btn-sm bg-[#3ba550] hover:bg-[#2e763c] rounded-sm text-white font-normal text-sm"
                        type="submit"
                    >
                        next
                    </button>
                </div>
            </form>
        </>
    );
};

export default StepOne;
