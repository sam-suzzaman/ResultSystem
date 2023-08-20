import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { postHandler } from "../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";

const sessionOptions = [
    {
        _id: "1",
        session: "2010-11",
    },
    {
        _id: "2",
        session: "2011-12",
    },
    {
        _id: "3",
        session: "2012-13",
    },
    {
        _id: "4",
        session: "2013-14",
    },
    {
        _id: "5",
        session: "2014-15",
    },
    {
        _id: "6",
        session: "2015-16",
    },
    {
        _id: "7",
        session: "2016-17",
    },
    {
        _id: "8",
        session: "2017-18",
    },
    {
        _id: "9",
        session: "2018-19",
    },
    {
        _id: "10",
        session: "2019-20",
    },
    {
        _id: "11",
        session: "2020-21",
    },
    {
        _id: "12",
        session: "2022-23",
    },
    {
        _id: "13",
        session: "2024-25",
    },
    {
        _id: "14",
        session: "2026-27",
    },
    {
        _id: "15",
        session: "2028-29",
    },
    {
        _id: "16",
        session: "2030-31",
    },
];

const AddSessionModal = ({ setOpenAddSessionModal }) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    // create query client
    const queryClient = useQueryClient();
    const createSessionMutation = useMutation({
        mutationFn: postHandler,
        onSuccess: (data, variable, context) => {
            queryClient.invalidateQueries("sessionList");
            setOpenAddSessionModal(false);
            toast("New Session Added");
            reset();
        },
        onError: (error, variables, context) => {
            // An error happened!
            toast.warn(error.response.data.errors.common);
        },
    });

    const sessionFormHandler = (data) => {
        createSessionMutation.mutate({
            body: data,
            url: "https://student-management-delta.vercel.app/session",
        });
    };

    return (
        <div>
            <input
                type="checkbox"
                id="add_session_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box max-w-[500px] w-full rounded-sm">
                    <div className="modal-action mt-0">
                        <label
                            htmlFor="add_session_modal"
                            className="btn btn-xs text-white btn-error text-sm font-bold rounded-full capitalize"
                        >
                            <AiOutlineClose />
                        </label>
                    </div>
                    <h3 className="font-bold text-lg text-center mb-6">
                        Add Session
                    </h3>
                    <form onSubmit={handleSubmit(sessionFormHandler)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Department Name
                                </span>
                            </label>
                            <input
                                {...register("department")}
                                type="text"
                                className="input input-bordered w-full rounded-sm"
                                defaultValue="EEE"
                                readOnly
                            />
                            {/* <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    Bottom Left label
                                </span>
                            </label> */}
                        </div>
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Session
                                </span>
                            </label>
                            <select
                                className="select w-full select-bordered rounded-sm"
                                {...register("session", {
                                    validate: {
                                        isSelectSession: (value) => {
                                            return (
                                                value !== "default" ||
                                                "Session is Required"
                                            );
                                        },
                                    },
                                })}
                                defaultValue="default"
                            >
                                <option readOnly value="default">
                                    Select A Session
                                </option>
                                {sessionOptions.map((session) => {
                                    return (
                                        <option key={session._id}>
                                            {session.session}
                                        </option>
                                    );
                                })}
                            </select>
                            <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    {errors?.session?.message}
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-center mt-3 mb-6">
                            <button className="btn btn-sm rounded-sm bg-[#2d9958] text-white hover:bg-[#4fa070] text-xs font-medium">
                                create session
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSessionModal;
