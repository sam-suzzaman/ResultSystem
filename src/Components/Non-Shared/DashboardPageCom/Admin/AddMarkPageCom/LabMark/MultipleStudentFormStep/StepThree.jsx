import React from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";

import styled from "styled-components";

import done from "../../../../../../../assets/done.png";

import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const StepThree = () => {
    const {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepTwoValue,
        selectedCourse,
    } = useMarkFormStepContext();
    return (
        <Wrapper>
            <div className="result-container">
                <div className="flex justify-center">
                    <img className="done" src={done} alt="success" />
                </div>
                <div className="">
                    <div className="">
                        <h4 className="capitalize font-bold text-3xl text-primary">
                            done
                        </h4>
                        <h6 className="mt-2 capitalize font-normal text-[17px] text-secondary number">
                            Marks submitted successfully
                        </h6>
                    </div>
                    <div className="flex  items-center gap-x-5 mt-5">
                        <button
                            onClick={() => setStepValue(1)}
                            className="btn btn-sm text-xs font-normal bg-primary rounded-sm text-white hover:bg-secondary px-4"
                        >
                            <span className="text-lg font-bold">
                                <AiOutlinePlus />
                            </span>
                            add new
                        </button>
                        <Link
                            to="/dashboard/admin/get-mark"
                            className="btn btn-sm text-xs font-normal bg-primary rounded-sm text-white hover:bg-secondary px-4"
                        >
                            <span className="text-lg font-bold">
                                <FiEye />
                            </span>
                            view
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    .result-container {
        margin-top: 70px;
        width: 100%;
        max-width: 750px;
        padding: 3rem 2rem;
        border-radius: 10px;
        background: #ffffff;
        /* box-shadow: 20px 20px 60px #c4c4c4, -20px -20px 60px #ffffff; */
        display: grid;
        grid-template-columns: minmax(auto, 300px) 1fr;
        align-items: center;
        column-gap: 30px;
    }
    .done {
        width: 100%;
        max-width: 300px;
    }
`;

export default StepThree;
