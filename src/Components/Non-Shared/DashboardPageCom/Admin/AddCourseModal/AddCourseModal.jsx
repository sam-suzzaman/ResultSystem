import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

const AddCourseModal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

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
                    <h3 className="font-bold text-lg text-center mb-6 capitalize">
                        Add course
                    </h3>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-medium">
                                    Department Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                defaultValue="EEE"
                                disabled
                            />
                        </div>
                        <div className="flex justify-center mt-6 mb-6">
                            <button className="btn btn-xs rounded-sm bg-[#2d9958] text-white hover:bg-[#4fa070] text-xs font-medium">
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
