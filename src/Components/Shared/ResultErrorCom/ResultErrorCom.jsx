import React from "react";
import styled from "styled-components";

import pic from "../../../assets/empty.png";
import { useNavigate } from "react-router-dom";

const ResultErrorCom = ({ homeURL }) => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <div>
                <div className="img-container">
                    <img src={pic} alt="" />
                </div>
                <div className="info-container">
                    <h2 className="">
                        Opps! <span className="capitalize">data not found</span>
                    </h2>
                    <button onClick={() => navigate(homeURL)}>back</button>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* width: 100%;
    height: 100%;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center; */
    padding-top: 7vh;

    .img-container {
        width: 100%;
        max-width: 30%;
        margin: 0 auto;
    }
    .info-container {
        text-align: center;
    }
    .info-container h2 {
        font-weight: 700;
        font-size: calc(0.9rem + 0.9vw);
        opacity: 0.8;
        color: var(--primary-clr);
    }
    .info-container button {
        margin-top: 25px;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 18px;
        border-radius: 4px;
        color: var(--white-clr);
        border: 1px solid var(--primary-clr);
        background-color: var(--secondary-clr);
        padding: 4px 30px;
    }

    .info-container button:hover {
        background-color: var(--primary-clr);
    }
`;

export default ResultErrorCom;
