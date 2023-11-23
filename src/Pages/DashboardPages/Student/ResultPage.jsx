import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";

import InternalStepTwo from "./ResultPage/InternalStepTwo";

const markTypes = [
    { _id: 1, type: "Internal" },
    { _id: 2, type: "Semester Final" },
];

const resultContext = createContext();
const ResultPage = () => {
    const [step, setStep] = useState(0);

    const values = { step, setStep };

    return (
        <resultContext.Provider value={values}>
            <Wrapper>
                {step === 0 && (
                    <div className="result-card-container">
                        <div className="result-card" onClick={() => setStep(1)}>
                            <h3 className="">Internal</h3>
                        </div>
                        <div className="result-card" onClick={() => setStep(2)}>
                            <h3 className="">
                                semester <br />
                                final
                            </h3>
                        </div>
                        <div className="result-card" onClick={() => setStep(3)}>
                            <h3 className="">improve</h3>
                        </div>
                    </div>
                )}
                {step == 1 && <InternalStepTwo />}
                {step == 2 && <h4>semester step</h4>}
                {step == 3 && <h4>improve step</h4>}
            </Wrapper>
        </resultContext.Provider>
    );
};

const Wrapper = styled.section`
    height: 100%;
    .result-card-container {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: calc(20px + 2vw);
    }
    .result-card-container .result-card {
        width: 200px;
        height: 200px;
        background-color: #24a148;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s linear;
        cursor: pointer;
    }
    .result-card-container .result-card:hover {
        border-radius: 56% 44% 48% 52% / 46% 57% 43% 54%;
    }
    .result-card-container .result-card h3 {
        font-size: calc(13px + 0.5vw);
        font-weight: 600;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 1px;
        text-align: center;
        line-height: 28px;
    }
    .result-btn {
        display: inline-block;
        padding: 8px 20px;
        background-color: #24a148;
        color: #fff;
        text-transform: capitalize;
        font-size: calc(13px + 0.3vw);
        border-radius: 6px;
        transition: all 0.3s linear;
        margin-top: calc(12px + 1vh);
    }
    .result-btn:hover {
        background-color: #24a147d5;
    }

    .result-table {
        margin-top: calc(20px + 3vw);
        border-collapse: collapse;
        width: 100%;
    }

    .result-table td,
    .result-table th {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.5px;
        border: 1px solid #ddd;
        padding: 8px;
    }
    .result-table th {
        text-align: left;
        background-color: #24a148;
        color: #fff;
    }
    .zero-result {
        font-size: calc(14px + 0.6vw);
        font-weight: 500;
        text-align: center;
        text-transform: capitalize;
        margin-top: calc(20px + 3vw);
        color: #b52a2a;
    }

    .back-btn {
        display: inline-block;
        padding: 6px 20px;
        background-color: #ebebeb;
        color: #000000d4;
        text-transform: capitalize;
        font-size: calc(13px + 0.3vw);
        border-radius: 6px;
        transition: all 0.3s linear;
        margin-top: calc(12px + 1vh);
        margin-bottom: 30px;
    }
    .back-btn:hover {
        background-color: #f3f3f3d4;
    }
`;

export const useResultContext = () => useContext(resultContext);
export default ResultPage;
