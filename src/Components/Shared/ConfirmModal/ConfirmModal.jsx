import React from "react";

const ConfirmModal = ({ message, handleDeleteProcess }) => {
    return (
        <>
            <input
                type="checkbox"
                id="confirm_modal"
                className="modal-toggle"
            />
            <div className="modal ">
                <div className="modal-box rounded-sm py-8 w-full max-w-sm">
                    <p className="mb-1 text-center text-base  uppercase font-medium  text-[#df4848]">
                        Are you sure?
                    </p>
                    <p className="mb-4 text-[13px] text-center  uppercase font-medium  text-[#464646]">
                       Note: {message}
                    </p>
                    <div className="modal-action justify-center mt-0">
                        <label
                            htmlFor="confirm_modal"
                            className="btn btn-xs bg-[#31c153] hover:bg-[#4bac62] rounded-sm text-white"
                            onClick={() => handleDeleteProcess(true)}
                        >
                            yes
                        </label>
                        <label
                            htmlFor="confirm_modal"
                            className="btn btn-xs bg-[#c13831] hover:bg-[#d85151] rounded-sm text-white"
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
