import React, { useEffect, useState } from "react";

import { Document, Page, StyleSheet, Image, Text } from "@react-pdf/renderer";
import { DIV, SPAN, H1, H2, H3, H4 } from "../Components";

import logo from "../../../assets/Jkkniu_logo.png";
import grade from "../../../assets/grade.png";
import useGetYearSemester from "../../../utils/useGetYearSemester";

// import Results from "../data/CourseResult";

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "20pt",
        paddingVertical: "30pt",
        paddingBottom: "50pt",
    },

    tableHeaderRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    tableHeaderCell: {
        width: "50pt",
        height: "50pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: 1,
        borderRightColor: "#000000",
        borderRight: 0,
    },
    tableText: {
        fontSize: "8.5pt",
        textAlign: "center",
        lineHeight: "1.3pt",
    },
    valueRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    valueCell: {
        width: "50pt",
        height: "20pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: 1,
        borderRightColor: "#000000",
        borderRight: 0,
        borderTop: 0,
    },
    valueText: {
        fontSize: "9pt",
        textAlign: "center",
        lineHeight: "1.3pt",
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

const SingleCourseFinalPDF = ({ results, stepOneValue }) => {
    const sessionData = useGetYearSemester(stepOneValue?.semester);

    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
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
                            Nexus Institute of Sciences and Engineering
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
                            {sessionData?.year} Year {sessionData?.semester}{" "}
                            Semester Final Examination
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Course Name: {stepOneValue?.courseName}
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Course Code : {stepOneValue?.courseCode}
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

                {/* Second tableRow : Result */}
                <DIV
                    style={{ ...styles.tableHeaderRow, marginTop: "10pt" }}
                    isFixed={true}
                >
                    <DIV style={{ ...styles.tableHeaderCell, width: "60pt" }}>
                        <SPAN style={styles.tableText}>Roll</SPAN>
                    </DIV>
                    <DIV style={{ ...styles.tableHeaderCell, width: "55pt" }}>
                        <SPAN style={styles.tableText}>Attendance (10%)</SPAN>
                    </DIV>
                    <DIV style={{ ...styles.tableHeaderCell }}>
                        <SPAN style={styles.tableText}>Midterm-I (10%)</SPAN>
                    </DIV>
                    <DIV style={{ ...styles.tableHeaderCell }}>
                        <SPAN style={styles.tableText}>Midterm-II (10%)</SPAN>
                    </DIV>
                    <DIV style={{ ...styles.tableHeaderCell, width: "60pt" }}>
                        <SPAN style={styles.tableText}>Assignment/</SPAN>
                        <SPAN style={styles.tableText}>Presentation (10%)</SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.tableText}>Continuous (40%)</SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.tableText}>Examiner-I (60%)</SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.tableText}>Examiner-II (60%)</SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.tableText}>Examiner-III (60%)</SPAN>
                    </DIV>
                    <DIV style={{ ...styles.tableHeaderCell, width: "40pt" }}>
                        <SPAN style={styles.tableText}>Final</SPAN>
                        <SPAN style={styles.tableText}>(60%)</SPAN>
                    </DIV>
                    <DIV style={{ ...styles.tableHeaderCell, width: "45pt" }}>
                        <SPAN style={styles.tableText}>Total</SPAN>
                        <SPAN style={styles.tableText}>(100%)</SPAN>
                    </DIV>
                    <DIV style={{ ...styles.tableHeaderCell, width: "40pt" }}>
                        <SPAN style={styles.tableText}>Letter</SPAN>
                        <SPAN style={styles.tableText}>Grade</SPAN>
                    </DIV>
                    <DIV
                        style={{
                            ...styles.tableHeaderCell,
                            width: "40pt",
                        }}
                    >
                        <SPAN style={styles.tableText}>Grade</SPAN>
                        <SPAN style={styles.tableText}>Point</SPAN>
                    </DIV>
                    <DIV
                        style={{
                            ...styles.tableHeaderCell,
                            width: "60pt",
                            borderRight: 1,
                        }}
                    >
                        <SPAN style={styles.valueText}>Roll</SPAN>
                    </DIV>
                </DIV>

                {results?.map((result) => {
                    return (
                        <DIV
                            style={styles.valueRow}
                            key={result?._id}
                            wrap={false}
                        >
                            <DIV style={{ ...styles.valueCell, width: "60pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result?._id}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "55pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.attendance}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell }}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.midOne}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.midTwo}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "60pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.presentationOrAssignment}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.totalInternal}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.firstExaminer}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.secondExaminer}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.thirdExaminer || 0}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "40pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.totalExternal}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "45pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.total}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "40pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.LG}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "40pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result?.marks?.GP}
                                </SPAN>
                            </DIV>
                            <DIV
                                style={{
                                    ...styles.valueCell,
                                    width: "60pt",
                                    borderRight: 1,
                                }}
                            >
                                <SPAN style={styles.valueText}>
                                    {result?._id}
                                </SPAN>
                            </DIV>
                        </DIV>
                    );
                })}

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

export default SingleCourseFinalPDF;
