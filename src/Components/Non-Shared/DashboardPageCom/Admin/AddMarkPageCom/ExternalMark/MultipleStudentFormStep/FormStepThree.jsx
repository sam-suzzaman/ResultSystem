import React, { useState } from "react";
import { useMarkFormStepContext } from "../../../../../../../context/Admin/MarkFormStepContext";
import ResultData from "../../../../../../../../DB/CourseFinalResult";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import CourseFinalResultPDF from "../../../../../../../assets/PDF/CourseFinalResultPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AiOutlineEye } from "react-icons/ai";

const FormStepThree = () => {
    const {
        stepValue,
        setStepValue,
        stepOneValue,
        setStepTwoValue,
        selectedCourse,
    } = useMarkFormStepContext();
    const [results, setResults] = useState(ResultData);
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

                    <button
                        onClick={() => setStepValue(4)}
                        className="inline-flex justify-center items-center btn btn-xs text-xs font-medium bg-[#3ace70] rounded-sm text-white hover:bg-[#4cd67f]"
                    >
                        <span className="text-lg font-bold">
                            <AiOutlineEye />
                        </span>
                        view
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormStepThree;
