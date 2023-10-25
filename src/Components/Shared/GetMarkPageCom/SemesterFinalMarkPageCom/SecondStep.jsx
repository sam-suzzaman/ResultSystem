import React, { useEffect, useState } from "react";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import { useQuery } from "react-query";
import LoadingCom from "../../LoadingCom/LoadingCom";
import { PDFViewer } from "@react-pdf/renderer";
import SemesterFinalResultPDF from "../../../../assets/PDF/SemesterFinalResultPDF";
import img from "../../../../assets/no_data.png";

const SecondStep = ({ setStep, stepOneValue }) => {
    const [loading, setLoading] = useState(false);
    const {
        isLoading,
        isError,
        data: semesterFinalMark,
        error,
    } = useQuery("semesterFinalMark", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/result/${stepOneValue.department}/${stepOneValue.session}/${stepOneValue.semester}`
        )
    );

    if (isLoading || loading) {
        return <LoadingCom />;
    }

    if (isError) {
        console.log(error.message);
        return <h2>error occurs</h2>;
    }

    // console.log(semesterFinalMark);

    if (semesterFinalMark?.length === 0) {
        return (
            <div className="flex justify-center items-center">
                <div className="">
                    <img
                        src={img}
                        alt="placeholder"
                        className="w-full max-w-sm mx-auto"
                    />
                    <h3 className="text-2xl font-bold capitalize text-center text-green-700">
                        not found!
                    </h3>
                    <p className="text-center text-xs font-normal mt-1 capitalize">
                        No marks have been submitted yet for
                        <span className="font-bold">
                            {" "}
                            Semester-{stepOneValue.semester},
                        </span>{" "}
                        <span className="font-bold">
                            Session: {stepOneValue.session}.
                        </span>
                        <br />
                        Please submit mark first.
                    </p>
                    <div className="flex justify-center mt-4">
                        <button
                            className="btn btn-sm  btn-neutral rounded-sm"
                            onClick={() => setStep(1)}
                        >
                            back
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <PDFViewer width={1000} height={450}>
                <SemesterFinalResultPDF
                    data={semesterFinalMark}
                    setLoading={setLoading}
                />
            </PDFViewer>
        </div>
    );
};

export default SecondStep;
