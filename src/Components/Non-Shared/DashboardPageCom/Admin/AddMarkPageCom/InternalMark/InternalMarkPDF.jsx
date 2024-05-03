import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";
// import {
//     DIV,
//     SECTION,
//     SPAN,
//     H6,
// } from "../../../../../../../public/pdf/Components";

const styles = StyleSheet.create({
    page: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    titleRow: {
        paddingBottom: 6,
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
});

const InternalMarkPDF = ({ results, stepOneValue, selectedCourse }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <DIV isFixed={true}>
                    <H6>
                        <Text>Nexus Institute of Sciences and Engineering</Text>
                    </H6>
                    <H6>
                        <Text>
                            Department of Electrical and Electronic Engineering
                            || {stepOneValue?.department}
                        </Text>
                    </H6>
                    <H6>
                        <Text>Course Code: {selectedCourse?.courseCode},</Text>{" "}
                        <Text>Course Title: {selectedCourse?.courseName}</Text>
                    </H6>
                    <H6 style={styles.titleRow}>
                        <Text>Internal Marks,</Text>{" "}
                        <Text>Session: {stepOneValue?.session}</Text>
                    </H6>
                </DIV>
                <SECTION style={styles.table}>
                    <DIV style={styles.tableHead} isFixed={true}>
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
                            <View>
                                <SPAN>
                                    <Text>Assignment /</Text>
                                </SPAN>
                            </View>
                            <View>
                                <SPAN>
                                    <Text>Presentation</Text>
                                </SPAN>
                            </View>
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
                    {results?.map((result) => {
                        return (
                            <DIV style={styles.row}>
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
                </SECTION>
            </Page>
        </Document>
    );
};

export default InternalMarkPDF;
