import React, { useEffect, useState } from "react";

import {
    departments,
    semesters,
} from "../../../../../../utils/AddMarkFieldsData";

import { useForm } from "react-hook-form";
import { useSemesterTranscriptContext } from "../../../../../../Pages/DashboardPages/Student/SemesterTranscriptPage";
import styled from "styled-components";
import { getAllHandler } from "../../../../../../utils/fetchHandlers";

const StepOneForm = () => {
    const { step, setStep, stepOneValue, setStepOneValue } =
        useSemesterTranscriptContext();

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
    const [sessionData, setSessionData] = useState([]);

    const deptWatch = watch("department");
    const sessionWatch = watch("session");
    const semesterWatch = watch("semester");

    // fetch session data
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

    // checking is session selected
    useEffect(() => {
        if (sessionWatch) {
            setIsSessionSelected(true);
        } else {
            setIsSessionSelected(false);
        }
    }, [sessionWatch]);

    // form handler
    const onSubmit = (data) => {
        setStepOneValue(data);
        setStep(2);
    };

    return (
        <Wrapper>
            <div className="w-full mt-12">
                <div className="mb-10">
                    <h4 className="text-xs font-bold text-center uppercase mb-1">
                        semester final
                    </h4>
                    <h2 className="text-3xl text-center font-bold capitalize ">
                        search transcript
                    </h2>
                </div>
                <form
                    className="w-full max-w-md mx-auto grid grid-cols-1 items-start gap-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    {/* department */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Department</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm number"
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
                            {departments?.map((dept) => {
                                return (
                                    <option
                                        key={dept._id}
                                        value={dept.name}
                                        className="number"
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

                    {/* session */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Session</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm number"
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
                                        className="number"
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

                    {/* semester */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Semester</span>
                        </label>
                        <select
                            className="select select-bordered rounded-sm select-sm number"
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
                                        className="number"
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

                    {/* roll */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Roll</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-sm w-full  rounded-sm number"
                            {...register("roll", {
                                required: {
                                    value: true,
                                    message: "Roll  is Required",
                                },
                            })}
                        />
                        {errors?.roll && (
                            <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                {errors.roll?.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            className="py-2 px-8 bg-primary hover:bg-secondary  text-white text-sm font-semibold capitalize tracking-widest rounded-sm"
                            type="submit"
                        >
                            search
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
`;
export default StepOneForm;
