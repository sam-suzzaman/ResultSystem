import React from "react";

const BasicInfoTable = ({ data }) => {
    return (
        <table className="profile-table">
            <tbody>
                <tr className="row">
                    <td className="info">name :</td>
                    <td className="value number">{data?.name}</td>
                </tr>
                <tr className="row">
                    <td className="info">roll :</td>
                    <td className="value number">{data?.roll}</td>
                </tr>
                <tr className="row">
                    <td className="info">Admission Session :</td>
                    <td className="value number">{data?.session}</td>
                </tr>
                <tr className="row">
                    <td className="info">Current Session :</td>
                    <td className="value number">{data?.currentSession}</td>
                </tr>
                <tr className="row">
                    <td className="info">Department :</td>
                    <td className="value number">
                        Electrical and Electronic Engineering
                    </td>
                </tr>
                <tr className="row">
                    <td className="info">Email :</td>
                    <td className="value text-normal number">{data?.email}</td>
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
