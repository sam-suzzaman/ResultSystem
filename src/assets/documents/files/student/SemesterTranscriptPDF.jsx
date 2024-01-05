import React, { useEffect, useState } from "react";

import { Document, Page, StyleSheet, Image } from "@react-pdf/renderer";
import { DIV, SPAN, H1, H2, H3, H4 } from "../../Components";

import logo from "../../../../assets/Jkkniu_logo.png";
import grade from "../../../../assets/grade.png";

// import TranscriptData from "../../data/SemesterTranscript";

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "30pt",
        paddingVertical: "50pt",
    },
    tableHeaderRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    tableHeaderCell: {
        width: "40pt",
        height: "54pt",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        border: 1,
        borderRight: 0,
    },
    headerText: {
        fontSize: "9pt",
        lineHeight: "1.3",
    },

    headerCol1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    headerCol2: {
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "center",
    },

    tableValueRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    tableValueCell: {
        width: "40pt",
        height: "20pt",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        border: 1,
        borderRight: 0,
        borderTop: 0,
    },

    valueCol1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    valueCol2: {
        // borderBottom: 0,
        // borderTop: 0,
        borderLeft: 0,
        height: "100%",
    },
    valueSubRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    valueText: {
        fontSize: "9pt",
        lineHeight: "1.3",
        padding: "3pt",
    },

    authorityTextRow: {
        marginTop: "4pt",
    },
    authorityText: {
        textAlign: "center",
        fontSize: "10pt",
        fontStyle: "italic",
    },
    verifyRow: {
        marginTop: "40pt",
    },
    verifyText: {
        fontSize: "10pt",
    },
    row1: {
        marginBottom: "10pt",
    },
});

const SemesterTranscriptPDF = ({ TranscriptData, stepOneValue }) => {
    const [results, setResults] = useState({});
    const [refactoredResults, setRefactoredResults] = useState([]);
    const [totalValue, setTotalValue] = useState({});

    useEffect(() => {
        setResults(TranscriptData?.semesterTranscript);
    }, []);

    // refactor result data
    useEffect(() => {
        const courses = results?.courseData;
        const newCourses = courses?.map((course) => {
            let credit_earned;
            if (course.CGP) {
                credit_earned = course.CGP;
            } else {
                credit_earned = 0;
            }
            const GPE_calculation = course.CGP * credit_earned;
            const GPE = GPE_calculation.toFixed(2);

            return { ...course, credit_earned, GPE };
        });
        setRefactoredResults({ ...results, courseData: newCourses });
    }, [results]);

    // Calculate semester total values
    useEffect(() => {
        const courses = refactoredResults?.courseData;

        const totalCredits = courses?.reduce(
            (acc, currentValue) => currentValue?.courseCredit * 1 + acc,
            0
        );

        const totalCreditsEarned = courses?.reduce(
            (acc, currentValue) => currentValue?.credit_earned * 1 + acc,
            0
        );
        const totalGPE = courses?.reduce(
            (acc, currentValue) => currentValue?.GPE * 1 + acc,
            0
        );

        setTotalValue({ totalCredits, totalCreditsEarned, totalGPE });
    }, [refactoredResults]);
    console.log(refactoredResults);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* First row : header */}
                <DIV>
                    <DIV
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginBottom: "20pt",
                        }}
                    >
                        <Image style={{ width: "60pt" }} src={logo} />
                        <Image
                            style={{
                                width: "190pt",
                                height: "90pt",
                                position: "absolute",
                                top: "-17pt",
                                right: "0pt",
                            }}
                            src={grade}
                        />
                    </DIV>
                    <DIV>
                        <H1
                            style={{
                                textAlign: "center",
                                textTransform: "uppercase",
                                fontSize: "19pt",
                                fontWeight: "700",
                            }}
                        >
                            jatiya kabi kazi nazrul islam univeristy
                        </H1>
                        <H3
                            style={{
                                textAlign: "center",
                                textTransform: "capitalize",
                                fontSize: "15pt",
                                marginTop: "7pt",
                            }}
                        >
                            Trishal, Mymensingh
                        </H3>
                    </DIV>
                    <DIV>
                        <DIV
                            style={{ marginBottom: "40pt", marginTop: "50pt" }}
                        >
                            <H2
                                style={{
                                    fontWeight: "600",
                                    fontSize: "16pt",
                                    textAlign: "center",
                                    textDecoration: "underline",
                                }}
                            >
                                Academic Transcript
                            </H2>
                        </DIV>

                        <DIV style={{ marginBottom: "30pt" }}>
                            <H4 style={{ fontSize: "10pt" }}>
                                Degree:{"  "} B.Sc(Engg.) - Electrical and
                                Electronic Engineering
                            </H4>
                            <H4 style={{ fontSize: "10pt", marginTop: "7pt" }}>
                                Name:{"  "} Samsuzzaman
                            </H4>
                            <DIV
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: "7pt",
                                }}
                            >
                                <H4 style={{ fontSize: "10pt" }}>
                                    Roll:{"  "} 18102930
                                </H4>
                                <H4 style={{ fontSize: "10pt" }}>
                                    Session:{"  "} 2017-18
                                </H4>
                                <H4 style={{ fontSize: "10pt" }}>
                                    Semester:{"  "} 7th
                                </H4>
                            </DIV>
                        </DIV>
                    </DIV>
                </DIV>

                {/* Second row: table title */}
                <DIV style={styles.tableHeaderRow}>
                    <DIV style={styles.headerCol1}>
                        <DIV
                            style={{ ...styles.tableHeaderCell, width: "60pt" }}
                        >
                            <SPAN style={styles.headerText}>Course</SPAN>
                            <SPAN style={styles.headerText}>Code</SPAN>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.tableHeaderCell,
                                width: "200pt",
                            }}
                        >
                            <SPAN style={styles.headerText}>Course Title</SPAN>
                        </DIV>
                        <DIV style={styles.tableHeaderCell}>
                            <SPAN style={styles.headerText}>Credit Hours</SPAN>
                        </DIV>
                        <DIV style={styles.tableHeaderCell}>
                            <SPAN style={styles.headerText}>Letter Grade</SPAN>
                            <SPAN style={styles.headerText}>(LG)</SPAN>
                        </DIV>
                        <DIV
                            style={{ ...styles.tableHeaderCell, width: "65pt" }}
                        >
                            <SPAN style={styles.headerText}>Corresponding</SPAN>
                            <SPAN style={styles.headerText}>
                                Grade Point (CGPA)
                            </SPAN>
                        </DIV>
                        <DIV style={styles.tableHeaderCell}>
                            <SPAN style={styles.headerText}>
                                Credits Earned
                            </SPAN>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.tableHeaderCell,
                                borderRight: 1,
                            }}
                        >
                            <SPAN style={styles.headerText}>
                                Grade Points Earned (GPE)
                            </SPAN>
                        </DIV>
                    </DIV>
                    <DIV
                        style={{
                            ...styles.headerCol2,
                            ...styles.tableHeaderCell,
                            borderRight: 1,
                            borderLeft: 0,
                        }}
                    >
                        <SPAN style={styles.headerText}>GPA</SPAN>
                        <SPAN style={styles.headerText}>&</SPAN>
                        <SPAN style={styles.headerText}>LG</SPAN>
                    </DIV>
                </DIV>

                {/* Third row: table values */}
                <DIV style={styles.tableValueRow}>
                    <DIV style={styles.valueCol1}>
                        {refactoredResults?.courseData?.map((data) => {
                            return (
                                <DIV style={styles.valueSubRow}>
                                    <DIV
                                        style={{
                                            ...styles.tableValueCell,
                                            width: "60pt",
                                        }}
                                    >
                                        <SPAN style={styles.valueText}>
                                            {data?.courseCode}
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            ...styles.tableValueCell,
                                            width: "200pt",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <SPAN style={{ ...styles.valueText }}>
                                            {data?.courseTitle}
                                        </SPAN>
                                    </DIV>
                                    <DIV style={styles.tableValueCell}>
                                        <SPAN style={styles.valueText}>
                                            {data?.courseCredit}
                                        </SPAN>
                                    </DIV>
                                    <DIV style={styles.tableValueCell}>
                                        <SPAN style={styles.valueText}>
                                            {data?.LG}
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            ...styles.tableValueCell,
                                            width: "65pt",
                                        }}
                                    >
                                        <SPAN style={styles.valueText}>
                                            {data?.CGP}
                                        </SPAN>
                                    </DIV>
                                    <DIV style={styles.tableValueCell}>
                                        <SPAN style={styles.valueText}>
                                            {data?.credit_earned}
                                        </SPAN>
                                    </DIV>
                                    <DIV
                                        style={{
                                            ...styles.tableValueCell,
                                            borderRight: 1,
                                        }}
                                    >
                                        <SPAN style={styles.valueText}>
                                            {data?.GPE}
                                        </SPAN>
                                    </DIV>
                                </DIV>
                            );
                        })}

                        {/* Footer */}
                        <DIV style={styles.valueSubRow}>
                            <DIV
                                style={{
                                    ...styles.tableValueCell,
                                    width: "260pt",
                                    alignItems: "flex-start",
                                }}
                            >
                                <SPAN style={{ ...styles.valueText }}>
                                    Semester Total
                                </SPAN>
                            </DIV>
                            <DIV style={styles.tableValueCell}>
                                <SPAN style={styles.valueText}>
                                    {totalValue?.totalCredits?.toFixed(2)}
                                </SPAN>
                            </DIV>
                            <DIV style={styles.tableValueCell}>
                                <SPAN style={styles.valueText}></SPAN>
                            </DIV>
                            <DIV
                                style={{
                                    ...styles.tableValueCell,
                                    width: "65pt",
                                }}
                            >
                                <SPAN style={styles.valueText}></SPAN>
                            </DIV>
                            <DIV style={styles.tableValueCell}>
                                <SPAN style={styles.valueText}>
                                    {totalValue?.totalCreditsEarned?.toFixed(2)}
                                </SPAN>
                            </DIV>
                            <DIV
                                style={{
                                    ...styles.tableValueCell,
                                    borderRight: 1,
                                }}
                            >
                                <SPAN style={styles.valueText}>
                                    {totalValue?.totalGPE?.toFixed(2)}
                                </SPAN>
                            </DIV>
                        </DIV>
                    </DIV>

                    <DIV
                        style={{
                            ...styles.tableValueCell,
                            ...styles.valueCol2,
                            borderRight: 1,
                        }}
                    >
                        <SPAN
                            style={{
                                ...styles.valueText,
                                fontWeight: "700",
                                lineHeight: "1",
                                fontSize: "11pt",
                            }}
                        >
                            {refactoredResults?.GPA?.toFixed(2)}
                        </SPAN>
                        <SPAN
                            style={{
                                ...styles.valueText,
                                fontWeight: "700",
                                lineHeight: "1",
                                fontSize: "10pt",
                            }}
                        >
                            &
                        </SPAN>
                        <SPAN
                            style={{
                                ...styles.valueText,
                                fontWeight: 700,
                                lineHeight: "1",
                                fontSize: "11pt",
                            }}
                        >
                            {refactoredResults?.LG}
                        </SPAN>
                    </DIV>
                </DIV>

                {/* Fouthr row: context */}
                <DIV style={styles.authorityTextRow}>
                    <SPAN style={styles.authorityText}>
                        "The authority deserves the right of correcting the
                        incidental errors in the transcript."
                    </SPAN>
                </DIV>

                {/* Fifth row: verify */}
                <DIV style={styles.verifyRow}>
                    <DIV>
                        <DIV style={styles.row1}>
                            <H4 style={styles.verifyText}>
                                Prepared by: .............................
                            </H4>
                        </DIV>
                        {/* <DIV style={styles.row2}></DIV> */}
                    </DIV>
                    <DIV
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <H4 style={styles.verifyText}>
                            Checked by: .............................
                        </H4>
                        <H4 style={styles.verifyText}>
                            Additional Register: .............................
                        </H4>
                    </DIV>
                    <DIV style={{ marginTop: "30pt", textAlign: "center" }}>
                        <H4 style={styles.verifyText}>
                            Date of Result Publication: 10/10/2023
                        </H4>
                    </DIV>
                </DIV>
            </Page>
        </Document>
    );
};

export default SemesterTranscriptPDF;
