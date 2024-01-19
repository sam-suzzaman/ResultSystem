import React, { useEffect, useState } from "react";
import { useMarkFormStepContext } from "../../../../../../context/Admin/MarkFormStepContext";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";
import styled from "styled-components";
import PerYearlyTabulation from "../../../../../../assets/documents/files/PerYearlyTabulation";
import { PDFViewer } from "@react-pdf/renderer";
import useFetchData from "../../../../../../utils/fetchDataHook";

const StepTwo = () => {
    const { stepOneValue } = useMarkFormStepContext();
    const { loading, data, isError, error } = useFetchData(
        "yearly-transcript",
        `https://student-management-delta.vercel.app/result/tabulation-sheet-per-year/${stepOneValue.year}/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.roll}`
    );
    // console.log();
    if (loading) {
        return <LoadingCom />;
    }
    if (data) {
        console.log(data);
    }
    if (Object.keys(data?.yearTabulation?.marks)?.length === 0) {
        return (
            <ResultErrorCom
                msg="Marks not available"
                homeURL="/dashboard/admin/transcript"
            />
        );
    }
    if (isError) {
        console.log(error);
        return <ResultErrorCom homeURL="/dashboard/admin/transcript" />;
    }

    return (
        <Wrapper>
            <div className="row-1 mt-1 fancy-sec">
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
                    {/* <SemesterTranscriptPDF
                        TranscriptData={results}
                        stepOneValue={stepOneValue}
                    /> */}
                    <PerYearlyTabulation
                        result={data.yearTabulation}
                        student={data?.yearTabulation?.studentData}
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

export default StepTwo;
