import React from "react";
import { Document, Page, StyleSheet, Image, Text } from "@react-pdf/renderer";

import { DIV, SPAN, H6, H3 } from "../Components";
import logo from "../../Jkkniu_logo.png";

const styles = StyleSheet.create({
    page: {
        paddingTop: 20,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
    },
    titleRow: {
        // paddingBottom: 6,
    },
    table: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderCollapse: "collapse",
    },
    tableHead: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        border: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderRight: 0,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        border: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderTop: 0,
        borderRight: 0,
    },
    cell: {
        flex: 1,
        border: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0,
        paddingTop: 2,
        paddingBottom: 2,
    },
    largeCell: {
        flex: 2,
        border: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0,
    },
    smallCell: {
        flex: 0.5,
        border: 1,
        borderStyle: "solid",
        borderColor: "#000",
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0,
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

const InternlMarkPDF = ({ results, stepOneValue }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* PDF Title Row */}
                <DIV isFixed={true} style={{ marginBottom: "10pt" }}>
                    <DIV
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginBottom: "10pt",
                        }}
                    >
                        <Image style={{ width: "50pt" }} src={logo} />
                    </DIV>
                    <DIV style={{ marginBottom: "8pt" }}>
                        <H3
                            style={{
                                fontWeight: "500",
                                fontSize: "14pt",
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
                            Course Code: {stepOneValue?.courseCode},{"   "}
                            Course Title: {stepOneValue?.courseName}
                        </H3>
                        <H3
                            style={{
                                fontWeight: "400",
                                fontSize: "11pt",
                                textAlign: "center",
                            }}
                        >
                            Internal Marks,{"  "}Session:{" "}
                            {stepOneValue?.session}
                        </H3>
                    </DIV>
                </DIV>

                {/* TABLE Row */}
                <DIV style={{ ...styles.table }}>
                    {/* THEAD Row */}
                    <DIV
                        style={{ ...styles.tableHead, margnTop: "10pt" }}
                        isFixed={true}
                    >
                        <DIV
                            style={{
                                ...styles.cell,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <SPAN>
                                <Text>Roll</Text>
                            </SPAN>
                        </DIV>
                        {/* <DIV style={(styles.cell, styles.largeCell)}>
                            <SPAN>
                                <Text>Name</Text>
                            </SPAN>
                        </DIV> */}
                        <DIV
                            style={{
                                ...styles.cell,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <SPAN>
                                <Text>Attendance</Text>
                            </SPAN>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.cell,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <SPAN>
                                <Text>Mid One</Text>
                            </SPAN>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.cell,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <SPAN>
                                <Text>Mid Two</Text>
                            </SPAN>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.cell,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <DIV>
                                <SPAN>
                                    <Text>Assignment /</Text>
                                </SPAN>
                            </DIV>
                            <DIV>
                                <SPAN>
                                    <Text>Presentation</Text>
                                </SPAN>
                            </DIV>
                        </DIV>
                        <DIV
                            style={{
                                ...styles.cell,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <SPAN>
                                <Text>Total</Text>
                            </SPAN>
                        </DIV>
                    </DIV>

                    {/* TBODY Row */}
                    {results?.map((result) => {
                        return (
                            <DIV style={styles.row} wrap={false}>
                                <DIV style={styles.cell}>
                                    <SPAN>
                                        <Text>{result.roll}</Text>
                                    </SPAN>
                                </DIV>
                                {/* <DIV style={(styles.cell, styles.largeCell)}>
                                    <SPAN>
                                        <Text>{result.name}</Text>
                                    </SPAN>
                                </DIV> */}
                                <DIV style={styles.cell}>
                                    <SPAN>
                                        <Text>{result.attendance}</Text>
                                    </SPAN>
                                </DIV>
                                <DIV style={styles.cell}>
                                    <SPAN>
                                        <Text>{result.midOne}</Text>
                                    </SPAN>
                                </DIV>
                                <DIV style={styles.cell}>
                                    <SPAN>
                                        <Text>{result.midTwo}</Text>
                                    </SPAN>
                                </DIV>
                                <DIV style={styles.cell}>
                                    <SPAN>
                                        <Text>
                                            {result.presentationOrAssignment}
                                        </Text>
                                    </SPAN>
                                </DIV>
                                <DIV style={styles.cell}>
                                    <SPAN>
                                        <Text>{result.total}</Text>
                                    </SPAN>
                                </DIV>
                            </DIV>
                        );
                    })}
                </DIV>

                {/* TFOOTER Row */}
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

export default InternlMarkPDF;
