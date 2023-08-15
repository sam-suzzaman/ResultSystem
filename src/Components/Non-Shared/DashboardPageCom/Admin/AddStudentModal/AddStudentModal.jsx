import { AiOutlineClose } from "react-icons/ai";

const AddStudentModal = () => {
    return (
        <div>
            <input
                type="checkbox"
                id="add_student_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <div className="modal-action">
                        <label
                            htmlFor="add_student_modal"
                            className="btn btn-xs text-white btn-error text-base font-medium rounded-full capitalize"
                        >
                            <AiOutlineClose />
                        </label>
                    </div>
                    <h3 className="font-bold text-lg text-center">
                        Add Student
                    </h3>
                    <p className="py-4">
                        This modal works with a hidden checkbox!
                    </p>
                    <button className="btn btn-sm rounded-sm text-white bg-[#3ab16a] hover:bg-[#2e9657] text-xs font-normal  capitalize">
                        Add student
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddStudentModal;
