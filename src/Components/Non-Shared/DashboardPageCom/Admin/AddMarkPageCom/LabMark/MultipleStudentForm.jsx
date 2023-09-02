import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    getAllHandler,
    updateHandler,
} from "../../../../../../utils/fetchHandlers";
import {
    departments,
    semesters,
} from "../..../../../../../../../utils/AddMarkFieldsData";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const MultipleStudentForm = () => {
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
    const [isCourseSelect, setIsCourseSelect] = useState(false);
    const [sessionData, setSessionData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [studentData, setStudentData] = useState([]);
    const studentList = [1, 2];

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");
    const courseWatch = watch("course");

    const addMultipleLabMarkMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            toast.success("Mark Submitted");
            reset();
            setStudentData([]);
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
            const url = `https://student-management-delta.vercel.app/user/${deptWatch}/${sessionWatch}`;
            getAllHandler(url)
                .then((res) => setStudentData(res))
                .catch((err) => console.log(err));
        } else {
            setIsCourseSelect(false);
        }
    }, [courseWatch]);

    const onSubmit = (data) => {
        const { resultList, department, semester, course, assesment } = data;
        const mergedResult = resultList.map((res) => {
            return {
                ...res,
                department,
                semester,
                courseId: course,
            };
        });
        const result = { marks: mergedResult };
        addMultipleLabMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/lab/multiple",
        });
    };

    return (
        <div>
            <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-x-12">
                    <div className="grid grid-cols-1 items-start">
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
                                    Select A Department
                                </option>
                                {departments.map((dept) => {
                                    return (
                                        <option
                                            key={dept._id}
                                            value={dept.name}
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
                                    Select A Session
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
                                    Select A Semester
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
                                    Select A Course
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
                    {/* form-2 */}
                    <div className="w-full mt-8 mark_input_form_wrapper">
                        <div className="mark_input_form_container">
                            <div className="mark">
                                <h3>Student Roll</h3>
                            </div>
                            <div className="mark">
                                <h3>Lab Total Mark</h3>
                            </div>

                            {studentData?.map((student, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <input
                                            type="text"
                                            {...register(
                                                `resultList.${index}.roll`
                                            )}
                                            readOnly
                                            defaultValue={student.roll}
                                            disabled={!isCourseSelect}
                                        />
                                        <input
                                            type="text"
                                            placeholder=""
                                            {...register(
                                                `resultList.${index}.labTotal`
                                            )}
                                            disabled={!isCourseSelect}
                                        />
                                    </React.Fragment>
                                );
                            })}
                        </div>
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

export default MultipleStudentForm;
