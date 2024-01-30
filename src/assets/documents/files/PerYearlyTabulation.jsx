import React, { useEffect, useState } from "react";

import { Document, Page, StyleSheet, Image, Text } from "@react-pdf/renderer";
import { DIV, SPAN, H1, H2, H3, H4, H5, H6 } from "../Components";

import logo from "../../../assets/Jkkniu_logo.png";
import grade from "../../../assets/grade.png";

// import data from "../data/YearlyMark";

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "15pt",
        paddingVertical: "50pt",
    },
    stu_tab_row: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
    },
    stu_tab_col: {
        border: 1,
        // padding: "1pt",
        paddingTop: "1.2pt",
        paddingBottom: "1.2pt",
        paddingLeft: "2.2pt",
    },
    row_1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
});

const PerYearlyTabulation = ({ result, student, stepOneValue }) => {
    // console.log(stepOneValue);
    const [year, setYear] = useState("1st");

    // calculate year values
    useEffect(() => {
        switch (stepOneValue?.year) {
            case "1":
                setYear("1st");
                break;
            case "2":
                setYear("2nd");
                break;
            case "3":
                setYear("3rd");
                break;
            case "4":
                setYear("4th");
                break;

            default:
                break;
        }
    }, [stepOneValue?.year]);

    return (
        <Document>
            <Page size="LEGAL" orientation="landscape" style={styles.page}>
                {/* First row :Top-title( Logo and info) */}
                <DIV
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginBottom: "20pt",
                        gap: "30pt",
                    }}
                >
                    <Image
                        style={{
                            width: "220pt",

                            position: "absolute",
                            top: "0pt",
                            right: "0pt",
                        }}
                        src={grade}
                    />
                    <Image style={{ width: "60pt" }} src={logo} />
                    <DIV
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: "5pt",
                        }}
                    >
                        <H4 style={{ fontSize: "10pt" }}>
                            Jatiya Kabi Kazi Nazrul Islam University
                        </H4>
                        <H4 style={{ fontSize: "10pt" }}>
                            Department of Electrical and Electronic Engineering
                        </H4>
                        <H4 style={{ fontSize: "10pt" }}>
                            The Degree of Bachelor of Science in Engineering
                        </H4>
                        <H4 style={{ fontSize: "10pt" }}>
                            Tabulation Sheet of {year} Year Examination-
                            {student?.examYear}
                        </H4>
                        <H4 style={{ fontSize: "10pt" }}>
                            Faculty of Science and Engineering
                        </H4>
                    </DIV>
                </DIV>

                {/* Second row: Top-title(Student Info) */}
                <DIV style={styles.studentTable}>
                    {/* row -1 */}
                    <DIV style={styles.stu_tab_row}>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "50pt",
                                borderRight: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>Name</H4>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "150pt",
                                borderRight: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>{student?.name}</H4>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "65pt",
                                borderRight: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>Session</H4>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "50pt",
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>
                                {student?.session}
                            </H4>
                        </DIV>
                    </DIV>
                    {/* row -2 */}
                    <DIV style={styles.stu_tab_row}>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "50pt",
                                borderRight: 0,
                                borderTop: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>Roll</H4>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "150pt",
                                borderRight: 0,
                                borderTop: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>{student?.roll}</H4>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "65pt",
                                borderRight: 0,
                                borderTop: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>Registration</H4>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "50pt",
                                borderTop: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>6787</H4>
                        </DIV>
                    </DIV>
                    {/* row -3 */}
                    <DIV style={styles.stu_tab_row}>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "50pt",
                                borderRight: 0,
                                borderTop: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>Hall</H4>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.stu_tab_col,
                                width: "265pt",
                                borderTop: 0,
                            }}
                        >
                            <H4 style={{ fontSize: "9pt" }}>-</H4>
                        </DIV>
                    </DIV>
                </DIV>

                {/* ========== Table Content ========= */}
                <DIV
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* whole table wrapper */}
                    <DIV
                        style={{
                            marginTop: "20pt",
                        }}
                    >
                        {/* Row-1:THead */}
                        <DIV style={{ ...styles.row_1 }}>
                            {/* col-1:course code */}
                            <DIV
                                style={{
                                    width: "100pt",
                                    border: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <SPAN style={{ fontSize: "9pt" }}>
                                    Course Code
                                </SPAN>
                            </DIV>
                            {/* col-2: first-semester col */}
                            <DIV style={{ display: "flex" }}>
                                {/* sub-row-1 */}
                                <DIV
                                    style={{
                                        borderBottom: 1,
                                        borderTop: 1,
                                        // borderRight: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: "1.5pt",
                                        paddingBottom: "1.5pt",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "9pt",
                                            textAlign: "center",
                                        }}
                                    >
                                        1st Semester
                                    </SPAN>
                                </DIV>
                                {/* sub-row-2: courses col */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {result?.marks?.firstSemester?.map(
                                        (data, i) => {
                                            let isBorderRight =
                                                result?.marks?.firstSemester
                                                    .length -
                                                    1 ===
                                                i
                                                    ? 0
                                                    : 1;

                                            const code =
                                                data?.courseCode?.split("-");
                                            const name = code[0];
                                            const number = code[1];
                                            return (
                                                <DIV
                                                    style={{
                                                        width: "25pt",
                                                        borderRight:
                                                            isBorderRight,
                                                        borderBottom: 1,
                                                        paddingTop: "2pt",
                                                        paddingBottom: "2pt",
                                                    }}
                                                >
                                                    <SPAN
                                                        style={{
                                                            fontSize: "8pt",
                                                            textAlign: "center",
                                                            marginBottom: "1pt",
                                                        }}
                                                    >
                                                        {name}
                                                    </SPAN>
                                                    <SPAN
                                                        style={{
                                                            fontSize: "8.2pt",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {number}
                                                    </SPAN>
                                                </DIV>
                                            );
                                        }
                                    )}
                                </DIV>
                            </DIV>
                            {/* col2: second-semester col */}
                            <DIV style={{ display: "flex", borderLeft: 1 }}>
                                <DIV
                                    style={{
                                        borderBottom: 1,
                                        borderTop: 1,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: "1.5pt",
                                        paddingBottom: "1.5pt",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "9pt",
                                            textAlign: "center",
                                        }}
                                    >
                                        2nd Semester
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* sub-row-2: course row*/}
                                    {result?.marks?.secondSemester?.map(
                                        (data, i) => {
                                            let isBorder =
                                                result?.marks?.secondSemester
                                                    ?.length -
                                                    1 ===
                                                i
                                                    ? 0
                                                    : 1;

                                            const code =
                                                data?.courseCode.split("-");
                                            const name = code[0];
                                            const number = code[1];
                                            return (
                                                <DIV
                                                    style={{
                                                        width: "25pt",
                                                        borderRight: isBorder,
                                                        borderBottom: 1,
                                                        paddingTop: "2pt",
                                                        paddingBottom: "2pt",
                                                    }}
                                                >
                                                    <SPAN
                                                        style={{
                                                            fontSize: "7.5pt",
                                                            textAlign: "center",
                                                            marginBottom: "1pt",
                                                        }}
                                                    >
                                                        {name}
                                                    </SPAN>
                                                    <SPAN
                                                        style={{
                                                            fontSize: "8.2pt",
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        {number}
                                                    </SPAN>
                                                </DIV>
                                            );
                                        }
                                    )}
                                </DIV>
                            </DIV>
                            {/* col3: grade(this year) */}
                            <DIV
                                style={{
                                    width: "130pt",
                                    border: 1,
                                    borderRight: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <SPAN style={{ fontSize: "9pt" }}>
                                    This Year
                                </SPAN>
                            </DIV>
                            {/* col4: grade(previous year)*/}
                            <DIV
                                style={{
                                    width: "130pt",
                                    border: 1,
                                    borderRight: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <SPAN style={{ fontSize: "9pt" }}>
                                    Previous Year
                                </SPAN>
                            </DIV>
                            {/* col5: grade(upto this year) */}
                            <DIV
                                style={{
                                    width: "130pt",
                                    border: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <SPAN style={{ fontSize: "9pt" }}>
                                    Upto This Year
                                </SPAN>
                            </DIV>
                        </DIV>

                        {/* Row-2: Credit values row */}
                        <DIV style={{ ...styles.row_1, height: "16pt" }}>
                            <DIV
                                style={{
                                    width: "100pt",
                                    border: 1,
                                    borderTop: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <SPAN style={{ fontSize: "9pt" }}>
                                    No. of Credit
                                </SPAN>
                            </DIV>
                            {/* col-1: for first-semester col values*/}
                            <DIV style={{ display: "flex", minWidth: "53pt" }}>
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {result?.marks?.firstSemester?.map(
                                        (data, i) => {
                                            let isBorderRight =
                                                result?.marks?.firstSemester
                                                    ?.length -
                                                    1 ===
                                                i
                                                    ? 0
                                                    : 1;
                                            return (
                                                <DIV
                                                    style={{
                                                        width: "25pt",
                                                        height: "16pt",
                                                        borderRight:
                                                            isBorderRight,
                                                        borderBottom: 1,
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <SPAN
                                                        style={{
                                                            fontSize: "8.5pt",
                                                            textAlign: "center",
                                                            marginBottom: "1pt",
                                                        }}
                                                    >
                                                        {data?.courseCredit}
                                                    </SPAN>
                                                </DIV>
                                            );
                                        }
                                    )}
                                </DIV>
                            </DIV>
                            {/* col-2: for second-semester col values */}
                            <DIV
                                style={{
                                    display: "flex",
                                    borderLeft: 1,
                                    minWidth: "57pt",
                                }}
                            >
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {result?.marks?.secondSemester?.map(
                                        (data, i) => {
                                            let isBorderRight =
                                                result?.marks?.secondSemester
                                                    ?.length -
                                                    1 ===
                                                i
                                                    ? 0
                                                    : 1;

                                            return (
                                                <DIV
                                                    style={{
                                                        width: "25pt",
                                                        height: "16pt",
                                                        borderRight:
                                                            isBorderRight,
                                                        borderBottom: 1,
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <SPAN
                                                        style={{
                                                            fontSize: "8.5pt",
                                                            textAlign: "center",
                                                            marginBottom: "1pt",
                                                        }}
                                                    >
                                                        {data?.courseCredit}
                                                    </SPAN>
                                                </DIV>
                                            );
                                        }
                                    )}
                                </DIV>
                            </DIV>
                            {/* col-3: grades(this year) */}
                            <DIV
                                style={{
                                    width: "130pt",
                                    height: "32pt",
                                    border: 1,
                                    borderRight: 0,
                                    borderTop: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                    // alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <DIV
                                    style={{
                                        width: "27%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN style={{ fontSize: "8.5pt" }}>
                                        CGP
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "23%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                        }}
                                    >
                                        EG
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "23%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                        }}
                                    >
                                        TC
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "27%",
                                        // borderRight: 0,
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                            textAlign: "center",
                                        }}
                                    >
                                        CGPA
                                    </SPAN>
                                </DIV>
                            </DIV>
                            {/* col-4: grades(Previous year) */}
                            <DIV
                                style={{
                                    width: "130pt",
                                    height: "32pt",
                                    border: 1,
                                    borderRight: 0,
                                    borderTop: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                    // alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <DIV
                                    style={{
                                        width: "27%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN style={{ fontSize: "8.5pt" }}>
                                        CGP
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "23%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                        }}
                                    >
                                        EG
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "23%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                        }}
                                    >
                                        TC
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "27%",
                                        // borderRight: 0,
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                            textAlign: "center",
                                        }}
                                    >
                                        CGPA
                                    </SPAN>
                                </DIV>
                            </DIV>
                            {/* col-5: grades(upto) */}
                            <DIV
                                style={{
                                    width: "130pt",
                                    height: "32pt",
                                    border: 1,
                                    borderTop: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                    // alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <DIV
                                    style={{
                                        width: "27%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN style={{ fontSize: "8.5pt" }}>
                                        CGP
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "23%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                        }}
                                    >
                                        EG
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "23%",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                        }}
                                    >
                                        TC
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        width: "27%",
                                        // borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8.5pt",
                                            textAlign: "center",
                                        }}
                                    >
                                        CGPA
                                    </SPAN>
                                </DIV>
                            </DIV>
                        </DIV>

                        {/* Row-3: Course এর full Mark row */}
                        <DIV style={{ ...styles.row_1, height: "16pt" }}>
                            {/* col-1: full-marks(title) */}
                            <DIV
                                style={{
                                    width: "100pt",
                                    border: 1,
                                    borderTop: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <SPAN style={{ fontSize: "9pt" }}>
                                    Full Marks
                                </SPAN>
                            </DIV>
                            {/* col-2: for first-semester cols values */}
                            <DIV style={{ display: "flex", minWidth: "53pt" }}>
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {result?.marks?.firstSemester?.map(
                                        (data, i) => {
                                            let isBorderRight =
                                                result?.marks?.firstSemester
                                                    .length -
                                                    1 ===
                                                i
                                                    ? 0
                                                    : 1;
                                            return (
                                                <DIV
                                                    style={{
                                                        width: "25pt",
                                                        height: "16pt",
                                                        borderRight:
                                                            isBorderRight,
                                                        borderBottom: 1,
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <SPAN
                                                        style={{
                                                            fontSize: "8.5pt",
                                                            textAlign: "center",
                                                            marginBottom: "1pt",
                                                        }}
                                                    >
                                                        {data?.fullMarks}
                                                    </SPAN>
                                                </DIV>
                                            );
                                        }
                                    )}
                                </DIV>
                            </DIV>
                            {/* col-3: for second-semester cols values */}
                            <DIV style={{ display: "flex", borderLeft: 1 }}>
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {result?.marks?.secondSemester?.map(
                                        (data, i) => {
                                            let isBorderRight =
                                                result?.marks?.secondSemester
                                                    ?.length -
                                                    1 ===
                                                i
                                                    ? 0
                                                    : 1;

                                            return (
                                                <DIV
                                                    style={{
                                                        width: "25pt",
                                                        height: "16pt",
                                                        borderRight:
                                                            isBorderRight,
                                                        borderBottom: 1,
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <SPAN
                                                        style={{
                                                            fontSize: "8.5pt",
                                                            textAlign: "center",
                                                            marginBottom: "1pt",
                                                        }}
                                                    >
                                                        {data?.fullMarks}
                                                    </SPAN>
                                                </DIV>
                                            );
                                        }
                                    )}
                                </DIV>
                            </DIV>
                        </DIV>

                        {/* Row-4: Values:(Regular)+this_year+prev_year+upto_year */}
                        <DIV style={{ ...styles.row_1 }}>
                            {/* col-1 */}
                            <DIV
                                style={{
                                    width: "100pt",
                                    border: 1,
                                    borderTop: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {/* Col-1: Mark type row */}
                                <DIV
                                    style={{
                                        width: "50pt",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SPAN style={{ fontSize: "9pt" }}>
                                        Regular
                                    </SPAN>
                                </DIV>
                                {/* Col-2: Marks types(internal,LG,GP etc) */}
                                <DIV style={{ display: "flex" }}>
                                    {/* Internal */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                            borderBottom: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Internal
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Marks
                                            </SPAN>
                                        </DIV>
                                    </DIV>

                                    {/* Final */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                            borderBottom: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Final
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Marks
                                            </SPAN>
                                        </DIV>
                                    </DIV>

                                    {/* Total */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                            borderBottom: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Total
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Marks
                                            </SPAN>
                                        </DIV>
                                    </DIV>

                                    {/* LG */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                            borderBottom: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Obtained
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                LG
                                            </SPAN>
                                        </DIV>
                                    </DIV>

                                    {/* GP */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Obtained
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                GP
                                            </SPAN>
                                        </DIV>
                                    </DIV>
                                </DIV>
                            </DIV>

                            {/* col-2: Semesterwise Course values Col/Part */}
                            <DIV>
                                {/* 1.Internal Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            .length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.internalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.internalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>

                                {/* 2.Final Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            .length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.finalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {/* course-1 */}
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.finalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>

                                {/* 3.Total Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.totalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.totalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>

                                {/* 4.LG Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.LG
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.LG
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>

                                {/* 5.GP Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.GP
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.regular
                                                                        ?.GP
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>
                            </DIV>

                            {/* col-3: results column */}
                            <DIV
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                {/* col-3.1: result grades:this year */}
                                <DIV
                                    style={{
                                        width: "130pt",
                                        height: "105pt",
                                        border: 1,
                                        borderRight: 0,
                                        borderTop: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <DIV
                                        style={{
                                            width: "27%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN style={{ fontSize: "8.5pt" }}>
                                            {
                                                result?.regularPoints?.thisYear
                                                    ?.cgp
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.regularPoints?.thisYear
                                                    ?.ec
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.regularPoints?.thisYear
                                                    ?.tc
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "27%",
                                            // borderRight: 0,
                                            height: "100%",
                                            display: "flex",
                                            // justifyContent: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                                textAlign: "center",
                                            }}
                                        >
                                            {
                                                result?.regularPoints?.thisYear
                                                    ?.cgpa
                                            }
                                        </SPAN>
                                    </DIV>
                                </DIV>
                                {/* col3.2: result grades:Previous */}
                                <DIV
                                    style={{
                                        width: "130pt",
                                        height: "105pt",
                                        border: 1,
                                        borderRight: 0,
                                        borderTop: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <DIV
                                        style={{
                                            width: "27%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN style={{ fontSize: "8.5pt" }}>
                                            {
                                                result?.regularPoints
                                                    ?.previousYear?.cgp
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.regularPoints
                                                    ?.previousYear?.ec
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.regularPoints
                                                    ?.previousYear?.tc
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "27%",
                                            // borderRight: 0,
                                            height: "100%",
                                            display: "flex",
                                            // justifyContent: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                                textAlign: "center",
                                            }}
                                        >
                                            {
                                                result?.regularPoints
                                                    ?.previousYear?.cgpa
                                            }
                                        </SPAN>
                                    </DIV>
                                </DIV>
                                {/* col3.3: result grades:upto */}
                                <DIV
                                    style={{
                                        width: "130pt",
                                        height: "105pt",
                                        border: 1,
                                        borderTop: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <DIV
                                        style={{
                                            width: "27%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN style={{ fontSize: "8.5pt" }}>
                                            {
                                                result?.regularPoints
                                                    ?.uptoThisYear?.cgp
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.regularPoints
                                                    ?.uptoThisYear?.ec
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.regularPoints
                                                    ?.uptoThisYear?.tc
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "27%",
                                            // borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            // justifyContent: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                                textAlign: "center",
                                            }}
                                        >
                                            {
                                                result?.regularPoints
                                                    ?.uptoThisYear?.cgpa
                                            }
                                        </SPAN>
                                    </DIV>
                                </DIV>
                            </DIV>
                        </DIV>

                        {/* Row-5: Values:(Improve)+this_year+prev_year+upto_year */}
                        <DIV style={{ ...styles.row_1 }}>
                            {/* col-1 */}
                            <DIV
                                style={{
                                    width: "100pt",
                                    border: 1,
                                    borderTop: 0,
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {/* Col-1: Mark type row */}
                                <DIV
                                    style={{
                                        width: "50pt",
                                        borderRight: 1,
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SPAN style={{ fontSize: "9pt" }}>
                                        Improve
                                    </SPAN>
                                    <SPAN style={{ fontSize: "9pt" }}>
                                        ment
                                    </SPAN>
                                </DIV>
                                {/* Col-2: Marks types(internal,LG,GP etc) */}
                                <DIV style={{ display: "flex" }}>
                                    {/* Final */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                            borderBottom: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Final
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Marks
                                            </SPAN>
                                        </DIV>
                                    </DIV>

                                    {/* Total */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                            borderBottom: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Total
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Marks
                                            </SPAN>
                                        </DIV>
                                    </DIV>

                                    {/* LG */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                            borderBottom: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Obtained
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                LG
                                            </SPAN>
                                        </DIV>
                                    </DIV>

                                    {/* GP */}
                                    <DIV
                                        style={{
                                            width: "50pt",
                                            paddingLeft: "2pt",
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                height: "20pt",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                Obtained
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    fontSize: "9pt",
                                                }}
                                            >
                                                GP
                                            </SPAN>
                                        </DIV>
                                    </DIV>
                                </DIV>
                            </DIV>

                            {/* col-2: Semesterwise Course values Col/Part */}
                            <DIV>
                                {/* 1.Final Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            .length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.finalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.finalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>

                                {/* 2.Total Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.totalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.totalMark
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>

                                {/* 3.LG Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.LG
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.LG
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>

                                {/* 4.GP Row */}
                                <DIV
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    {/* col-1: first-semester */}
                                    <DIV style={{ display: "flex" }}>
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.firstSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.firstSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;
                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.GP
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                    {/* col-2: second-semester */}
                                    <DIV
                                        style={{
                                            display: "flex",
                                            borderLeft: 1,
                                        }}
                                    >
                                        <DIV
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                            }}
                                        >
                                            {result?.marks?.secondSemester?.map(
                                                (data, i) => {
                                                    let isBorderRight =
                                                        result?.marks
                                                            ?.secondSemester
                                                            ?.length -
                                                            1 ===
                                                        i
                                                            ? 0
                                                            : 1;

                                                    return (
                                                        <DIV
                                                            style={{
                                                                width: "25pt",
                                                                height: "21pt",
                                                                borderRight:
                                                                    isBorderRight,
                                                                borderBottom: 1,
                                                                display: "flex",
                                                                justifyContent:
                                                                    "center",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <SPAN
                                                                style={{
                                                                    fontSize:
                                                                        "8.5pt",
                                                                    textAlign:
                                                                        "center",
                                                                    marginBottom:
                                                                        "1pt",
                                                                }}
                                                            >
                                                                {
                                                                    data
                                                                        ?.improve
                                                                        ?.GP
                                                                }
                                                            </SPAN>
                                                        </DIV>
                                                    );
                                                }
                                            )}
                                        </DIV>
                                    </DIV>
                                </DIV>
                            </DIV>

                            {/* col-3: results column */}
                            <DIV
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                {/* col-3.1: result grades:this year */}
                                <DIV
                                    style={{
                                        width: "130pt",
                                        height: "84pt",
                                        border: 1,
                                        borderRight: 0,
                                        borderTop: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <DIV
                                        style={{
                                            width: "27%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN style={{ fontSize: "8.5pt" }}>
                                            {
                                                result?.improvePoints?.thisYear
                                                    ?.cgp
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.improvePoints?.thisYear
                                                    ?.ec
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.improvePoints?.thisYear
                                                    ?.tc
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "27%",
                                            // borderRight: 0,
                                            height: "100%",
                                            display: "flex",
                                            // justifyContent: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                                textAlign: "center",
                                            }}
                                        >
                                            {
                                                result?.improvePoints?.thisYear
                                                    ?.cgpa
                                            }
                                        </SPAN>
                                    </DIV>
                                </DIV>
                                {/* col3.2: result grades:Previous */}
                                <DIV
                                    style={{
                                        width: "130pt",
                                        height: "84pt",
                                        border: 1,
                                        borderRight: 0,
                                        borderTop: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <DIV
                                        style={{
                                            width: "27%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN style={{ fontSize: "8.5pt" }}>
                                            {
                                                result?.improvePoints
                                                    ?.previousYear?.cgp
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.improvePoints
                                                    ?.previousYear?.ec
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.improvePoints
                                                    ?.previousYear?.tc
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "27%",
                                            // borderRight: 0,
                                            height: "100%",
                                            display: "flex",
                                            // justifyContent: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                                textAlign: "center",
                                            }}
                                        >
                                            {
                                                result?.improvePoints
                                                    ?.previousYear?.cgpa
                                            }
                                        </SPAN>
                                    </DIV>
                                </DIV>
                                {/* col3.3: result grades:upto */}
                                <DIV
                                    style={{
                                        width: "130pt",
                                        height: "84pt",
                                        border: 1,
                                        borderTop: 0,
                                        display: "flex",
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <DIV
                                        style={{
                                            width: "27%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN style={{ fontSize: "8.5pt" }}>
                                            {
                                                result?.improvePoints
                                                    ?.uptoThisYear?.cgp
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.improvePoints
                                                    ?.uptoThisYear?.ec
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "23%",
                                            borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            // alignItems: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                            }}
                                        >
                                            {
                                                result?.improvePoints
                                                    ?.uptoThisYear?.tc
                                            }
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            width: "27%",
                                            // borderRight: 1,
                                            height: "100%",
                                            display: "flex",
                                            // justifyContent: "center",
                                            paddingTop: "3pt",
                                        }}
                                    >
                                        <SPAN
                                            style={{
                                                fontSize: "8.5pt",
                                                textAlign: "center",
                                            }}
                                        >
                                            {
                                                result?.improvePoints
                                                    ?.uptoThisYear?.cgpa
                                            }
                                        </SPAN>
                                    </DIV>
                                </DIV>
                            </DIV>
                        </DIV>
                    </DIV>
                </DIV>
            </Page>
        </Document>
    );
};

export default PerYearlyTabulation;
