import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "15pt",
        paddingVertical: "20pt",
    },

    tableHeaderRow: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        flexWrap: "wrap",
        transform: "rotate(-180deg)",
        border: 1,
        borderLeft: 0,
        borderColor: "#000",
    },
    tableHeaderCell: {
        width: "33.75pt",
        height: "165pt",
        display: "flex",
        alignItems: "center",
        borderLeft: 1,
        borderRightColor: "#000000",
    },
    headerRollCell: {
        width: "150pt",
        borderRight: 1,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        transform: "rotate(-180deg)",
        paddingBottom: "4pt",
    },
    HeaderVerticalText: {
        width: "165pt",
        height: "33.75pt",
        transform: "rotate(-270eg) translateX(65.5%)",
        paddingTop: "10pt",
        paddingLeft: "4pt",
        alignItems: "center",
        textAlign: "left",
    },
    valueRow: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
        flexWrap: "wrap",
        borderBottom: 1,
        borderRight: 1,
        borderColor: "#000",
    },
    valueCell: {
        width: "34.52pt",
        height: "22.5pt",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderLeft: 1,
        borderRightColor: "#000000",
    },
    valueRollCell: {
        width: "150pt",
        borderLeft: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

const CourseFinalResultPDF = ({ data }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* First tableRow : Title */}
                <DIV isFixed={true} style={{ marginBottom: "20pt" }}>
                    <H3
                        style={{
                            fontWeight: "400",
                            fontSize: "10pt",
                            textAlign: "center",
                            marginBottom: "2pt",
                        }}
                    >
                        Jatiya Kabi Kazi Nazrul Islam University
                    </H3>
                    <H3
                        style={{
                            fontWeight: "400",
                            fontSize: "10pt",
                            textAlign: "center",
                            marginBottom: "2pt",
                        }}
                    >
                        Department of Electrical and Electronic Engineering
                    </H3>
                    <H3
                        style={{
                            fontWeight: "400",
                            fontSize: "10pt",
                            textAlign: "center",
                            marginBottom: "2pt",
                        }}
                    >
                        2nd Year 1st Semester Final Examination - 2018
                    </H3>
                    <H3
                        style={{
                            fontWeight: "400",
                            fontSize: "10pt",
                            textAlign: "center",
                            marginBottom: "2pt",
                        }}
                    >
                        Session: 2017-18
                    </H3>
                    <DIV
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <SPAN
                            style={{
                                paddingRight: "12pt",
                                fontWeight: "400",
                                fontSize: "10pt",
                            }}
                        >
                            Course Code : EEE-311
                        </SPAN>
                        <SPAN style={{ fontWeight: "400", fontSize: "10pt" }}>
                            Course Name: Power Electronics
                        </SPAN>
                    </DIV>
                </DIV>

                {/* Second tableRow : Result */}
                <DIV style={styles.tableHeaderRow} isFixed={true}>
                    <DIV
                        style={(styles.tableHeaderCell, styles.headerRollCell)}
                    >
                        <SPAN>Roll</SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            attendance (10%)
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Midterm-I (10%)
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Midterm-II (10%)
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Assignment/Presentation (10%)
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Continuous (40%)
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Examiner-I
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Examiner-II
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Examiner-III
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>Final</SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>Total</SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Letter Grade
                        </SPAN>
                    </DIV>
                    <DIV style={styles.tableHeaderCell}>
                        <SPAN style={styles.HeaderVerticalText}>
                            Grade Point
                        </SPAN>
                    </DIV>
                </DIV>

                {data?.map((result) => {
                    return (
                        <DIV style={styles.valueRow} key={result._id}>
                            <DIV
                                style={(styles.valueCell, styles.valueRollCell)}
                            >
                                <SPAN>{result._id}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.attendance}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.midOne}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.midTwo}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.presentationOrAssignment}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.forty}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.firstExaminer}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.secondExaminer}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.thirdExaminer}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.sixty}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.total}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.LG}</SPAN>
                            </DIV>
                            <DIV style={styles.valueCell}>
                                <SPAN>{result.GP}</SPAN>
                            </DIV>
                        </DIV>
                    );
                })}

                {/* <DIV style={styles.valueRow}>
                    <DIV style={(styles.valueCell, styles.valueRollCell)}>
                        <SPAN>18102930</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>09</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>09</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>09</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>09</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                    <DIV style={styles.valueCell}>
                        <SPAN>08</SPAN>
                    </DIV>
                </DIV> */}
            </Page>
        </Document>
    );
};

// Components
const DIV = ({ children, style, isFixed }) => {
    return (
        <View
            style={{
                display: "block",
                fontSize: "10pt",
                fontWeight: "normal",
                ...style,
            }}
            fixed={isFixed || false}
        >
            {children}
        </View>
    );
};

const SPAN = ({ children, style }) => {
    return (
        <Text style={{ fontSize: "10pt", fontWeight: 400, ...style }}>
            {children}
        </Text>
    );
};

const P = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                fontSize: "10pt",
                fontWeight: 400,
                ...style,
            }}
        >
            {children}
        </Text>
    );
};

const H1 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                fontSize: "24pt",
                fontWeight: "bold",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
const H2 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
const H3 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
const H4 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                fontSize: "14pt",
                fontWeight: "bold",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
const H5 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                fontSize: "12pt",
                fontWeight: "bold",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};
const H6 = ({ children, style }) => {
    return (
        <Text
            style={{
                display: "block",
                fontSize: "10pt",
                fontWeight: "bold",
                ...style,
            }}
        >
            {children}
        </Text>
    );
};

export default CourseFinalResultPDF;
