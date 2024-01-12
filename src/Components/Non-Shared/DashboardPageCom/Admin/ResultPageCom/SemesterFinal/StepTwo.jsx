import React, { useState } from "react";

import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";
import InternalMarkPDF from "../../AddMarkPageCom/InternalMark/InternalMarkPDF";

import { useResultStepContext } from "../../../../../../context/Admin/ResultStepContext";
import SemesterFinalResultPDF from "../../../../../../assets/PDF/SemesterFinalResultPDF";

// todo: fetch data
// import data from "../../../../../../../DB/SemesterFinalResult";
import useFetchData from "../../../../../../utils/fetchDataHook";
import SemesterFinalTabulation from "../../../../../../assets/documents/files/SemesterFinalTabulation";
import data2 from "../../../../../../assets/documents/data/SemesterFinalTabulationData";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";

const StepTwo = () => {
    const { step, setStep, stepOneValue, setStepOneValue } =
        useResultStepContext();
    // ToDO:fetch data
    const { loading, data, isError } = useFetchData(
        "semester-final-tabulation-mark",
        `https://student-management-delta.vercel.app/mark/theory-marks/${stepOneValue?.deparment}/${stepOneValue?.session}/${stepOneValue?.semester}/${stepOneValue?.courseName}/${stepOneValue.courseCode}`
    );

    if (loading) {
        return <LoadingCom />;
    }
    if (data) {
        console.log(data);
    }
    // if (isError || !data?.length) {
    //     return <ResultErrorCom homeURL="/dashboard/admin/get-mark" />;
    // }

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
                    {/* <SemesterFinalResultPDF
                        results={results}
                        stepOneValue={stepOneValue}
                    /> */}
                    <SemesterFinalTabulation
                        results={data2}
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
