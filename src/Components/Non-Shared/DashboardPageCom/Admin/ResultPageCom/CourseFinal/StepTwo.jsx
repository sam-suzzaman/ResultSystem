import React, { useState } from "react";

import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";

import { useResultStepContext } from "../../../../../../context/Admin/ResultStepContext";

// import CourseFinalResultPDF from "../../../../../../assets/PDF/CourseFinalResultPDF";
import SingleCourseFinalPDF from "../../../../../../assets/documents/files/SingleCourseFinalPDF";
import resultList from "../../../../../../assets/documents/data/CourseFinalMark";
import useFetchData from "../../../../../../utils/fetchDataHook";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";

// const resultList = [
//     {
//         _id: 1,
//         name: "Rizoan Kabir Akanda",
//         roll: "18102901",
//         attendance: 10,
//         midOne: 8,
//         midTwo: 8,
//         presentationOrAssignment: 8,
//         total: 34,
//     },
//     {
//         _id: 2,
//         name: "Alpona Akter koly",
//         roll: "18102902",
//         attendance: 10,
//         midOne: 9,
//         midTwo: 9,
//         presentationOrAssignment: 8,
//         total: 36,
//     },
//     {
//         _id: 3,
//         name: "Samsuzzaman",
//         roll: "18102930",
//         attendance: 10,
//         midOne: 7,
//         midTwo: 8,
//         presentationOrAssignment: 8,
//         total: 33,
//     },
//     {
//         _id: 4,
//         name: "Lipon Chandra Roy",
//         roll: "18102940",
//         attendance: 10,
//         midOne: 7,
//         midTwo: 8,
//         presentationOrAssignment: 8,
//         total: 33,
//     },
// ];

const StepTwo = () => {
    const { step, setStep, stepOneValue } = useResultStepContext();
    const { loading, data, isError } = useFetchData(
        "course-final-mark",
        `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.semester}/${stepOneValue.courseName}/${stepOneValue.courseCode}`
    );

    if (loading) {
        return <LoadingCom />;
    }
    if (data) {
        console.log(data);
    }
    if (isError || !data?.result?.length) {
        return <ResultErrorCom homeURL="/dashboard/admin/get-mark" />;
    }

    return (
        <Wrapper>
            <div className="row-1 fancy-sec">
                <h3 className="text-[22px] text-secondary capitalize font-bold">
                    your Search Result
                </h3>
                {/* <button className="submit_btn px-6 py-2 text-sm font-medium capitalize rounded-md">
                    publish
                </button> */}
                {/* <button className="back_btn px-6 py-2 text-sm font-medium capitalize rounded-md">
                    back
                </button> */}
            </div>
            <div className="w-full">
                <PDFViewer width={1250} height={540}>
                    {/* <CourseFinalResultPDF
                        results={results}
                        stepOneValue={stepOneValue}
                    /> */}
                    <SingleCourseFinalPDF
                        results={data?.result}
                        stepOneValue={stepOneValue}
                    />
                </PDFViewer>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .fancy-sec {
        padding: 1rem;
        border-radius: 10px 10px 0 0;
        background-color: #e8e8e8;
    }
    .row-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 10px;
    }
`;

export default StepTwo;
