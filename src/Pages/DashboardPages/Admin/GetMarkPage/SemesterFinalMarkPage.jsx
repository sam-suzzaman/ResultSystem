import React, { useState } from "react";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";

import FirstStep from "../../../../Components/Shared/GetMarkPageCom/FirstStep";
import SecondStep from "../../../../Components/Shared/GetMarkPageCom/SemesterFinalMarkPageCom/SecondStep";

const SemesterFinalMarkPage = () => {
    const { pathname } = useLocation();
    const [step, setStep] = useState(1);
    const [stepOneValue, setStepOneValue] = useState({});

    return (
        <>
            <section className="add_mark_page_wrapper">
                <Breadcrumb location={pathname} />
                {step === 1 && (
                    <div className="mt-6">
                        <h3 className="font-bold text-xl uppercase text-center">
                            Semester Final Mark
                        </h3>
                        <p className="text-xs font-semibold capitalize  text-center mt-1">
                            To get the marksheet, provide the required
                            information
                        </p>
                    </div>
                )}
            </section>
            <div className="mt-6">
                {step === 1 && (
                    <FirstStep
                        setStep={setStep}
                        setStepOneValue={setStepOneValue}
                    />
                )}
                {step === 2 && (
                    <SecondStep setStep={setStep} stepOneValue={stepOneValue} />
                )}
            </div>
        </>
    );
};

export default SemesterFinalMarkPage;
