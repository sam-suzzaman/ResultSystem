import React, { useState } from "react";
import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";
import { useSemesterTranscriptContext } from "../../../../../../Pages/DashboardPages/Student/SemesterTranscriptPage";
// import SemesterTranscriptPDF from "../../../../../../assets/PDF/SemesterTranscriptPDF";
// import SemesterTranscriptData from "../../../../../../../DB/SemesterTranscriptData";
import SemesterTranscriptPDF from "../../../../../../assets/documents/files/student/SemesterTranscriptPDF";
import semesterTranscript from "../../../../../../assets/documents/data/SemesterTranscript";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";
import useFetchData from "../../../../../../utils/fetchDataHook";

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
    if (isError) {
        console.log(error);
        return <ResultErrorCom homeURL="/dashboard/student/transcript" />;
    }
    return (
        <Wrapper>
            <div className="row-1 mb-4 mt-1">
                <h3 className="text-[22px] text-secondary capitalize font-bold">
                    your Search Result
                </h3>
                <button
                    className="back_btn px-6 py-2 text-sm font-medium capitalize rounded-md"
                    onClick={() => setStep(1)}
                >
                    back
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

const Wrapper = styled.div``;
export default StepTwoTranscript;
