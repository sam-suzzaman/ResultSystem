import React, { useEffect, useState } from "react";

import { Document, Page, StyleSheet, Image, Text } from "@react-pdf/renderer";
import { DIV, SPAN, H1, H2, H3, H4, H5, H6 } from "../Components";

import logo from "../../../assets/Jkkniu_logo.png";
import grade from "../../../assets/grade.png";
import useGetYearSemester from "../../../utils/useGetYearSemester";

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "15pt",
        paddingVertical: "30pt",
        paddingBottom: "40pt",
    },
    text: {
        fontSize: "8pt",
        fontWeight: "extrabold",
    },
    tableContainer: {
        // marginTop: "17pt",
    },
    headerRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        height: "130pt",
    },
    rollColumn: {
        width: "60pt",
        border: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    resultColumn: {
        width: "70pt",
        // width: "70pt",
        border: 1,
        borderLeft: 0,
    },
    courseColumn: {
        height: "100%", //height
        width: "110pt", //width:140pt
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: 1,
        borderLeft: 0,
    },
    courseInnerRow: {
        minHeight: "110pt", //width: 140
        width: "115pt", //height:90pt
        transform: "rotate(-270deg) translate(-2%,3.5%)",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        textAlign: "right",
        borderLeft: 1,
    },
    innerRowCol: {
        width: "100%", //height:100%
        height: "22pt", //width: 28
        borderTop: 1,
        paddingHorizontal: "2.5pt",
        fontWeight: "extrabold",
        fontSize: "7.5pt",
        textTransform: "capitalize",
        paddingTop: "7.5pt",
        textAlign: "left",
    },
    valueRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    valueRollCell: {
        width: "60pt",
        height: "18pt",
        border: 1,
        borderTop: 0,
        // textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    valueResultCell: {
        width: "70pt",
        borderColor: "purple",
        borderRight: 1,
        borderBottom: 1,
    },
    valueCellSize: {
        width: "22pt",
        borderRight: 1,
        borderBottom: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    resultInnerRow: {
        minHeight: "70pt", //width: 140
        width: "115pt", //height:90pt
        transform: "rotate(-270deg) translate(25.5%,23.5%)",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        textAlign: "right",
        borderLeft: 1,
    },
    resultInnerRowCol: {
        width: "100%", //height:100%
        height: "35pt", //width: 28
        paddingHorizontal: "2.5pt",
        fontSize: "7pt",
        textTransform: "capitalize",
        paddingTop: "10pt",
        textAlign: "left",
    },
    pageNumber: {
        position: "absolute",
        fontSize: "10pt",
        bottom: "20pt",
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const SemesterFinalTabulation = ({ results, stepOneValue }) => {
    const [colData, setColData] = useState([]);
    const [pageSize, setPageSize] = useState("A4");
    const { year, semester } = useGetYearSemester(stepOneValue?.semester * 1);

    const [semesterValue, setSemesterValue] = useState(
        stepOneValue?.semester * 1
    );

    // Naming Semesters
    useEffect(() => {
        switch (semesterValue) {
            case 1:
                setSemesterValue("1st");
                break;
            case 2:
                setSemesterValue("2nd");
                break;
            case 3:
                setSemesterValue("3rd");
                break;
            case 4:
                setSemesterValue("4th");
                break;
            case 5:
                setSemesterValue("5th");
                break;
            case 6:
                setSemesterValue("6th");
                break;
            case 7:
                setSemesterValue("7th");
                break;
            case 8:
                setSemesterValue("8th");
                break;
            default:
                break;
        }
    }, [stepOneValue?.semester]);

    // Calculate Columns data
    useEffect(() => {
        setColData(results[0]?.marks);
    }, [results]);

    // Handle Page Size
    useEffect(() => {
        // (course = 6), A4, landscape[(595.28, 841.89)];
        // (course = 7), LEGAL, landscape[(612.0, 1008.0)];
        // (course = 9), A3, landscape[(841.89, 1190.55)];
        // (course = 10), C3, landscape[(918.43, 1298.27)];
        switch (colData?.length) {
            case 6:
                setPageSize("LEGAL");
                break;
            case 7:
                setPageSize("LEGAL");
                break;
            case 8:
                // setPageSize("TABLOID");
                setPageSize("A3");
                break;
            case 9:
                // setPageSize("TABLOID");
                setPageSize("A3");
                break;
            case 10:
                // setPageSize("TABLOID");
                setPageSize("C3");
                break;
            // case 8:
            //     setPageSize("C2");
            //     break;
            default:
        }
    }, [colData]);

    // handle Sheet Informations
    // useEffect(()=>{},[stepOneValue])
    return (
        <Document>
            <Page size={pageSize} orientation="landscape" style={styles.page}>
                {/* First row : header */}
                <DIV isFixed={true}>
                    <DIV
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginBottom: "10pt",
                        }}
                    >
                        <Image style={{ width: "50pt" }} src={logo} />
                        <Image
                            style={{
                                width: "200pt",
                                height: "120pt",
                                position: "absolute",
                                top: "0pt",
                                right: "40pt",
                            }}
                            src={grade}
                        />
                    </DIV>
                    <DIV style={{ marginBottom: "10pt" }}>
                        <H3
                            style={{
                                fontWeight: "700",
                                fontSize: "15pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Jatiya Kabi Kazi Nazrul Islam University
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Department of Electrical and Electronic Engineering
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            {year} Year {semester} Semester Mark Tabulation
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                            }}
                        >
                            Session: {stepOneValue?.session}
                        </H3>
                    </DIV>
                </DIV>

                <DIV style={styles.tableContainer}>
                    {/* Second Row */}
                    <DIV
                        style={{ ...styles.headerRow, marginTop: "10pt" }}
                        isFixed={true}
                    >
                        <DIV style={styles.rollColumn}>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                Roll
                            </SPAN>
                        </DIV>
                        {/* <DIV style={styles.courseColumn}>
                        <DIV>
                            <SPAN style={{ textAlign: "center" }}>row 1</SPAN>
                        </DIV>
                        <DIV style={styles.courseInnerRow}>
                            <SPAN style={styles.innerRowCol}>row 2</SPAN>
                            <SPAN style={styles.innerRowCol}>row 2</SPAN>
                            <SPAN style={styles.innerRowCol}>row 2</SPAN>
                            <SPAN style={styles.innerRowCol}>row 2</SPAN>
                            <SPAN style={styles.innerRowCol}>row 2</SPAN>
                        </DIV>
                    </DIV> */}
                        {colData?.map((course) => {
                            return (
                                <DIV style={styles.courseColumn}>
                                    <DIV>
                                        <SPAN
                                            style={{
                                                textAlign: "center",
                                                fontSize: "7.5pt",
                                                fontWeight: "extrabold",
                                                paddingTop: "2.5pt",
                                            }}
                                        >
                                            {course.courseCode} (
                                            {course.credit.toFixed(1)} Cr)
                                        </SPAN>
                                    </DIV>
                                    {course.credit === 3.0 && (
                                        <DIV style={styles.courseInnerRow}>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    borderTop: 0,
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                theory Continuous (40%)
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    fontSize: "7pt",
                                                    fontWeight: "extrabold",
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                theory final exam (60%)
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    fontSize: "7pt",
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                total (100%)
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    fontSize: "7pt",
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                LG
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    fontSize: "7pt",
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                GP
                                            </SPAN>
                                        </DIV>
                                    )}
                                    {course.credit === 1.5 && (
                                        <DIV
                                            style={{
                                                ...styles.courseInnerRow,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderTop: 0,
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                lab Continuous (20%)
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    ...styles.text,
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                lab final exam (80%)
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    fontSize: "7pt",
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                total (100%)
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    fontSize: "7pt",
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                LG
                                            </SPAN>
                                            <SPAN
                                                style={{
                                                    ...styles.innerRowCol,
                                                    borderBottom: 0,
                                                    fontSize: "7pt",
                                                    transform:
                                                        "rotate(-180deg)",
                                                }}
                                            >
                                                GP
                                            </SPAN>
                                        </DIV>
                                    )}
                                </DIV>
                            );
                        })}

                        <DIV style={styles.resultColumn}>
                            <DIV>
                                <SPAN
                                    style={{
                                        ...styles.text,
                                        textAlign: "center",
                                        fontSize: "8pt",
                                        paddingTop: "2pt",
                                    }}
                                >
                                    {semesterValue} Semester
                                </SPAN>
                                {/* <SPAN
                                    style={{
                                        ...styles.text,
                                        textAlign: "center",
                                        fontSize: "7pt",
                                        paddingTop: "3pt",
                                    }}
                                >
                                    {year} Year {semester} Semester
                                </SPAN> */}
                            </DIV>
                            <DIV style={styles.resultInnerRow}>
                                <SPAN
                                    style={{
                                        ...styles.text,
                                        ...styles.resultInnerRowCol,
                                        transform: "rotate(-180deg)",
                                    }}
                                >
                                    CGPA in {year} Year {semester} semester
                                    (Total Credit=18)
                                </SPAN>
                                <SPAN
                                    style={{
                                        ...styles.text,
                                        ...styles.resultInnerRowCol,
                                        transform: "rotate(-180deg)",
                                        borderTop: 1,
                                    }}
                                >
                                    GPA in {year} Year {semester} semester
                                    {"    "}(Out of 4.00)
                                </SPAN>
                            </DIV>
                        </DIV>
                    </DIV>

                    {/* Third Row:Value Row */}
                    {results?.map((res) => {
                        return (
                            <DIV style={styles.valueRow} wrap={false}>
                                <DIV style={styles.valueRollCell}>
                                    <SPAN style={styles.text}>{res._id}</SPAN>
                                </DIV>
                                {res?.marks?.map((mark) => {
                                    return (
                                        <>
                                            <DIV style={styles.valueCellSize}>
                                                <SPAN style={styles.text}>
                                                    {mark[
                                                        "theory Continuous (40%)"
                                                    ] ||
                                                        mark[
                                                            "Lab Continuous (40%)"
                                                        ]}
                                                </SPAN>
                                            </DIV>
                                            <DIV
                                                style={
                                                    (styles.valueCell,
                                                    styles.valueCellSize)
                                                }
                                            >
                                                <SPAN style={styles.text}>
                                                    {mark[
                                                        "theory final exam (60%)"
                                                    ] ||
                                                        mark[
                                                            "Lab final exam (60%)"
                                                        ]}
                                                </SPAN>
                                            </DIV>
                                            <DIV
                                                style={
                                                    (styles.valueCell,
                                                    styles.valueCellSize)
                                                }
                                            >
                                                <SPAN style={styles.text}>
                                                    {mark["total"]}
                                                </SPAN>
                                            </DIV>
                                            <DIV
                                                style={
                                                    (styles.valueCell,
                                                    styles.valueCellSize)
                                                }
                                            >
                                                <SPAN style={styles.text}>
                                                    {mark?.LG}
                                                </SPAN>
                                            </DIV>
                                            <DIV
                                                style={
                                                    (styles.valueCell,
                                                    styles.valueCellSize)
                                                }
                                            >
                                                <SPAN style={styles.text}>
                                                    {mark?.GP}
                                                </SPAN>
                                            </DIV>
                                        </>
                                    );
                                })}
                                <DIV
                                    style={{
                                        ...styles.valueCell,
                                        ...styles.valueResultCell,
                                        width: "35pt",
                                        borderRight: 1,
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SPAN style={styles.text}>{res?.CGPA}</SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.valueCell,
                                        ...styles.valueResultCell,
                                        width: "35pt",
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <SPAN style={styles.text}>{res?.GPA}</SPAN>
                                </DIV>
                            </DIV>
                        );
                    })}
                </DIV>
                {/* <DIV style={styles.valueRow}>
                    <DIV style={(styles.valueCell, styles.valueRollCell)}>
                        <SPAN>18102930</SPAN>
                    </DIV>
                    {cellArray.map((cell) => {
                        return (
                            <DIV
                                style={(styles.valueCell, styles.valueCellSize)}
                            >
                                <SPAN>10</SPAN>
                            </DIV>
                        );
                    })}
                    <DIV style={(styles.valueCell, styles.valueResultCell)}>
                        <SPAN>value is</SPAN>
                    </DIV>
                </DIV> */}
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                    fixed
                />
            </Page>
        </Document>
    );
};

export default SemesterFinalTabulation;
