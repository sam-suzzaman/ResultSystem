import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";

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
                        <Text>Jaitya Kabi Kazi Nazrul Islam University</Text>
                    </H6>
                    <H6>
                        <Text>Department of {stepOneValue?.department}</Text>
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

// Components
const DIV = ({ children, style, isFixed }) => {
    return (
        <View style={{ ...style }} fixed={isFixed || false}>
            {children}
        </View>
    );
};

const SECTION = ({ style, children }) => {
    return <View style={{ ...style }}>{children}</View>;
};

const SPAN = ({ style, children }) => {
    return (
        <Text style={{ ...style, fontSize: 9, fontWeight: 500 }}>
            {children}
        </Text>
    );
};

const H6 = ({ style, children }) => {
    return (
        <Text
            style={{
                ...style,
                fontSize: 10,
                fontWeight: 400,
                display: "block",
                textAlign: "center",
                marginBottom: 2,
            }}
        >
            {children}
        </Text>
    );
};

export default InternalMarkPDF;
