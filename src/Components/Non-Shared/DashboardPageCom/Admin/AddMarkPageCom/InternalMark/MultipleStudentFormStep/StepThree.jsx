import React, { useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InternalMarkPDF from "../InternalMarkPDF";

const resultList = [
    {
        _id: 1,
        name: "Rizoan Kabir Akanda",
        roll: "18102901",
        attendance: 10,
        midOne: 8,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 34,
    },
    {
        _id: 2,
        name: "Alpona Akter koly",
        roll: "18102902",
        attendance: 10,
        midOne: 9,
        midTwo: 9,
        presentationOrAssignment: 8,
        total: 36,
    },
    {
        _id: 3,
        name: "Samsuzzaman",
        roll: "18102930",
        attendance: 10,
        midOne: 7,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 33,
    },
    {
        _id: 4,
        name: "Lipon Chandra Roy",
        roll: "18102940",
        attendance: 10,
        midOne: 7,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 33,
    },
];
const StepThree = () => {
    const {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepTwoValue,
        selectedCourse,
    } = useMarkFormStepContext();
    const [results, setResults] = useState(resultList);

    return (
        <div className="flex justify-center translate-y-full ">
            <div className="">
                <div className="flex justify-center mb-1">
                    <span className="font-bold text-5xl text-[#5cd089]">
                        <AiOutlineCheckCircle />
                    </span>
                </div>
                <div className="text-center">
                    <h4 className="uppercase font-semibold text-3xl text-[#5cd089]">
                        done
                    </h4>
                    <h6 className="mt-1 capitalize font-medium text-base text-[#777777]">
                        Marks submitted successfully
                    </h6>
                </div>
                <div className="flex justify-center items-center gap-x-4 mt-5">
                    <button
                        onClick={() => setStepValue(1)}
                        className="btn btn-xs text-xs font-medium bg-[#3ace70] rounded-sm text-white hover:bg-[#4cd67f]"
                    >
                        <span className="text-lg font-bold">
                            <AiOutlinePlus />
                        </span>
                        add new
                    </button>

                    {/* Button to download PDF */}
                    <PDFDownloadLink
                        document={
                            <InternalMarkPDF
                                results={results}
                                stepOneValue={stepOneValue}
                                selectedCourse={selectedCourse}
                            />
                        }
                        fileName="demo"
                    >
                        {({ loading, error }) =>
                            loading ? (
                                <button className="inline-flex justify-center items-center btn btn-xs text-xs font-medium bg-[#3ace70] rounded-sm text-white hover:bg-[#4cd67f]">
                                    <span className="text-lg font-bold">
                                        <GoDownload />
                                    </span>
                                    loading...
                                </button>
                            ) : (
                                <button className="inline-flex justify-center items-center btn btn-xs text-xs font-medium bg-[#3ace70] rounded-sm text-white hover:bg-[#4cd67f]">
                                    <span className="text-lg font-bold">
                                        <GoDownload />
                                    </span>
                                    download
                                </button>
                            )
                        }
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
};

export default StepThree;
