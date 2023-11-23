import React from "react";
import styled from "styled-components";

import student_avatar from "../../../assets/student_avatar.png";

import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const Profile = () => {
    const id = "10101";
    return (
        <Wrapper>
            <div class="container">
                <div class="col-one">
                    <img src={student_avatar} alt="avatar" />
                    <div className="control flex justify-center items-center mt-4">
                        <Link
                            to={`/dashboard/student/profile/${id}`}
                            className="flex items-center"
                        >
                            <FiEdit />{" "}
                            <span className="text-sm capitalize ml-1 font-medium ">
                                edit
                            </span>
                        </Link>
                    </div>
                </div>
                <div class="col-two">
                    <h5 className="title">About me_ _ </h5>
                    <table className="information-table">
                        <tbody>
                            <tr className="row">
                                <td className="info">name :</td>
                                <td className="value">demo student</td>
                            </tr>
                            <tr className="row">
                                <td className="info">roll :</td>
                                <td className="value">18102900</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Admission Session :</td>
                                <td className="value">2017-18</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Current Session :</td>
                                <td className="value">2017-18</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Department :</td>
                                <td className="value">
                                    Electrical and Electronic Engineering
                                </td>
                            </tr>
                            <tr className="row">
                                <td className="info">Gender :</td>
                                <td className="value">Male</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Father's name :</td>
                                <td className="value">demo father name</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Mother's name :</td>
                                <td className="value">demo mother name</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Date of Birth :</td>
                                <td className="value">01/01/2000</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Email :</td>
                                <td className="value">Demo00@gmail.com</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Mobile :</td>
                                <td className="value">+800-00000000000</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Address :</td>
                                <td className="value">Abc road,Country</td>
                            </tr>
                            <tr className="row">
                                <td className="info">Hometown :</td>
                                <td className="value">Abc road,Country</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding-top: calc(1rem + 1vh);
    padding-bottom: calc(1rem + 1vh);
    display: flex;
    justify-content: center;
    .container {
        display: flex;
        width: 100%;
        max-width: 850px;
    }

    .col-one {
        width: 200px;
    }

    .col-two {
        padding-left: 40px;
        flex: 1;
        overflow-y: auto;
    }
    .col-two .title {
        font-size: calc(22px + 0.5vw);
        text-transform: uppercase;
        font-weight: 700;
        color: #000000d1;
    }

    .information-table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        margin-top: calc(12px + 0.2vw);
    }

    .information-table .info {
        width: 200px;
    }
    .information-table .value {
        width: calc(100% - 200px);
    }

    th.row,
    td {
        text-align: left;
        padding: 8px;
    }

    td {
        font-size: calc(13px + 0.15vw);
        font-weight: 500;
        text-transform: capitalize;
        color: #00000097;
        margin-bottom: 20px;
    }
    td.value {
        color: #000000e0;
    }
    @media screen and (max-width: 785px) {
        .container {
            flex-direction: column;
        }
        .col-one {
            width: 100%;
            margin-bottom: 25px;
        }
        .col-one img {
            width: 100%;
            max-width: 250px;
            margin: 0 auto;
        }
        .col-two {
            width: 100%;
            padding-left: 0;
        }
        .col-two .title {
            text-align: center;
            margin-bottom: 25px;
        }
        .information-table .info {
            width: 40%;
        }
        .information-table .value {
            width: 60%;
        }
    }
`;

export default Profile;
