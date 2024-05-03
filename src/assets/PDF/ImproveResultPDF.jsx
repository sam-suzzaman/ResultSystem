import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image,
    Font,
} from "@react-pdf/renderer";
// import Myfont from "../assets/font.ttf";
// import Myfont2 from "../assets/mon.ttf";

// import results from "../data/results";

// Register font
// Font.register({
//     family: "t",
//     src: Myfont,
// });
// Font.register({
//     family: "Mon",
//     src: Myfont2,
// });

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "30pt",
        paddingVertical: "30pt",
        // fontFamily: "t",
    },
    text: {
        fontSize: "8pt",
        fontWeight: "extrabold",
    },
    tableContainer: {},
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
});

const ImprovementPDF = ({ results }) => {
    return (
        <Document>
            <Page size="LEGAL" orientation="landscape" style={styles.page}>
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
                        Nexus Institute of Sciences and Engineering
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
                        2nd Year 1st Semester Improvement Examination - 2018
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
                    <H3
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <SPAN
                            style={{
                                fontWeight: "400",
                                fontSize: "10pt",
                            }}
                        >
                            Course Code : EEE-311
                        </SPAN>
                        {"     "}
                        <SPAN style={{ fontWeight: "400", fontSize: "10pt" }}>
                            Course Name: Power Electronics
                        </SPAN>
                    </H3>
                </DIV>

                <DIV style={styles.tableContainer}>
                    {/* Second Row:Table Title Row */}
                    <DIV style={styles.headerRow} isFixed={true}>
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
                            <DIV style={styles.tableValueRow}>
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
                                        {mark?.previousMarks?.TotalMark}
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
                                        {mark?.improvedMarks?.examinerOne}
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
                                        {mark?.improvedMarks?.examinerTwo}
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
                                        {mark?.improvedMarks?.examinerThree}
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

export default ImprovementPDF;
