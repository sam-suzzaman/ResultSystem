import React, { useState } from "react";
import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";
import { useSemesterTranscriptContext } from "../../../../../../Pages/DashboardPages/Admin/TranscriptPage/SemesterTranscriptPage";
import SemesterTranscriptPDF from "../../../../../../assets/documents/files/SemesterTranscriptPDF";
// import SemesterTranscriptData from "../../../../../../../DB/SemesterTranscriptData";
import useFetchData from "../../../../../../utils/fetchDataHook";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";

const StepTwoTranscript = () => {
    const { step, setStep, stepOneValue } = useSemesterTranscriptContext();
    // const [results, setResults] = useState(SemesterTranscriptData);

    const { loading, data, isError, error } = useFetchData(
        "student-semester-transcript-mark",
        `https://student-management-delta.vercel.app/result/semester-transcript/EEE/2017-18/18102940`
    );

    if (loading) {
        return <LoadingCom />;
    }
    if (data) {
        console.log(data);
    }
    if (false) {
        console.log(error);
        return <ResultErrorCom homeURL="/dashboard/admin/transcript" />;
    }

    return (
        <Wrapper>
            <div className="row-1 mt-1 fancy-sec">
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
                    {/* <SemesterTranscriptPDF
                        TranscriptData={results}
                        stepOneValue={stepOneValue}
                    /> */}
                    <SemesterTranscriptPDF
                        TranscriptData={data}
                        stepOneValue={stepOneValue}
                    />
                </PDFViewer>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .fancy-sec {
        width: 100%;
        background-color: #d7d7d7;
        padding: 1rem 1rem;
        border-radius: 17px 17px 0 0;
    }
`;

export default StepTwoTranscript;
