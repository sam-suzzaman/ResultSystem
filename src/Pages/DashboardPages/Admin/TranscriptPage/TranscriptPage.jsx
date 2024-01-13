import React from "react";
import styled from "styled-components";

import { GrDocumentVerified } from "react-icons/gr";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";

const TranscriptPage = () => {
    const { pathname } = useLocation();
    return (
        <Wrapper>
            <div className="">
                <Breadcrumb location={pathname} />
                <div className="mt-6">
                    <SectionTitle title="Manage Transcripts" />
                </div>
            </div>
            {/* <div className="card-container mt-12">
                <Link
                    to="/dashboard/admin/transcript/semester"
                    className="card"
                >
                    <HiOutlineDocumentArrowDown className="icon" />
                    <h4 className="text">
                        Semester final <br /> transcript
                    </h4>
                </Link>
            </div> */}
            <div className="card-container mt-12">
                <Link
                    to="/dashboard/admin/transcript/yearly-transcript"
                    className="card"
                >
                    <HiOutlineDocumentArrowDown className="icon" />
                    <h4 className="text">
                        Yearly <br /> transcript
                    </h4>
                </Link>
                {/* <Link to="" className="card">
                    <HiOutlineDocumentArrowDown className="icon" />
                    <h4 className="text">
                        final <br /> transcript
                    </h4>
                </Link> */}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;

    .card-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(auto, 250px));
        justify-content: center;
        grid-gap: 40px;
    }

    .card-container .card {
        width: 100%;
        min-height: 220px;
        border-radius: 8px;
        background-color: var(--white-clr);
        color: var(--primary-clr);
        padding: 2rem 1rem;
        text-align: center;

        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .card-container .card .icon {
        font-size: calc(2rem + 2vw);
        opacity: 0.8;
    }
    .card-container .card .text {
        font-size: calc(0.8rem + 0.6vw);
        font-weight: 700;
        text-transform: capitalize;
        margin-top: 17px;
        opacity: 0.9;
    }
`;

export default TranscriptPage;
