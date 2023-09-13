import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../utils/fetchHandlers";
import {
    departments,
    semesters,
} from "../../../../../../utils/AddMarkFieldsData";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const SingleStudentForm = () => {
    const [isDeptSelected, setIsDeptSelected] = useState(false);
    const [isSessionSelected, setIsSessionSelected] = useState(false);
    const [isSemesterSelect, setIsSemesterSelect] = useState(false);
    const [isCourseSelect, setIsCourseSelect] = useState(false);
    const [isRollSelect, setIsRollSelect] = useState(false);
    const [sessionData, setSessionData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [internalResult, setInternalResult] = useState({});

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        setValue,
    } = useForm();

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");
    const courseWatch = watch("course");
    const rollWatch = watch("roll");

    const addSingleInternalMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            toast.success("Mark Submitted");
            reset();
            setInternalResult({});
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            toast.warn("Something Wrong");
        },
    });

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

    useEffect(() => {
        if (courseWatch && courseWatch !== "default") {
            setIsCourseSelect(true);
        } else {
            setIsCourseSelect(false);
        }
    }, [courseWatch]);

    useEffect(() => {
        if (rollWatch && rollWatch !== "" && rollWatch.length == 8) {
            setIsRollSelect(true);
            const url = `https://student-management-delta.vercel.app/mark/${deptWatch}/${semesterWatch}/${courseWatch}/${rollWatch}`;
            getAllHandler(url)
                .then((res) => setInternalResult(res))
                .catch((err) => console.log(err));
        } else {
            setIsRollSelect(false);
            setInternalResult({});
        }
    }, [rollWatch]);

    useEffect(() => {
        if (internalResult?.attendance) {
            setValue("attendance", internalResult?.attendance);
        } else {
            setValue("attendance", "");
        }
        if (internalResult?.midOne) {
            setValue("midOne", internalResult?.midOne);
        } else {
            setValue("midOne", "");
        }
        if (internalResult?.midTwo) {
            setValue("midTwo", internalResult?.midTwo);
        } else {
            setValue("midTwo", "");
        }
        if (internalResult?.presentationOrAssignment) {
            setValue(
                "presentationOrAssignment",
                internalResult?.presentationOrAssignment
            );
        } else {
            setValue("presentationOrAssignment", "");
        }
    }, [internalResult]);

    const onSubmit = (data) => {
        console.log(data);
        const {
            department,
            semester,
            roll,
            course,
            attendance,
            midOne,
            midTwo,
            presentationOrAssignment,
        } = data;
        const result = {
            department,
            semester,
            roll,
            courseId: course,
            attendance,
            midOne,
            midTwo,
            presentationOrAssignment,
        };

        addSingleInternalMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/internal/single",
        });
    };

    return (
        <div>
            <div className="mb-4">
                <h2 className="text-xl text-center font-bold uppercase ">
                    add mark
                </h2>
                <h4 className="text-sm font-medium text-center uppercase mt-1">
                    internal
                </h4>
            </div>

            <form
                className=""
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                noValidate
            >
                <div className="grid grid-cols-4 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm"
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
                            className="select select-bordered rounded-sm"
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
                            className="select select-bordered rounded-sm"
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
                            className="select select-bordered rounded-sm"
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

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Student Roll</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isCourseSelect}
                            {...register("roll", {
                                required: {
                                    value: true,
                                    message: "Student Roll  is Required",
                                },
                            })}
                        />
                        {errors?.roll && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.roll?.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Attendance Mark</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isRollSelect}
                            {...register("attendance", {
                                max: {
                                    value: 10,
                                    message: "Max (10) marks",
                                },
                                min: {
                                    value: 0,
                                    message: "At least 0 (not negative)",
                                },
                                required: {
                                    value: true,
                                    message: "Mark is Required",
                                },
                            })}
                        />
                        {errors?.attendance && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.attendance?.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Midterm-1 Mark</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isRollSelect}
                            {...register("midOne", {
                                max: {
                                    value: 10,
                                    message: "Max (10) marks",
                                },
                                min: {
                                    value: 0,
                                    message: "At least 0 (not negative)",
                                },
                                required: {
                                    value: true,
                                    message: "Mark is Required",
                                },
                            })}
                        />
                        {errors?.midOne && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.midOne?.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Midterm-2 Mark</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isRollSelect}
                            {...register("midTwo", {
                                max: {
                                    value: 10,
                                    message: "Max (10) marks",
                                },
                                min: {
                                    value: 0,
                                    message: "At least 0 (not negative)",
                                },
                                required: {
                                    value: true,
                                    message: "Mark is Required",
                                },
                            })}
                        />
                        {errors?.midTwo && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.midTwo?.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Assignment/Presentation Mark
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isRollSelect}
                            {...register("presentationOrAssignment", {
                                max: {
                                    value: 10,
                                    message: "Max (10) marks",
                                },
                                min: {
                                    value: 0,
                                    message: "At least 0 (not negative)",
                                },
                                required: {
                                    value: true,
                                    message: "Mark is Required",
                                },
                            })}
                        />
                        {errors?.presentationOrAssignment && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.presentationOrAssignment?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="btn btn-sm bg-[#338543] hover:bg-[#2e763c] rounded-sm text-white font-normal text-sm">
                        submit mark
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SingleStudentForm;
