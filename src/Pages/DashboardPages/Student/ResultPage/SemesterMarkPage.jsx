import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { departments, semesters } from "../../../../utils/AddMarkFieldsData";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import { useUserContext } from "../../../../context/Admin/UserContext";
import axios from "axios";
import styled from "styled-components";
import useFetchConfig from "../../../../utils/useFetchConfig";

const SemesterMarkPage = () => {
    // States
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ status: false, message: "" });

    // Hooks
    const config = useFetchConfig();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    // Form Submit Handler
    const onSubmit = async (data) => {
        setLoading(true);

        // Fetch Result Data
        try {
            const url = `https://student-management-delta.vercel.app/user-info/marks/${data?.semester}`;
            const response = await axios.get(url, config);
            setResult(response?.data?.result);
            setLoading(false);
            console.log(response);
            // handling errors
            if (response?.data?.result) {
                console.log(response.data.result);
                setError({ status: false, message: "" });
            } else {
                setError({ status: true, message: "--- No Result Found ---" });
            }
        } catch (error) {
            setResult(null);
            setError({ status: true, message: "--- No Result Found ---" });
            setLoading(false);
            console.log(error);
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
                            Semester Final
                        </h4>
                    </div>
                    <div className="mt-8 bg-gray-100 px-8 py-4 rounded-md ">
                        <form
                            action=""
                            className="w-full max-w-5xl mx-auto"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="flex justify-center  gap-8">
                                {/* Semseter */}
                                <div className="form-control w-full max-w-sm">
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

                                {/* Submit */}
                                <div className="inline-flex items-end mt-1">
                                    <button
                                        type="submit"
                                        className="result-btn disabled:cursor-not-allowed"
                                        disabled={loading}
                                    >
                                        {loading ? "loading..." : "search"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* {loading && (
                        <h2 className="capitalize text-center text-xl text-red-600 mt-10">
                            loading...
                        </h2>
                    )} */}
                </div>
                <div className="mt-16">
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
                        <div className="overflow-x-auto mt-4">
                            <table className="result-table number">
                                <tr>
                                    <th>Course Code</th>
                                    <th>Course Title</th>
                                    <th className="txt_cntr">Obtained CGPA</th>
                                    <th className="txt_cntr">Obtined Grade</th>
                                </tr>
                                {result?.marksWithImprove?.map((data) => {
                                    return (
                                        <tr>
                                            <td className="number">
                                                {data?.courseCode}
                                            </td>
                                            <td className="number">
                                                {data?.courseName}
                                            </td>
                                            <td className="text-center cgpa number">
                                                {data?.regular?.GP}
                                            </td>
                                            <td className="text-center number">
                                                {data?.regular?.LG}
                                            </td>
                                        </tr>
                                    );
                                })}
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
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.5px;
        border: 1px solid #ddd;
        padding: 8px;
        /* text-align: center; */
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

export default SemesterMarkPage;
