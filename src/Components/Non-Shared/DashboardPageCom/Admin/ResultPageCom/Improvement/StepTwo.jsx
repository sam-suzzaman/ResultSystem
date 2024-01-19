import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";
import ImproveResultPDF from "../../../../../../assets/PDF/ImproveResultPDF";

import { useResultStepContext } from "../../../../../../context/Admin/ResultStepContext";

// todo: fetch data
import data2 from "../../../../../../assets/documents/data/ImproveTabulationData";
import ImproveTabulation from "../../../../../../assets/documents/files/ImproveTabulation";

import useFetchData from "../../../../../../utils/fetchDataHook";
import LoadingCom from "../../../../../Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../../Shared/ResultErrorCom/ResultErrorCom";
import axios from "axios";
import { useQuery } from "react-query";
import useFetchConfig from "../../../../../../utils/useFetchConfig";

// const fetchData = async () => {
//     const res = await axios.get(
//         `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.courseName}/${stepOneValue.courseCode}`
//     );
//     return res;
// };

const StepTwo = () => {
    const { step, setStep, stepOneValue, setStepOneValue } =
        useResultStepContext();
    const config = useFetchConfig();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState({});
    console.log(data2);
    // const { loading, data, isError } = useFetchData(
    //     "course-final-mark-sheet",
    //     `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.courseName}/${stepOneValue.coureCode}`
    // );
    // const {
    //     isLoading: loading,
    //     isError,
    //     data,
    //     error,
    // } = useQuery("course-final-mark-sheet", () => fetchData());

    // console.log(
    //     `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.courseName}/${stepOneValue.courseCode}`
    // );

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await axios.get(
                `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.courseName}/${stepOneValue.courseCode}`,
                config
            );
            setData(res.data);
        };
        fetchData();
        setLoading(false);
    }, []);

    if (loading) {
        return <LoadingCom />;
    }
    if (data) {
        console.log(data);
    }
    // if (isError || !data?.result?.length) {
    //     return <ResultErrorCom homeURL="/dashboard/admin/get-mark" />;
    // }
    if (!data?.result?.length) {
        return (
            <ResultErrorCom
                msg="Data List Empty"
                homeURL="/dashboard/admin/get-mark"
            />
        );
    }

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
                        resultType={data?.credit}
                        results={data?.result}
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
