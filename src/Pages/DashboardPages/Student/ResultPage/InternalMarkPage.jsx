import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { departments, semesters } from "../../../../utils/AddMarkFieldsData";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import { useUserContext } from "../../../../context/Admin/UserContext";
import axios from "axios";
import styled from "styled-components";
import { Result } from "postcss";

const InternalMarkPage = () => {
    // States
    const [courseData, setCourseData] = useState([]);
    const [isSemesterSelect, setIsSemesterSelect] = useState(false);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ status: false, message: "" });

    // Contexts
    const { user } = useUserContext();

    // Hooks
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const semesterWatch = watch("semester");

    // Fetching Courses Data
    useEffect(() => {
        if (semesterWatch) {
            setIsSemesterSelect(true);
            const url = `https://student-management-delta.vercel.app/course/${user?.session}/${user?.department}/${semesterWatch}`;
            getAllHandler(url)
                .then((res) => setCourseData(res))
                .catch((err) => console.log(err));
        } else {
            setIsSemesterSelect(false);
        }
    }, [semesterWatch]);

    // Form Submit Handler
    const onSubmit = async (data) => {
        setLoading(true);
        const selectedCourse = courseData.find(
            (course) => course?._id === data.course
        );

        // Fetch Result Data
        try {
            const url = `https://student-management-delta.vercel.app/mark/theory-mark/${user?.department}/${user?.session}/${data.semester}/${selectedCourse.courseName}/${selectedCourse.courseCode}/${data.roll}`;
            const response = await axios.get(url);
            setResult(response?.data?.result);
            setLoading(false);

            // handling errors
            if (response?.data?.result) {
                setError({ status: false, message: "" });
            } else {
                setError({ status: true, message: "--- No Result Found ---" });
            }
        } catch (error) {
            setError({ status: true, message: error?.message });
            setLoading(false);
            // console.log(error);
        }
    };

    return (
        <Wrapper>
            <div className="w-full">
                <div className="top-row w-full">
                    <div className="">
                        <h4 className="sec-title text-center">
                            explore result
                        </h4>
                        <h4 className="text-base font-medium  capitalize text-center">
                            Internal
                        </h4>
                    </div>
                    <div className="mt-8 bg-gray-100 px-8 py-4 rounded-md ">
                        <form
                            action=""
                            className="w-full max-w-5xl mx-auto"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="grid grid-cols-4 justify-center gap-8">
                                {/* Semseter */}
                                <div className="form-control w-full col-span-1">
                                    <label className="label">
                                        <span className="label-text">
                                            Semester
                                        </span>
                                    </label>
                                    <select
                                        className="select select-bordered rounded-sm select-sm number"
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
                                                message:
                                                    "Select a Semester first",
                                            },
                                        })}
                                        defaultValue="default"
                                    >
                                        <option disabled value="default">
                                            Select Semester
                                        </option>
                                        {semesters?.map((semester) => {
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
                                    {errors?.semester && (
                                        <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                            {errors.semester?.message}
                                        </span>
                                    )}
                                </div>
                                {/* course */}
                                <div className="form-control w-full col-span-2">
                                    <label className="label">
                                        <span className="label-text">
                                            Course
                                        </span>
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
                                                message: "Select one course",
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
                                                Empty course list
                                            </option>
                                        ) : (
                                            courseData?.map((course) => {
                                                return (
                                                    // course?.credit !== 1.5 && (
                                                    <option
                                                        key={course._id}
                                                        value={course?._id}
                                                        className="number"
                                                    >
                                                        {course.courseName} (
                                                        {course.courseCode})
                                                    </option>
                                                    // )
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

                                {/* Roll */}
                                <div className="form-control w-full col-span-1">
                                    <label className="label">
                                        <span className="text-[13px] text-black font-medium">
                                            Roll
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your roll"
                                        className="input input-bordered w-full input-sm rounded-sm number"
                                        {...register("roll")}
                                        defaultValue={user?.roll}
                                        readOnly
                                    />
                                </div>
                            </div>

                            {/* submit */}
                            <div className="flex justify-center mt-1">
                                <button
                                    type="submit"
                                    className="result-btn disabled:cursor-not-allowed"
                                    disabled={loading}
                                >
                                    {loading ? "loading..." : "search"}
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* {loading && (
                        <h2 className="capitalize text-center text-xl text-red-600 mt-10">
                            loading...
                        </h2>
                    )} */}
                </div>
                <div className="mt-20">
                    {error?.status && (
                        <h3 className="capitalize font-semibold text-2xl text-red-600 mb-3 text-center">
                            {error?.message}
                        </h3>
                    )}
                    {result && (
                        <h3 className="capitalize font-semibold text-xl text-primary mb-3 text-center">
                            Your Search Result
                        </h3>
                    )}
                    {result && (
                        <div className="overflow-x-auto">
                            <table className="result-table w-full">
                                <tr>
                                    <th>Roll</th>
                                    <th>Course Code</th>
                                    <th>Course Title</th>
                                    <th>Attendance(10)</th>
                                    <th>Midterm-I(10)</th>
                                    <th>Midterm-II(10)</th>
                                    <th>Assignment(10)</th>
                                    <th>Total(40)</th>
                                </tr>
                                <tr>
                                    <td className="number">{result?.roll}</td>
                                    <td className="number">
                                        {result?.courseCode}
                                    </td>
                                    <td className="number">
                                        {result?.courseName}
                                    </td>
                                    <td className="text-center number">
                                        {result?.attendance}
                                    </td>
                                    <td className="text-center number">
                                        {result?.midOne}
                                    </td>
                                    <td className="text-center number">
                                        {result?.midTwo}
                                    </td>
                                    <td className="text-center number">
                                        {result?.presentationOrAssignment}
                                    </td>
                                    <td className="text-center number">
                                        {result?.totalInternal}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .sec-title {
        margin-top: 20px;
        font-size: calc(22px + 0.75vw);
        text-transform: capitalize;
        font-weight: 700;
        color: var(--primary-clr);
    }

    .result-btn {
        display: inline-block;
        padding: 5px 30px;
        text-transform: capitalize;
        font-size: calc(13px + 0.3vw);
        border-radius: 6px;
        transition: all 0.3s linear;
        margin-top: calc(8px + 1vh);
        background-color: var(--primary-clr);
        color: var(--white-clr);
    }
    .result-btn:hover {
        background-color: var(--secondary-clr);
    }

    .result-table {
        /* margin-top: calc(20px + 3vw); */
        /* margin-top: 20px; */
        border-collapse: collapse;
        width: 100%;
    }

    .result-table td,
    .result-table th {
        color: var(--white-black);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        border: 1px solid #ddd;
        padding: 8px;
    }
    .result-table th {
        text-align: left;
        background-color: var(--primary-clr);
        color: #fff;
        font-weight: 400;
    }
    .result-table th.txt_cntr {
        text-align: center;
    }
    .result-table td.cgpa {
        font-weight: 400;
        font-family: var(--roboto);
    }
    .zero-result {
        font-size: calc(14px + 0.6vw);
        font-weight: 500;
        text-align: center;
        text-transform: capitalize;
        margin-top: calc(20px + 3vw);
        color: #b52a2a;
    }
`;

export default InternalMarkPage;
