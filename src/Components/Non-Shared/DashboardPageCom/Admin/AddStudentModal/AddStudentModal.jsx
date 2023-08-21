import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { postHandler } from "../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";

const AddStudentModal = ({ session }) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const createStudentMutation = useMutation({
        mutationFn: postHandler,
        onSuccess: (data, variable, context) => {
            toast.success("Student Created");
            reset();
        },
        onError: (error, variables, context) => {
            toast.warn("Something Wrong");
        },
    });

    const addStudentFormHandler = (data) => {
        const student = { ...data, currentSession: data.session };
        createStudentMutation.mutate({
            body: student,
            url: "https://student-management-delta.vercel.app/user",
        });
    };
    return (
        <div>
            <input
                type="checkbox"
                id="add_student_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box max-w-[500px] w-full rounded-sm">
                    <div className="modal-action mt-0">
                        <label
                            htmlFor="add_student_modal"
                            className="btn btn-xs text-white text-sm btn-error font-bold rounded-full capitalize"
                        >
                            <AiOutlineClose />
                        </label>
                    </div>
                    <h3 className="font-bold text-lg text-center mb-6">
                        Add Student
                    </h3>
                    <form
                        onSubmit={handleSubmit(addStudentFormHandler)}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xs font-medium uppercase">
                                    department
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-bordered rounded-sm w-full p-4"
                                {...register("department", {
                                    required: {
                                        value: true,
                                        message: "Department is Required",
                                    },
                                })}
                                defaultValue="EEE"
                                readOnly
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs font-medium text-red-600">
                                    {errors.department?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xs font-medium uppercase">
                                    student session
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-bordered rounded-sm w-full p-4"
                                {...register("session", {
                                    required: {
                                        value: true,
                                        message: "Session is Required",
                                    },
                                })}
                                defaultValue={session}
                                readOnly
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs font-medium text-red-600">
                                    {errors.session?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xs font-medium uppercase">
                                    username
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-bordered rounded-sm w-full p-4"
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Username is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs font-normal text-red-600">
                                    {errors.username?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xs font-medium uppercase">
                                    student id
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-bordered rounded-sm w-full p-4"
                                {...register("roll", {
                                    required: {
                                        value: true,
                                        message: "Student ID is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs font-normal text-red-600">
                                    {errors.roll?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xs font-medium uppercase">
                                    password
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="input input-bordered rounded-sm w-full p-4"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                })}
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs font-normal text-red-600">
                                    {errors.password?.message}
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button
                                type="submit"
                                className="btn btn-sm rounded-sm text-white bg-[#3ab16a] hover:bg-[#2e9657] text-xs font-normal  uppercase"
                            >
                                Add student
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudentModal;
