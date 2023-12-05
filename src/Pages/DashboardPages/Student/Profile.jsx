import React, { useState } from "react";
import styled from "styled-components";

import student_avatar from "../../../assets/student_avatar.png";

import { FiEdit } from "react-icons/fi";
import { GrPowerReset } from "react-icons/gr";
import { Link } from "react-router-dom";
import BasicInfoTable from "./ProfilePage/BasicInfoTable";
import UpdateForm from "./ProfilePage/UpdateForm";

const Profile = () => {
    const [isShowUpdateForm, setIsShowUpdateForm] = useState(false);

    const id = "10101";
    return (
        <Wrapper>
            <h3 className="page-title">my profile</h3>
            <div className="profile-sec-container">
                <div className="first-col">
                    <img src={student_avatar} alt="avatar" />
                    {!isShowUpdateForm && (
                        <div className="control flex flex-col justify-center items-center mt-4">
                            <Link
                                to={`/dashboard/student/profile/${id}`}
                                className="flex items-center"
                            >
                                <FiEdit />{" "}
                                <span className="text-[13px] capitalize ml-1 font-medium ">
                                    edit
                                </span>
                            </Link>
                            <Link
                                to={`/dashboard/student/reset/${id}`}
                                className="flex items-center mt-2"
                            >
                                <GrPowerReset />
                                <span className="text-[13px] capitalize ml-1 font-medium ">
                                    Reset Password
                                </span>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="second-col">
                    <div className="sub-row-1">
                        <div className="flex justify-between items-center">
                            <h5 className="sec-title">Basic Information</h5>
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() =>
                                    setIsShowUpdateForm(!isShowUpdateForm)
                                }
                            >
                                <FiEdit />
                                <span className="text-[13px] capitalize ml-1 font-medium ">
                                    edit
                                </span>
                            </div>
                        </div>
                        {isShowUpdateForm ? <UpdateForm /> : <BasicInfoTable />}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem 0;
    .page-title {
        text-transform: uppercase;
        font-size: calc(24px + 0.6vw);
        font-weight: 800;
        color: var(--black-clr);
        opacity: 0.5;
        text-align: center;
    }
    .profile-sec-container {
        margin-top: 30px;
        display: grid;
        grid-template-columns: minmax(auto, 200px) 1fr;
        grid-gap: 20px;

        padding: 2.5rem 2rem;

        border-radius: 17px;
        background: #ffffff;
        box-shadow: -11px -11px 22px #d4d4d4, 11px 11px 22px #f8f8f8;
    }

    @media screen and (max-width: 714px) {
        .profile-sec-container {
            display: flex;
            flex-direction: column;
        }
        .profile-sec-container .first-col {
            margin-bottom: 20px;
        }
    }

    .profile-sec-container .first-col > img {
        width: 100%;
        max-width: 150px;
        margin: 0 auto;
    }
    .profile-sec-container .second-col .sec-title {
        font-weight: 600;
        font-size: calc(19px + 0.5vw);
        opacity: 0.85;
        color: var(--primary-clr);
    }
    .profile-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        margin-top: calc(12px + 0.2vw);
    }

    .profile-table .info {
        width: 200px;
    }
    .profile-table .value {
        width: calc(100% - 200px);
    }

    .profile-table th.row,
    .profile-table td {
        text-align: left;
        padding: 8px;
    }

    .profile-table td {
        font-size: calc(13px + 0.15vw);
        font-weight: 500;
        text-transform: capitalize;
        color: #00000097;
        margin-bottom: 20px;
    }
    .profile-table td.value {
        color: #000000f2;
        font-weight: 400;
    }
    .profile-table td.text-normal {
        text-transform: none;
    }
    /* @media screen and (max-width: 785px) {
       
        .information-table .info {
            width: 40%;
        }
        .information-table .value {
            width: 60%;
        }
    } */
`;
export default Profile;
