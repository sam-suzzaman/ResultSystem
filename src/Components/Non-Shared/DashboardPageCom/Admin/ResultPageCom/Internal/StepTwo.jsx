import React, { useState } from "react";

import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";

import { useResultStepContext } from "../../../../../../context/Admin/ResultStepContext";

import InternlMarkPDF from "../../../../../../assets/documents/files/InternalMarkPDF";

// todo: fetch data
import Result from "../../../../../../assets/documents/data/InternalMark";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";
import useFetchData from "../../../../../../utils/fetchDataHook";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";

const StepTwo = () => {
    const { step, setStep, stepOneValue, setStepOneValue } =
        useResultStepContext();
    const { loading, data, isError } = useFetchData(
        "internal-mark",
        `https://student-management-delta.vercel.app/mark/theory-marks/${stepOneValue?.department}/${stepOneValue?.session}/${stepOneValue?.semester}/${stepOneValue?.courseName}/${stepOneValue.courseCode}`
    );

    console.log(
        `https://student-management-delta.vercel.app/mark/theory-marks/${stepOneValue?.department}/${stepOneValue?.session}/${stepOneValue?.semester}/${stepOneValue?.courseName}/${stepOneValue.courseCode}`
    );

    if (loading) {
        return <LoadingCom />;
    }
    if (data) {
        console.log(data);
    }
    if (isError) {
        return <ResultErrorCom homeURL="/dashboard/admin/get-mark" />;
    }
    return (
        <Wrapper>
            <div className="row-1 fancy-sec">
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
                    {/* <InternalMarkPDF
                        results={results}
                        stepOneValue={stepOneValue}
                    /> */}
                    <InternlMarkPDF
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
