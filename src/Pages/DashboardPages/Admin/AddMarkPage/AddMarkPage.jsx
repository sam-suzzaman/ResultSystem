import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import "./AddMarkPage.css";
import styled from "styled-components";

const AddMarkPage = () => {
    const { pathname } = useLocation();
    return (
        <Wrapper>
            <div className="add_mark_page_wrapper">
                <Breadcrumb location={pathname} />
                <div className="mt-6">
                    <SectionTitle title="add marks" />
                </div>

                <div className="add-mark-card-container mt-16">
                    <Link to="/dashboard/admin/add-mark/internal">
                        <div className="card">
                            <h3 className="">internal</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard/admin/add-mark/external">
                        <div className="card">
                            <h3 className="">semester final</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard/admin/add-mark/lab">
                        <div className="card">
                            <h3 className="">lab</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard/admin/add-mark/improvement">
                        <div className="card">
                            <h3 className="">Improvement</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .add-mark-card-container {
        display: flex;
        justify-content: center;
        align-items: center;
        /* grid-gap: calc(15px + 1vw); */
        gap: calc(14px + 1vw);
    }
    .add-mark-card-container .card {
        width: 220px;
        height: 210px;
        padding: 10px 20px;

        /* border-radius: 16px;
            background: linear-gradient(315deg, #cfcfcf, #f6f6f6);
            box-shadow: -11px -11px 38px #d8d8d8, 11px 11px 38px #f4f4f4; */

        border-radius: 20px;
        background: linear-gradient(315deg, #cfcfcf, #f6f6f6);
        box-shadow: -7px -7px 14px #d6d6d6, 7px 7px 14px #f6f6f6;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s linear;
    }

    .add-mark-card-container .card:hover {
        /* border-radius: 23px;
        background: #e6e6e6;
        box-shadow: inset 11px 11px 22px #c6c6c6, inset -11px -11px 22px #ffffff; */
        border-radius: 23px;
        background: #e6e6e6;
        box-shadow: inset 11px 11px 22px #c6c6c6, inset -11px -11px 22px #ffffff;
    }
    .add-mark-card-container .card h3 {
        font-size: calc(15px + 0.8vw);
        text-transform: capitalize;
        font-weight: 800;
        letter-spacing: 1px;
        text-align: center;
        padding: 10px 20px;
        opacity: 0.85;
    }
`;

export default AddMarkPage;
