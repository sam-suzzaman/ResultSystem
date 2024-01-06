import React, { useEffect, useState } from "react";

import { Document, Page, StyleSheet, Image, Text } from "@react-pdf/renderer";
import { DIV, SPAN, H1, H2, H3, H4 } from "../Components";

import logo from "../../../assets/Jkkniu_logo.png";
import grade from "../../../assets/grade.png";

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
                            2nd Year 1st Semester Final Examination - 2018
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Course Name: Power Electronics
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Course Code : EEE-311
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                            }}
                        >
                            Session: 2017-18
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
                            key={result._id}
                            wrap={false}
                        >
                            <DIV style={{ ...styles.valueCell, width: "60pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result.roll}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "55pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result.attendance}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell }}>
                                <SPAN style={styles.valueText}>
                                    {result.midOne}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result.midTwo}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "60pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result.assignmentOrPresentation}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result.continuous}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result.firstExaminer}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result.secondExaminer}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN style={styles.valueText}>
                                    {result.thirdExaminer || 0}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "40pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result.finalMark}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "45pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result.total}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "40pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result.LetterGrade}
                                </SPAN>
                            </DIV>
                            <DIV style={{ ...styles.valueCell, width: "40pt" }}>
                                <SPAN style={styles.valueText}>
                                    {result.GradePoint}
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
                                    {result.roll}
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
