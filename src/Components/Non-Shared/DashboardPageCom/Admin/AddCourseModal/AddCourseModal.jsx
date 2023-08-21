import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { useQueryClient, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { updateHandler } from "../../../../../utils/fetchHandlers";
import { toast } from "react-toastify";

const AddCourseModal = ({ setIsShowAddCourseModal }) => {
    const { session, semester } = useParams();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();
    const createCoursenMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            queryClient.invalidateQueries("courseList");
            toast.success("New Course Added");
            reset();
            // setIsShowAddCourseModal(false);
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            toast.warn("Something Wrong");
        },
    });

    const addCourseFormHandler = (data) => {
        const { courseName, courseCode, credit } = data;
        const course = {
            session,
            department: "EEE",
            course: {
                courseName,
                courseCode: courseCode.toUpperCase(),
                semester: semester * 1,
                credit: credit * 1,
            },
        };
        console.log(course);
        // createCoursenMutation.mutate({
        //     body: course,
        //     url: "https://student-management-delta.vercel.app/session/course",
        // });
    };

    return (
        <div>
            <input
                type="checkbox"
                id="add_course_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box max-w-[600px] w-full rounded-sm">
                    <div className="modal-action mt-0">
                        <label
                            htmlFor="add_course_modal"
                            className="btn btn-xs text-white btn-error text-sm font-bold rounded-full capitalize"
                        >
                            <AiOutlineClose />
                        </label>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-bold  text-sm text-center uppercase">
                            Add course
                        </h3>
                        {/* <h3 className="font-medium text-base text-center uppercase mt-1 mb-1">
                            Dept. of EEE
                        </h3> */}
                        <div className="flex justify-center gap-x-4 mt-1">
                            <h3 className="font-bold  text-xs text-center uppercase">
                                Session:{session}
                            </h3>{" "}
                            <h3 className="font-bold  text-xs text-center uppercase">
                                Semester: {semester}
                            </h3>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(addCourseFormHandler)}>
                        {/* <div className="form-control w-full">
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
                        </div> */}
                        {/* <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Session
                                </span>
                            </label>
                            <input
                                {...register("session")}
                                type="text"
                                className="input input-bordered w-full rounded-sm"
                                defaultValue={session}
                                readOnly
                            />
                        </div> */}
                        {/* <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Semester
                                </span>
                            </label>
                            <input
                                {...register("semester")}
                                type="text"
                                className="input input-bordered w-full rounded-sm"
                                defaultValue={semester}
                                readOnly
                            />
                        </div> */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Course Code
                                </span>
                            </label>
                            <input
                                {...register("courseCode", {
                                    required: {
                                        value: true,
                                        message: "Course Code is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered w-full rounded-sm uppercase"
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    {errors.courseCode?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Course Title
                                </span>
                            </label>
                            <input
                                {...register("courseName", {
                                    required: {
                                        value: true,
                                        message: "Course Title is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered w-full rounded-sm"
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    {errors?.courseName?.message}
                                </span>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Course Credit
                                </span>
                            </label>
                            <input
                                {...register("credit", {
                                    required: {
                                        value: true,
                                        message: "Course Credit is Required",
                                    },
                                })}
                                type="text"
                                className="input input-bordered w-full rounded-sm"
                            />
                            <label className="label">
                                <span className="label-text-alt text-xs  text-red-700">
                                    {errors.credit?.message}
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-center mt-3 mb-4">
                            <button className="btn btn-sm rounded-sm bg-[#2d9958] text-white hover:bg-[#4fa070] text-xs font-medium">
                                Add course
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCourseModal;
