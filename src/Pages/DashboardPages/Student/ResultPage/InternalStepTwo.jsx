import React, { useState } from "react";

import { semesters } from "../../../../utils/AddMarkFieldsData";
import { useResultContext } from "../ResultPage";

const InternalStepTwo = () => {
    const { step, setStep, setProcessValue } = useResultContext();
    const [showResult, setShowResult] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowResult(true);
        setProcessValue(3);
    };

    const handleBackBtn = () => {
        setProcessValue(1);
        setStep(1);
    };
    return (
        <div className="mt-16">
            <div className="top-row">
                <h4 className="text-lg font-bold uppercase">
                    Search Your Result
                </h4>
                <div className="mt-4">
                    <form action="" className="" onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-3 justify-center gap-8 flex-1">
                            {/* Semseter */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-sm">
                                        Select Semester
                                    </span>
                                </label>
                                <select className="select select-bordered select-sm rounded-sm">
                                    <option disabled selected>
                                        Semester
                                    </option>
                                    {semesters?.map((value) => {
                                        return (
                                            <option
                                                value={value?.semester}
                                                key={value?._id}
                                            >
                                                {value?.semester}
                                            </option>
                                        );
                                    })}
                                </select>
                                <label className="label">
                                    <span className="label-text-alt text-[11px] text-red-600 font-medium wider">
                                        Bottom Left label
                                    </span>
                                </label>
                            </div>
                            {/* course */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-sm">
                                        Select Course
                                    </span>
                                </label>
                                <select className="select select-bordered select-sm rounded-sm">
                                    <option disabled selected>
                                        Semester
                                    </option>
                                    {semesters?.map((value) => {
                                        return (
                                            <option
                                                value={value?.semester}
                                                key={value?._id}
                                            >
                                                {value?.semester}
                                            </option>
                                        );
                                    })}
                                </select>
                                <label className="label">
                                    <span className="label-text-alt text-[11px] text-red-600 font-medium wider">
                                        Bottom Left label
                                    </span>
                                </label>
                            </div>

                            {/* Roll */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-sm ">
                                        Your Roll
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full input-sm rounded-sm"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-[11px] text-red-600 font-medium wider">
                                        Bottom Left label
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* submit */}
                        <div className="flex justify-center">
                            <button type="submit" className="result-btn mr-4">
                                search
                            </button>
                            <button
                                className="back-btn"
                                onClick={handleBackBtn}
                            >
                                back
                            </button>
                        </div>
                    </form>
                </div>

                {showResult && (
                    <table className="result-table">
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
                            <td>18102930</td>
                            <td>EEE-101</td>
                            <td>Electrical Circuit-I</td>
                            <td className="text-center">08</td>
                            <td className="text-center">08</td>
                            <td className="text-center">08</td>
                            <td className="text-center">08</td>
                            <td className="text-center">32</td>
                        </tr>
                    </table>
                )}
            </div>
        </div>
    );
};

export default InternalStepTwo;
