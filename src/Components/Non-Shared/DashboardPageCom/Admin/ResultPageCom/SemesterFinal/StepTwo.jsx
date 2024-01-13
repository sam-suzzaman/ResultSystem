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
import { useMutation, useQueryClient } from "react-query";
import { updateHandler } from "../../../../../../utils/fetchHandlers";
import Swal from "sweetalert2";

const StepTwo = () => {
    const { step, setStep, stepOneValue, setStepOneValue } =
        useResultStepContext();

    const queryClient = useQueryClient();
    const { loading, data, isError } = useFetchData(
        "semester-final-tabulation-mark",
        `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.semester}`
    );
    const {
        loading: publishLoading,
        data: publishData,
        isError: isPublishError,
        refetch,
    } = useFetchData(
        "semester-mark-publish",
        `https://student-management-delta.vercel.app/result/is-result-publish/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.semester}`
    );

    // mutations
    const publishResultMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            // toast.success("Mark Updated");
            Swal.fire({
                title: "Done!",
                text: "Result Published Successfully",
                icon: "success",
                confirmButtonText: "Close",
            });
            // refetch("semester-mark-publish");
            queryClient.invalidateQueries("semester-mark-publish");
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            // toast.warn("Something Wrong");
            Swal.fire({
                title: "Oops!",
                text: "Publication failed",
                icon: "error",
                confirmButtonText: "Close",
            });
        },
    });

    const unpublishResultMutation = useMutation({
        mutationFn: updateHandler,
        onSuccess: (data, variable, context) => {
            // toast.success("Mark Updated");
            Swal.fire({
                title: "Done!",
                text: "Result Unpublished Successfully",
                icon: "success",
                confirmButtonText: "Close",
            });
            queryClient.invalidateQueries("semester-mark-publish");
        },
        onError: (error, variables, context) => {
            console.log(error);
            // toast.warn(error.response.data.errors.common);
            // toast.warn("Something Wrong");
            Swal.fire({
                title: "Oops!",
                text: "Unpublication failed",
                icon: "error",
                confirmButtonText: "Close",
            });
        },
    });

    // publish button handler
    const publishBtnHandler = async () => {
        const result = {
            department: stepOneValue.department,
            currentSession: stepOneValue.session,
            semester: stepOneValue.semester,
            isPublished: true,
        };
        publishResultMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/result/result-publish",
        });
    };

    // unpublish button handler
    const unpublishBtnHandler = async () => {
        const result = {
            department: stepOneValue.department,
            currentSession: stepOneValue.session,
            semester: stepOneValue.semester,
            isPublished: false,
        };
        unpublishResultMutation.mutate({
            body: result,
            url: "https://student-management-delta.vercel.app/result/result-publish",
        });
    };

    if (loading || publishLoading) {
        return <LoadingCom />;
    }
    if (data) {
        // console.log(data);
        // console.log(publishData);
    }
    if (isError || !data?.result?.length || isPublishError) {
        return <ResultErrorCom homeURL="/dashboard/admin/get-mark" />;
    }

    return (
        <Wrapper>
            <div className="row-1 fancy-sec">
                <div className="">
                    <h3 className="">
                        <span className="text-[20px] text-secondary capitalize font-bold">
                            Semester final Tabulation
                        </span>
                    </h3>
                    <h6 className="text-sm">
                        Status:{" "}
                        <span className="bg-[#cacaca] text-primary capitalize px-3 py-[2px] rounded-sm text-[12px] font-normal ml-1 ">
                            {publishData?.result?.isPublished
                                ? "Published"
                                : "Unpublished"}
                        </span>
                    </h6>
                </div>

                {publishData?.result?.isPublished ? (
                    <button
                        onClick={unpublishBtnHandler}
                        className="submit_btn px-6 py-2 text-sm font-medium capitalize rounded-md"
                    >
                        unpublish
                    </button>
                ) : (
                    <button
                        onClick={publishBtnHandler}
                        className="submit_btn px-6 py-2 text-sm font-medium capitalize rounded-md"
                    >
                        publish
                    </button>
                )}
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
