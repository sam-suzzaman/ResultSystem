import React, { useEffect, useState } from "react";

import { Document, Page, StyleSheet, Image, Text } from "@react-pdf/renderer";
import { DIV, SPAN, H1, H2, H3, H4, H5, H6 } from "../Components";

import logo from "../../../assets/Jkkniu_logo.png";
import grade from "../../../assets/grade.png";

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "30pt",
        paddingVertical: "30pt",
        paddingBottom: "40pt",
    },
    text: {
        fontSize: "8pt",
        fontWeight: "extrabold",
    },
    tableContainer: {
        marginTop: "10pt",
    },
    headerRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        // height: "130pt",
    },
    rollColumn: {
        width: "60pt",
        height: "100%",
        border: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    internalColumn: {
        width: "50pt",
        border: 1,
        borderLeft: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "5",
        paddingBottom: "5",
    },
    prevResultCol: {
        textTransform: "capitalize",
        width: "200pt",
        height: "70pt",
        border: 1,
        borderLeft: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    prevSubRow1: {
        width: "100%",
        height: "20pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    prevSubRow2: {
        width: "100%",
        height: "50pt",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    prevSubCol: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50pt",
        textAlign: "center",
        border: 1,
        height: "100%",
    },
    improveResCol: {
        textTransform: "capitalize",
        width: "350pt",
        height: "70pt",
        border: 1,
        borderLeft: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    impSubRow1: {
        width: "100%",
        height: "20pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    impSubRow2: {
        width: "100%",
        height: "50pt",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    impSubCol: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50pt",
        textAlign: "center",
        border: 1,
        height: "100%",
    },
    tableValueRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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

const ImproveTabulation = ({ results, resultType, stepOneValue }) => {
    console.log(stepOneValue);
    return (
        <Document>
            <Page size="LEGAL" orientation="landscape" style={styles.page}>
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
                            Course Name: {stepOneValue.courseName}
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Course Code : {stepOneValue.courseCode}
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                                marginBottom: "4pt",
                            }}
                        >
                            Improvement Result
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                            }}
                        >
                            Session: {stepOneValue.session}
                        </H3>
                    </DIV>
                </DIV>

                <DIV>
                    {/* Second Row:Table Title Row */}
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

                        <DIV style={styles.internalColumn}>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                Internal
                            </SPAN>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                Evaluation
                            </SPAN>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                (40)
                            </SPAN>
                        </DIV>

                        {/* Previous Result Column */}
                        <DIV style={styles.prevResultCol}>
                            <DIV style={styles.prevSubRow1}>
                                <H3
                                    style={{
                                        fontSize: "8pt",
                                        fontWeight: "bold",
                                    }}
                                >
                                    previous result
                                </H3>
                            </DIV>
                            <DIV style={styles.prevSubRow2}>
                                <DIV
                                    style={{
                                        ...styles.prevSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <H3>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "normal",
                                            }}
                                        >
                                            Final Exam{" "}
                                        </SPAN>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Mark(60)
                                        </SPAN>
                                    </H3>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.prevSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <H3>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Total Obtained{" "}
                                        </SPAN>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Mark(100)
                                        </SPAN>
                                    </H3>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.prevSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Obtained
                                    </SPAN>
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        LG
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.prevSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                        borderRight: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Obtained
                                    </SPAN>
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        GP
                                    </SPAN>
                                </DIV>
                            </DIV>
                        </DIV>

                        {/* Improvement Result Column */}
                        <DIV style={styles.improveResCol}>
                            <DIV style={styles.impSubRow1}>
                                <H3
                                    style={{
                                        fontSize: "8pt",
                                        fontWeight: "bold",
                                    }}
                                >
                                    improve result
                                </H3>
                            </DIV>
                            <DIV style={styles.impSubRow2}>
                                <DIV
                                    style={{
                                        ...styles.impSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <H3>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "normal",
                                            }}
                                        >
                                            Examiner-I
                                        </SPAN>
                                    </H3>
                                </DIV>

                                <DIV
                                    style={{
                                        ...styles.impSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <H3>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "normal",
                                            }}
                                        >
                                            Examiner-II
                                        </SPAN>
                                    </H3>
                                </DIV>

                                <DIV
                                    style={{
                                        ...styles.impSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <H3>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "normal",
                                            }}
                                        >
                                            Examiner-III
                                        </SPAN>
                                    </H3>
                                </DIV>

                                <DIV
                                    style={{
                                        ...styles.impSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <H3>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Final Exam{" "}
                                        </SPAN>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Mark(60)
                                        </SPAN>
                                    </H3>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.impSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <H3>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Total Obtained{" "}
                                        </SPAN>
                                        <SPAN
                                            style={{
                                                fontSize: "8pt",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Mark(100)
                                        </SPAN>
                                    </H3>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.impSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Obtained
                                    </SPAN>
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        LG
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.impSubCol,
                                        borderLeft: 0,
                                        borderBottom: 0,
                                        borderRight: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Obtained
                                    </SPAN>
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        GP
                                    </SPAN>
                                </DIV>
                            </DIV>
                        </DIV>

                        {/* Improved GPA */}
                        <DIV style={styles.internalColumn}>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                Improved
                            </SPAN>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                GPA
                            </SPAN>
                        </DIV>

                        {/* Remark */}
                        <DIV style={styles.internalColumn}>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                Remark
                            </SPAN>
                        </DIV>

                        {/* Roll Column */}
                        <DIV style={{ ...styles.rollColumn, borderLeft: 0 }}>
                            <SPAN
                                style={{ fontSize: "8pt", fontWeight: "bold" }}
                            >
                                Roll
                            </SPAN>
                        </DIV>
                    </DIV>

                    {/* Third Row: Value Row */}
                    {results?.map((mark) => {
                        return (
                            <DIV style={styles.tableValueRow} wrap={false}>
                                <DIV
                                    style={{
                                        ...styles.rollColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.roll}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.internalMark}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.previousMarks?.finalExamMark}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.previousMarks?.totalMark}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.previousMarks?.LG}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.previousMarks?.GP}
                                    </SPAN>
                                </DIV>

                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {/* {mark?.improvedMarks?.firstExaminer} */}
                                        {resultType === 1.5
                                            ? "-"
                                            : mark?.improvedMarks
                                                  ?.firstExaminer}
                                    </SPAN>
                                </DIV>

                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {resultType === 1.5
                                            ? "-"
                                            : mark?.improvedMarks
                                                  ?.secondExaminer}
                                    </SPAN>
                                </DIV>

                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {resultType === 1.5
                                            ? "-"
                                            : mark?.improvedMarks
                                                  ?.thirdExaminer}
                                        {/* {mark?.improvedMarks?.thirdExaminer} */}
                                    </SPAN>
                                </DIV>

                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.improvedMarks?.finalExamMark}
                                        {/* {resultType === 1.5
                                            ? "-"
                                            : mark?.improvedMarks
                                                  ?.finalExamMark} */}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.improvedMarks?.totalMark}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.improvedMarks?.LG}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.improvedMarks?.GP}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.improvedGPA}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.internalColumn,
                                        borderTop: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.remark}
                                    </SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.rollColumn,
                                        borderTop: 0,
                                        borderLeft: 0,
                                    }}
                                >
                                    <SPAN
                                        style={{
                                            fontSize: "8pt",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {mark?.roll}
                                    </SPAN>
                                </DIV>
                            </DIV>
                        );
                    })}
                </DIV>

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

export default ImproveTabulation;
