import React, { useState } from "react";

import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";
import InternalMarkPDF from "../../AddMarkPageCom/InternalMark/InternalMarkPDF";

import { useResultStepContext } from "../../../../../../context/Admin/ResultStepContext";

// todo: fetch data
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

const StepTwo = () => {
    const { step, setStep, stepOneValue, setStepOneValue } =
        useResultStepContext();
    const [results, setResults] = useState(resultList);

    return (
        <Wrapper>
            <div className="row-1 mb-4 mt-1">
                <h3 className="text-[22px] text-secondary capitalize font-bold">
                    your Search Result
                </h3>
                <button className="submit_btn px-6 py-2 text-sm font-medium capitalize rounded-md">
                    publish
                </button>
                {/* <button className="back_btn px-6 py-2 text-sm font-medium capitalize rounded-md">
                    back
                </button> */}
            </div>
            <div className="w-full">
                <PDFViewer width={1250} height={540}>
                    {/* <SemesterPDF colData={colData} /> */}
                    {/* <CourseFinalResultPDF data={rearrangedMark} /> */}
                    <InternalMarkPDF
                        results={results}
                        stepOneValue={stepOneValue}
                    />
                </PDFViewer>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .row-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 10px;
    }
`;

export default StepTwo;
