import { AiOutlineClose } from "react-icons/ai";
import TextInputField from "../../../../Shared/TextInputField/TextInputField";
import { useForm } from "react-hook-form";

const AddStudentModal = () => {
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
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        autoComplete="off"
                    >
                        <TextInputField
                            value={{
                                ...register("username", {
                                    required: {
                                        value: true,
                                        message: "Username is required",
                                    },
                                }),
                            }}
                            errors={errors}
                            fieldName="username"
                            fieldTitle="student name"
                            fieldType="text"
                        />
                        <TextInputField
                            value={{
                                ...register("roll", {
                                    required: {
                                        value: true,
                                        message: "Roll Number is required",
                                    },
                                }),
                            }}
                            errors={errors}
                            fieldName="roll"
                            fieldTitle="student id"
                            fieldType="text"
                        />
                        <TextInputField
                            value={{
                                ...register("session", {
                                    required: {
                                        value: true,
                                        message: "Student must have a session",
                                    },
                                }),
                            }}
                            errors={errors}
                            fieldName="session"
                            fieldTitle="student session"
                            fieldType="text"
                        />
                        <TextInputField
                            value={{
                                ...register("password", {
                                    required: {
                                        value: true,
                                        message: "Enter a login password",
                                    },
                                }),
                            }}
                            errors={errors}
                            fieldName="password"
                            fieldTitle="password"
                            fieldType="password"
                        />
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
