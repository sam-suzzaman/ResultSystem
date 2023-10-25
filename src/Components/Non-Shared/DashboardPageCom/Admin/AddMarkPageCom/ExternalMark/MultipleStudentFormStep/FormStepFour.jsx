import React, { useEffect, useState } from "react";
import CourseFinalResultPDF from "../../../../../../../assets/PDF/CourseFinalResultPDF";
import { PDFViewer } from "@react-pdf/renderer";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { AiOutlineHome } from "react-icons/ai";
import { FaBackward } from "react-icons/fa";
import { getAllHandler } from "../../../../../../../utils/fetchHandlers";
import LoadingCom from "../../../../../../Shared/LoadingCom/LoadingCom";
import { useQuery } from "react-query";

const FormStepFour = () => {
    const {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepTwoValue,
        selectedCourse,
    } = useMarkFormStepContext();
    const {
        isLoading,
        isError,
        data: courseFinalResult,
        error,
    } = useQuery("courseFinalResult", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.semester}/${selectedCourse.courseName}/${selectedCourse.courseCode}`
        )
    );
    const [rearrangedMark, setRearrangedMark] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const temp = courseFinalResult?.map((result) => {
            return { _id: result._id, ...result.marks };
        });
        setRearrangedMark(temp);
        setLoading(false);
    }, [courseFinalResult]);

    if (isLoading || loading) {
        return <LoadingCom />;
    }

    if (isError) {
        console.log(error.message);
        return <h2>error occurs</h2>;
    }

    return (
        <div>
            <div className=" mb-4">
                <button
                    onClick={() => setStepValue(3)}
                    className="inline-flex justify-center items-center btn btn-xs text-xs font-medium bg-[#3ace70] rounded-sm text-white hover:bg-[#4cd67f]"
                >
                    <span className="text-lg font-bold">
                        <FaBackward />
                    </span>
                    prev
                </button>
                <button
                    onClick={() => setStepValue(1)}
                    className="inline-flex justify-center items-center btn btn-xs text-xs font-medium bg-[#3ace70] rounded-sm text-white hover:bg-[#4cd67f] ml-4"
                >
                    <span className="text-lg font-bold">
                        <AiOutlineHome />
                    </span>
                    Home
                </button>
            </div>
            <div className="flex justify-center shadow-md pb-4">
                <PDFViewer width={1000} height={450}>
                    {/* <SemesterPDF colData={colData} /> */}
                    <CourseFinalResultPDF data={rearrangedMark} />
                </PDFViewer>
            </div>
        </div>
    );
};

export default FormStepFour;
