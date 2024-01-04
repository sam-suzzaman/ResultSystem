import React, { useState } from "react";
import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";
import { useSemesterTranscriptContext } from "../../../../../../Pages/DashboardPages/Admin/TranscriptPage/SemesterTranscriptPage";
import SemesterTranscriptPDF from "../../../../../../assets/PDF/SemesterTranscriptPDF";
import SemesterTranscriptData from "../../../../../../../DB/SemesterTranscriptData";

const StepTwoTranscript = () => {
    const { step, setStep, stepOneValue } = useSemesterTranscriptContext();
    const [results, setResults] = useState(SemesterTranscriptData);
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
                    <SemesterTranscriptPDF
                        TranscriptData={results}
                        stepOneValue={stepOneValue}
                    />
                </PDFViewer>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export default StepTwoTranscript;
