import React from "react";
import styled from "styled-components";
import useGetYearSemester from "../../../../../utils/useGetYearSemester";

const ResultTable = ({ data }) => {
    // console.log(data);
    const { year, semester } = useGetYearSemester(data?._id);
    return (
        <Wrapper>
            <div className="mt-8 bg-gray-100 py-6 px-6 rounded-md">
                <div className="mb-2">
                    <h2 className=" text-lg font-medium text-gray-800 opacity-75 text-center capitalize number">
                        {year} Year {semester} Semester
                    </h2>
                </div>
                <div className="table-container">
                    {/* Regular */}
                    <table className="table_one">
                        <caption>Regular</caption>
                        <thead>
                            <tr>
                                <th className="">#</th>
                                <th className="number text-left">
                                    Course Code
                                </th>
                                <th className="text-left">Course Title</th>
                                <th className="number">
                                    Internal
                                    <span className="text-xs number">
                                        {" "}
                                        (40%)
                                    </span>
                                </th>
                                <th className="number">
                                    Theory
                                    <span className="text-xs number">
                                        {" "}
                                        (60%)
                                    </span>
                                </th>
                                {/* <th className="number text-center">
                                    Total{" "}
                                    <span className="text-xs number">
                                        {" "}
                                        (100%)
                                    </span>
                                </th> */}
                                <th className="number text-center">GP</th>
                                <th className="number text-center">LG</th>
                                <th className="number text-center">CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.marksWithImprove?.map((mark, index) => {
                                return (
                                    <tr>
                                        <td className="text-center">
                                            {index + 1}
                                        </td>
                                        <td
                                            data-column="Last Name"
                                            className="number "
                                        >
                                            {mark?.courseCode}
                                        </td>
                                        <td
                                            data-column="Job Title"
                                            className="capitalize"
                                        >
                                            {mark?.courseName}
                                        </td>
                                        <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.regular?.internalMark}
                                        </td>
                                        <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.regular?.finalMark}
                                        </td>
                                        {/* <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.regular?.internalMark +
                                                mark?.regular?.finalMark}
                                        </td> */}
                                        <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.regular?.GP.toFixed(2)}
                                        </td>
                                        <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.regular?.LG}
                                        </td>
                                        {index == 0 && (
                                            <td
                                                data-column="Twitter"
                                                className="number text-center"
                                                rowSpan={
                                                    data?.marksWithImprove
                                                        ?.length
                                                }
                                            >
                                                {data?.regularCGPA.toFixed(2)}
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* Improvement */}
                    <table className="table_two">
                        <caption>Improvement</caption>
                        <thead>
                            <tr>
                                <th className="number">
                                    Theory
                                    <span className="text-xs number">
                                        {" "}
                                        (60%)
                                    </span>
                                </th>
                                {/* <th className="number text-center">
                                    Total{" "}
                                    <span className="text-xs number">
                                        {" "}
                                        (100%)
                                    </span>
                                </th> */}
                                <th className="number text-center">GP</th>
                                <th className="number text-center">LG</th>
                                <th className="number text-center">CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.marksWithImprove?.map((mark, index) => {
                                return (
                                    <tr>
                                        <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.improve?.finalMark || "-"}
                                        </td>
                                        {/* <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.regular?.internalMark +
                                                mark?.improve?.finalMark}
                                        </td> */}
                                        <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.improve?.GP?.toFixed(2) ||
                                                "-"}
                                        </td>
                                        <td
                                            data-column="Twitter"
                                            className="number text-center"
                                        >
                                            {mark?.improve?.LG || "-"}
                                        </td>
                                        {index == 0 && (
                                            <td
                                                data-column="Twitter"
                                                className="number text-center"
                                                rowSpan={
                                                    data?.marksWithImprove
                                                        ?.length
                                                }
                                            >
                                                {data?.improveCGPA.toFixed(2)}
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .table-container {
        display: flex;
        justify-content: center;
    }
    .table_one {
        width: 70%;
    }
    .table_two {
        width: 30%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    /* Zebra striping */
    tr:nth-of-type(odd) {
        background: #eee;
    }

    th {
        background: #302e2ee8;
        color: white;
        font-weight: 400;
    }

    td,
    th {
        padding: 4px;
        border: 1px solid #cccccc;
        font-size: 14px;
        font-weight: 500;
    }
    th,
    caption {
        border: 1px solid #646464e8;
    }
    caption {
        background: #302e2ee8;
        color: white;
        font-weight: 400;
        padding: 4px 0;
        text-transform: capitalize;
        border-bottom: 0;
        font-weight: 500;
        font-size: 15px;
        letter-spacing: 1px;
    }
`;

export default ResultTable;
