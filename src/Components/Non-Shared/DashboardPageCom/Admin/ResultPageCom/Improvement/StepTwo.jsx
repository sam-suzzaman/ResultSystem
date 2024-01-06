import React, { useState } from "react";

import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";
import ImproveResultPDF from "../../../../../../assets/PDF/ImproveResultPDF";

import { useResultStepContext } from "../../../../../../context/Admin/ResultStepContext";

// todo: fetch data
import data from "../../../../../../assets/documents/data/ImproveTabulationData";
import ImproveTabulation from "../../../../../../assets/documents/files/ImproveTabulation";

import useFetchData from "../../../../../../utils/fetchDataHook";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";

const StepTwo = () => {
    const { step, setStep, stepOneValue, setStepOneValue } =
        useResultStepContext();
    // ToDO:fetch data
    // const { loading, data, isError } = useFetchData("course-final-mark", "url");

    // if (loading) {
    //     return <LoadingCom />;
    // }
    // if (data) {
    //     console.log(data);
    // }
    // if (isError) {
    //     return <ResultErrorCom homeURL="/dashboard/admin/get-mark" />;
    // }

    return (
        <Wrapper>
            <div className="row-1 mb-4 mt-1">
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
                    {/* <ImproveResultPDF
                        results={results}
                        stepOneValue={stepOneValue}
                    /> */}
                    <ImproveTabulation
                        results={data}
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
        justify-content: flex-end;
        align-items: center;
        column-gap: 10px;
    }
`;

export default StepTwo;
