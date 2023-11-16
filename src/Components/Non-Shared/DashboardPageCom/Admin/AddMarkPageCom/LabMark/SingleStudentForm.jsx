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
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
        setValue,
    } = useForm();

    const [isDeptSelected, setIsDeptSelected] = useState(false);
    const [isSessionSelected, setIsSessionSelected] = useState(false);
    const [isSemesterSelect, setIsSemesterSelect] = useState(false);
    const [isCourseSelect, setIsCourseSelect] = useState(false);
    const [isRollSelect, setIsRollSelect] = useState(false);
    const [sessionData, setSessionData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [selectCourse, setSelectCourse] = useState({});
    const [internalResult, setInternalResult] = useState({});

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");
    const courseWatch = watch("course");
    const rollWatch = watch("roll");

    const addSingleLabMarkMutation = useMutation({
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
            console.log(courseWatch);
            setIsCourseSelect(false);
        }
    }, [courseWatch]);

    useEffect(() => {
        if (internalResult?.labTotal) {
            setValue("labTotal", internalResult?.labTotal);
        } else {
            setValue("labTotal", "");
        }
    }, [internalResult]);

    useEffect(() => {
        if (rollWatch && rollWatch !== "" && rollWatch.length == 8) {
            setIsRollSelect(true);
            const url = `https://student-management-delta.vercel.app/mark/lab/${deptWatch}/${semesterWatch}/${courseWatch}/${rollWatch}`;
            // const url = `https://student-management-delta.vercel.app/mark/lab/${deptWatch}/${semesterWatch}/${selectedCourse?.courseName}/${selectedCourse.courseCode}/${rollWatch}`;
            getAllHandler(url)
                .then((res) => setInternalResult(res))
                .catch((err) => console.log(err));
        } else {
            setIsRollSelect(false);
            setInternalResult({});
        }
    }, [rollWatch]);

    const onSubmit = (data) => {
        const { department, session, semester, roll, course, labTotal } = data;
        const selectedCourse = courseData.find((c) => {
            return c._id == course;
        });
        const result = {
            department,
            semester,
            roll,
            courseId: course,
            labTotal,
            courseCode: selectedCourse.courseCode,
            courseName: selectedCourse.courseName,
            currentSession: session,
        };
        addSingleLabMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/lab/single",
        });
    };
    return (
        <div className="">
            <form
                autoComplete="off"
                noValidate
                className=""
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="grid grid-cols-3 gap-6">
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
                            <span className="label-text">Lab Total Mark</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isCourseSelect}
                            {...register("labTotal", {
                                max: {
                                    value: 100,
                                    message: "Max (100) marks",
                                },
                                min: {
                                    value: 0,
                                    message: "At least 0 (not negative)",
                                },
                                required: {
                                    value: true,
                                    message: "Lab Mark is Required",
                                },
                            })}
                        />
                        {errors?.labTotal && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.labTotal?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="btn btn-sm bg-[#338543] hover:bg-[#2e763c] rounded-sm text-white font-normal text-sm">
                        submit mark
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SingleStudentForm;
