import React, { useEffect, useState } from "react";

import { semesters } from "../../../../utils/AddMarkFieldsData";
import { useResultContext } from "../ResultPage";

const InternalStepTwo = () => {
    const { step, setStep, setProcessValue } = useResultContext();
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        setShowResult(true);
        setProcessValue(3);
    };

    const handleBackBtn = () => {
        setProcessValue(1);
        setStep(1);
    };

    useEffect(() => {
        setInterval(() => {
            setLoading(false);
        }, 3000);
    }, [loading]);

    // if (loading) {
    //     return (
    //         <h2 className="capitalize text-center text-xl text-red-600 mt-16">
    //             loading
    //         </h2>
    //     );
    // }

    return (
        <div className="w-full max-w-4xl">
            <div className="top-row">
                {/* <h4 className="text-lg font-bold uppercase">
                    Search Your Result
                </h4> */}
                <h4 className="text-base font-medium  capitalize text-center">
                    Internal
                </h4>
                <div className="mt-10">
                    <form action="" className="" onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-3 justify-center gap-8 flex-1">
                            {/* Semseter */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-[13px] text-black font medium">
                                        Semester
                                    </span>
                                </label>
                                <select className="select select-bordered select-sm rounded-sm">
                                    <option disabled selected>
                                        Choose a semester
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
                                {/* <label className="label">
                                    <span className="label-text-alt text-[11px] text-red-600 font-medium wider">
                                        Bottom Left label
                                    </span>
                                </label> */}
                            </div>
                            {/* course */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="text-[13px] text-black font-medium">
                                        Course
                                    </span>
                                </label>
                                <select className="select select-bordered select-sm rounded-sm">
                                    <option disabled selected>
                                        Choose one course
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
                                {/* <label className="label">
                                    <span className="label-text-alt text-[11px] text-red-600 font-medium wider">
                                        Bottom Left label
                                    </span>
                                </label> */}
                            </div>

                            {/* Roll */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="text-[13px] text-black font-medium">
                                        Roll
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your roll"
                                    className="input input-bordered w-full input-sm rounded-sm number"
                                />
                                {/* <label className="label">
                                    <span className="label-text-alt text-[11px] text-red-600 font-medium wider">
                                        Bottom Left label
                                    </span>
                                </label> */}
                            </div>
                        </div>

                        {/* submit */}
                        <div className="flex justify-center mt-3">
                            <button type="submit" className="result-btn mr-4">
                                search
                            </button>
                            <button
                                className="back-btn"
                                onClick={handleBackBtn}
                            >
                                previous
                            </button>
                        </div>
                    </form>
                </div>
                {loading && (
                    <h2 className="capitalize text-center text-xl text-red-600 mt-16">
                        loading
                    </h2>
                )}
                {showResult && !loading && (
                    <div className="overflow-x-auto mt-6">
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
                                <td className="number">18102930</td>
                                <td className="number">EEE-101</td>
                                <td className="number">Electrical Circuit-I</td>
                                <td className="text-center number">08</td>
                                <td className="text-center number">08</td>
                                <td className="text-center number">08</td>
                                <td className="text-center number">08</td>
                                <td className="text-center number">32</td>
                            </tr>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InternalStepTwo;
