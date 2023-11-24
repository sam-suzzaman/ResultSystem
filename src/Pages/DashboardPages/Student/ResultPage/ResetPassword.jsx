import React from "react";
import styled from "styled-components";

const ResetPassword = () => {
    return (
        <Wrapper>
            <form action="" className="w-full max-w-sm">
                <div className="flex flex-col justify-center items-center  gap-4 shadow-lg px-4 py-8">
                    <h3 className="text-lg md:text-xl font-semibold  mb-4 mt-4 opacity-90 text-center">
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
                        <label className="label">
                            <span className="label-text-alt text-xs font-medium text-red-600">
                                Bottom Left label
                            </span>
                        </label>
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
                        <label className="label">
                            <span className="label-text-alt text-xs font-medium text-red-600">
                                Bottom Left label
                            </span>
                        </label>
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

    .reset_btn {
        display: inline-block;
        border: 1px solid gray;
        background-color: #189341;
        color: #fff;
        padding: 6px 20px;
        text-transform: capitalize;
        border-radius: 4px;
    }
`;
export default ResetPassword;
