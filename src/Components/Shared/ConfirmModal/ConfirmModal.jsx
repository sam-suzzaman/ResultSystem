import React from "react";

const ConfirmModal = ({ message, handleDeleteProcess }) => {
    return (
        <>
            <input
                type="checkbox"
                id="confirm_modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <p className="py-4 text-lg text-center capitalize font-medium text-error">
                        {message}
                    </p>
                    <div className="modal-action justify-center mt-0">
                        <label
                            htmlFor="confirm_modal"
                            className="btn btn-sm btn-error"
                            onClick={() => handleDeleteProcess(true)}
                        >
                            yes
                        </label>
                        <label
                            htmlFor="confirm_modal"
                            className="btn btn-sm btn-success"
                            onClick={() => handleDeleteProcess(false)}
                        >
                            no
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmModal;
