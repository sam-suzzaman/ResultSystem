import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllHandler } from "../../../../../../utils/fetchHandlers";

const departments = [
    { _id: 1, name: "EEE", displayName: "Electical & Electronic Engineering" },
    { _id: 2, name: "CSE", displayName: "Computer Science &  Engineering" },
    { _id: 3, name: "ESE", displayName: "Environmental Science & Engineering" },
];
const sessions = [
    { _id: 1, session: "2017-18" },
    { _id: 2, session: "2018-19" },
    { _id: 3, session: "2019-20" },
    { _id: 4, session: "2020-21" },
];
const semesters = [
    { _id: 1, semester: 1 },
    { _id: 2, semester: 2 },
    { _id: 3, semester: 3 },
    { _id: 4, semester: 4 },
    { _id: 5, semester: 5 },
    { _id: 6, semester: 6 },
    { _id: 7, semester: 7 },
    { _id: 8, semester: 8 },
];
const courses = [
    { _id: 1, title: "Electrical Circuit" },
    { _id: 2, title: "Power System I" },
];
const assessments = [
    { _id: 1, title: "Attendance", value: "attendance" },
    { _id: 2, title: "Midterm One", value: "midOne" },
    { _id: 3, title: "Midterm Two", value: "midTwo" },
    {
        _id: 4,
        title: "Assignment/Presentation",
        value: "presentationOrAssignment",
    },
];
const SingleStudentForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [isDeptSelected, setIsDeptSelected] = useState(false);
    const [isSessionSelected, setIsSessionSelected] = useState(false);
    const [isSemesterSelect, setIsSemesterSelect] = useState(false);
    const [isCourseSelect, setIsCourseSelect] = useState(false);
    const [courseData, setCourseData] = useState([]);

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");
    const courseWatch = watch("course");

    useEffect(() => {
        if (deptWatch && deptWatch !== "default") {
            setIsDeptSelected(true);
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

    const onSubmit = (data) => console.log(data);

    return (
        <div className="">
            <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
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
                                Select A Department
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
                                Select A Session
                            </option>
                            {sessions.map((session) => {
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
                            <span className="label-text">
                                First Examiner's Mark
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isCourseSelect}
                            {...register("firstExaminer", {
                                max: {
                                    value: 60,
                                    message: "Max (60) marks",
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
                        {errors?.firstExaminer && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.firstExaminer?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Second Examiner's Mark
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isCourseSelect}
                            {...register("secondExaminer", {
                                max: {
                                    value: 60,
                                    message: "Max (60) marks",
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
                        {errors?.secondExaminer && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.secondExaminer?.message}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Third Examiner's Mark
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm"
                            disabled={!isCourseSelect}
                            {...register("thirdExaminer", {
                                max: {
                                    value: 60,
                                    message: "Max (60) marks",
                                },
                                min: {
                                    value: 0,
                                    message: "At least 0 (not negative)",
                                },
                            })}
                        />
                        {errors?.thirdExaminer && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.thirdExaminer?.message}
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
