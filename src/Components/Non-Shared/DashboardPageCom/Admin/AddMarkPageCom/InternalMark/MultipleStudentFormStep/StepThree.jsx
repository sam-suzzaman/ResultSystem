import React, { useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InternalMarkPDF from "../InternalMarkPDF";
import styled from "styled-components";

import done from "../../../../../../../assets/done.png";

import { FiEye } from "react-icons/fi";

const resultList = [
    {
        _id: 1,
        name: "Rizoan Kabir Akanda",
        roll: "18102901",
        attendance: 10,
        midOne: 8,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 34,
    },
    {
        _id: 2,
        name: "Alpona Akter koly",
        roll: "18102902",
        attendance: 10,
        midOne: 9,
        midTwo: 9,
        presentationOrAssignment: 8,
        total: 36,
    },
    {
        _id: 3,
        name: "Samsuzzaman",
        roll: "18102930",
        attendance: 10,
        midOne: 7,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 33,
    },
    {
        _id: 4,
        name: "Lipon Chandra Roy",
        roll: "18102940",
        attendance: 10,
        midOne: 7,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 33,
    },
];
const StepThree = () => {
    const {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepTwoValue,
        selectedCourse,
    } = useMarkFormStepContext();
    const [results, setResults] = useState(resultList);
    return (
        <Wrapper>
            <div className="result-container">
                <div className="flex justify-center">
                    {/* <span className="font-bold text-5xl text-[#5cd089]">
                            <AiOutlineCheckCircle />
                        </span> */}
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

                        {/* Button to download PDF */}
                        <PDFDownloadLink
                            document={
                                <InternalMarkPDF
                                    results={results}
                                    stepOneValue={stepOneValue}
                                    selectedCourse={selectedCourse}
                                />
                            }
                            fileName="demo"
                        >
                            {({ loading, error }) =>
                                loading ? (
                                    <button className="inline-flex justify-center items-center btn btn-xs text-xs font-medium bg-primary rounded-sm text-white hover:bg-secondary px-4 ">
                                        <span className="text-lg font-bold">
                                            <GoDownload />
                                        </span>
                                        loading...
                                    </button>
                                ) : (
                                    <button className="inline-flex justify-center items-center btn btn-sm text-xs font-medium bg-primary rounded-sm text-white hover:bg-secondary px-4">
                                        <span className="text-lg font-bold">
                                            <GoDownload />
                                            {/* <FiEye /> */}
                                        </span>
                                        download
                                    </button>
                                )
                            }
                        </PDFDownloadLink>
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
