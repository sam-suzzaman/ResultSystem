import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useQueryClient, useMutation } from "react-query";
import { postHandler } from "../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";

import {
    departments,
    JobPosition,
} from "../../../../../utils/AddMarkFieldsData";
import Swal from "sweetalert2";

const AddTeacherModal = ({ setIsShowAddTeacherModal }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();
    const createTeacherMutation = useMutation({
        mutationFn: postHandler,
        onSuccess: (data, variable, context) => {
            queryClient.invalidateQueries("teachersList");
            // toast.success("Teacher add Successfylly");
            Swal.fire({
                icon: "success",
                title: "Done...",
                text: "Teacher add Successfylly",
            });
            reset();
            // setIsShowAddTeacherModal(false);
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.errors.message || "Something wrong",
            });
        },
    });

    const addTeacherFormHandler = (data) => {
        createTeacherMutation.mutate({
            body: data,
            url: "https://student-management-delta.vercel.app/user/create-faculty",
        });
    };

    return (
        <div>
            <input
                type="checkbox"
                id="add_teacher_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box max-w-[500px] w-full rounded-sm">
                    <div className="modal-action mt-0">
                        <label
                            htmlFor="add_teacher_modal"
                            className=" p-1 cursor-pointer text-white btn-error text-sm font-extrabold rounded-full capitalize"
                        >
                            <AiOutlineClose />
                        </label>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold text-primary  text-xl text-center capitalize">
                            Add Teacher
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit(addTeacherFormHandler)}>
                        {/* name */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Name
                                </span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Teacher name is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered input-sm  w-full rounded-sm capitalize"
                            />
                            {errors?.name && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.name?.message}
                                </span>
                            )}
                        </div>
                        {/* email */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Email
                                </span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Valid email is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered input-sm w-full rounded-sm"
                            />
                            {errors?.email && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>

                        {/* department */}
                        <div className="form-control w-full mb-3">
                            <label className="label">
                                <span className="label-text">Department</span>
                            </label>
                            <select
                                className="select select-bordered rounded-sm select-sm text-[13px]"
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

                        {/* Job Position */}
                        <div className="form-control w-full mb-3">
                            <label className="label">
                                <span className="label-text">Job Position</span>
                            </label>
                            <select
                                className="select select-bordered rounded-sm select-sm text-[13px]"
                                {...register("designation", {
                                    validate: {
                                        isValidValue: (value) => {
                                            return (
                                                value !== "default" ||
                                                "Teacher's job position required"
                                            );
                                        },
                                    },
                                })}
                                defaultValue="default"
                            >
                                <option disabled value="default">
                                    Select a Position
                                </option>
                                {JobPosition?.map((position) => {
                                    return (
                                        <option
                                            key={position._id}
                                            value={position.name}
                                            className="number"
                                        >
                                            {position.name}
                                        </option>
                                    );
                                })}
                            </select>
                            {errors?.designation && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.designation?.message}
                                </span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Password
                                </span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password is required",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Too short (atleast 8char)",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "Too long (max 20char)",
                                    },
                                })}
                                type="text"
                                className="input input-bordered input-sm w-full rounded-sm number"
                            />
                            {errors?.password && (
                                <span className=" mt-1 label-text-alt text-xs font-normal capitalize text-red-700">
                                    {errors.password?.message}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-center mt-6 mb-4">
                            <button className="btn btn-sm rounded-sm bg-primary text-white hover:bg-secondary text-xs font-medium">
                                Add teacher
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTeacherModal;
