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
import Wrapper from "../../../../../../assets/wrappers/Admin/ExternalMarkFormWrapper";

const MultipleStudentForm = () => {
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
    const [isCourseSelect, setIsCourseSelect] = useState(false);
    const [sessionData, setSessionData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [studentData, setStudentData] = useState([]);

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");
    const courseWatch = watch("course");

    const isGoToThirdExaminer = (firstExaminerNumber, secondExaminerNumber) => {
        // if (
        //     firstExaminerNumber === undefined ||
        //     secondExaminerNumber == undefined
        // ) {
        //     // console.log("if block");
        //     firstExaminerNumber = Number(firstExaminerNumber);
        //     secondExaminerNumber = Number(secondExaminerNumber);
        //     const difference = Math.abs(
        //         firstExaminerNumber - secondExaminerNumber
        //     );
        //     if (difference >= 12) {
        //         return [true, difference];
        //     }
        //     return [false, difference];
        // } else {
        //     // console.log("else block");
        //     return [false, "not available"];
        // }
        if (
            firstExaminerNumber === undefined ||
            secondExaminerNumber === undefined ||
            firstExaminerNumber === "" ||
            secondExaminerNumber === ""
        ) {
            return [false, "not available"];
        } else {
            firstExaminerNumber = Number(firstExaminerNumber);
            secondExaminerNumber = Number(secondExaminerNumber);
            const difference = Math.abs(
                firstExaminerNumber - secondExaminerNumber
            );
            if (difference >= 12) {
                return [true, difference];
            }
            return [false, difference];
        }
    };

    const addMultipleExternalMarkMutation = useMutation({
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
        console.log(data);
        const { department, session, semester, course, resultList } = data;

        const mergedResult = resultList.map((res) => {
            return {
                ...res,
                thirdExaminer: res.thirdExaminer || 0,
                department,
                semester,
                courseId: course,
            };
        });

        const result = { marks: mergedResult };
        addMultipleExternalMarkMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/mark/external/multiple",
        });
    };

    return (
        <Wrapper>
            <div>
                <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <div className="grid grid-cols-1 items-start">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Department
                                    </span>
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
                        {/* form-2 */}
                        <div className="w-full mt-8 external_multiple_mark_wrapper">
                            <div className="external_multiple_mark_container">
                                <div className="mark">
                                    <h3>Student Roll</h3>
                                </div>
                                <div className="mark">
                                    <h3>First Examiner Mark</h3>
                                </div>
                                <div className="mark">
                                    <h3>Second Examiner Mark</h3>
                                </div>
                                <div className="mark">
                                    <h3>Difference</h3>
                                </div>
                                <div className="mark">
                                    <h3>Third Examiner Mark</h3>
                                </div>

                                {studentData?.map((student, index) => {
                                    const firstExaminerWatch = watch(
                                        `resultList.${index}.firstExaminer`
                                    );
                                    const secondExaminerWatch = watch(
                                        `resultList.${index}.secondExaminer`
                                    );
                                    let dif = isGoToThirdExaminer(
                                        firstExaminerWatch,
                                        secondExaminerWatch
                                    );
                                    // console.log("render", dif);
                                    return (
                                        <React.Fragment key={index}>
                                            <input
                                                type="text"
                                                {...register(
                                                    `resultList.${index}.roll`
                                                )}
                                                defaultValue={student.roll}
                                                readOnly
                                                disabled={!isCourseSelect}
                                            />
                                            <input
                                                type="text"
                                                placeholder=""
                                                {...register(
                                                    `resultList.${index}.firstExaminer`
                                                )}
                                                readOnly={!isCourseSelect}
                                            />
                                            <input
                                                type="text"
                                                placeholder=""
                                                {...register(
                                                    `resultList.${index}.secondExaminer`
                                                )}
                                                readOnly={!isCourseSelect}
                                            />
                                            <span className="text-xs font-medium capitalize text-center ">
                                                {dif[1]}
                                            </span>
                                            <input
                                                type="text"
                                                placeholder=""
                                                {...register(
                                                    `resultList.${index}.thirdExaminer`
                                                )}
                                                readOnly={dif[0]}
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
        </Wrapper>
    );
};

const StudentInput = React.memo(
    ({ student, index, register, isCourseSelect }) => {
        // ... Your input fields and logic here ...
    },
    (prevProps, nextProps) => {
        // Only re-render if isCourseSelect changes
        return prevProps.isCourseSelect === nextProps.isCourseSelect;
    }
);
export default MultipleStudentForm;
