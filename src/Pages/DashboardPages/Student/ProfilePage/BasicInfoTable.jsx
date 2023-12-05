import React from "react";

const BasicInfoTable = () => {
    return (
        <table className="profile-table">
            <tbody>
                <tr className="row">
                    <td className="info">name :</td>
                    <td className="value">demo student</td>
                </tr>
                <tr className="row">
                    <td className="info">roll :</td>
                    <td className="value number">18102900</td>
                </tr>
                <tr className="row">
                    <td className="info">Admission Session :</td>
                    <td className="value number">2017-18</td>
                </tr>
                <tr className="row">
                    <td className="info">Current Session :</td>
                    <td className="value number">2017-18</td>
                </tr>
                <tr className="row">
                    <td className="info">Department :</td>
                    <td className="value">
                        Electrical and Electronic Engineering
                    </td>
                </tr>
                <tr className="row">
                    <td className="info">Email :</td>
                    <td className="value text-normal">Demo00@gmail.com</td>
                </tr>
                <tr className="row">
                    <td className="info">Mobile :</td>
                    <td className="value number">+800-00000000000</td>
                </tr>
            </tbody>
        </table>
    );
};

export default BasicInfoTable;
