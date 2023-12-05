import React from "react";
import styled from "styled-components";

const ResetPassword = () => {
    return (
        <Wrapper>
            <form action="" className="w-full max-w-sm reset-form">
                <div className="flex flex-col justify-center items-center  gap-4 shadow-lg px-6 py-8">
                    <h3 className="text-lg md:text-2xl font-semibold  mb-4 mt-4 opacity-80 text-center text-secondary">
                        Reset Passowrd
                    </h3>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xs font-medium opacity-90">
                                Previous Passowrd
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm input-sm"
                        />
                        {/* <label className="label">
                            <span className="label-text-alt text-xs font-medium text-red-600">
                                Bottom Left label
                            </span>
                        </label> */}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xs font-medium opacity-90">
                                New Passowrd
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full rounded-sm input-sm"
                        />
                        {/* <label className="label">
                            <span className="label-text-alt text-xs font-medium text-red-600">
                                Bottom Left label
                            </span>
                        </label> */}
                    </div>
                    <div className="">
                        <button className="reset_btn">reset</button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    .reset-form {
        border-radius: 6px;
        background: #ffffff;
        box-shadow: -11px -11px 22px #d4d4d4, 11px 11px 22px #f8f8f8;
    }
    .reset_btn {
        margin-top: 16px;
        display: inline-block;
        border: 1px solid gray;
        background-color: var(--primary-clr);
        color: #fff;
        padding: 6px 30px;
        text-transform: capitalize;
        border-radius: 4px;
        transition: all 0.2s linear;
    }
    .reset_btn:hover {
        background-color: var(--secondary-clr);
    }
`;
export default ResetPassword;
