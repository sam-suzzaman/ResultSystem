import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// import Result from "../../../DB/SemesterFinalResult";

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: "15pt",
        paddingVertical: "20pt",
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
});
const SemesterFinalResultPDF = ({ data, setLoading }) => {
    const [colData, setColData] = useState([]);

    useEffect(() => {
        setLoading(true);
        setColData(data[0]?.marks);
        setLoading(false);
    }, [data]);

    // const [cellArray, sestCellArrya] = useState([]);

    // useEffect(() => {
    //     const cellLength = colData.length * 5;
    //     const valueColArray = [];
    //     for (let i = 0; i < cellLength; i++) {
    //         valueColArray.push("");
    //     }
    //     sestCellArrya(valueColArray);
    // }, [colData]);

    // useEffect(() => {
    //     console.log(Result);
    // }, [Result]);
    // console.log(colData);
    // console.log(data);
    return (
        <Document>
            <Page size="A4" orientation="landscape" style={styles.page}>
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

                <DIV style={styles.tableContainer} debug={true}>
                    {/* Second Row */}
                    <DIV style={styles.headerRow} isFixed={true}>
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
                                            {course.courseCode}({course.credit}{" "}
                                            Cr)
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
                                        fontSize: "7pt",
                                        paddingTop: "3pt",
                                    }}
                                >
                                    2nd Year 1st Semester
                                </SPAN>
                            </DIV>
                            <DIV style={styles.resultInnerRow}>
                                <SPAN
                                    style={{
                                        ...styles.text,
                                        ...styles.resultInnerRowCol,
                                        transform: "rotate(-180deg)",
                                    }}
                                >
                                    CGPA in 2nd Year 1st semester (Total
                                    Credit=18)
                                </SPAN>
                                <SPAN
                                    style={{
                                        ...styles.text,
                                        ...styles.resultInnerRowCol,
                                        transform: "rotate(-180deg)",
                                        borderTop: 1,
                                    }}
                                >
                                    GPA in 2nd Year 1st semester {"    "}(out of
                                    4.00)
                                </SPAN>
                            </DIV>
                        </DIV>
                    </DIV>

                    {/* Third Row:Value Row */}
                    {data?.map((res) => {
                        return (
                            <DIV style={styles.valueRow}>
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
                                                            "Lab Continuous (20%)"
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
                                                            "Lab final exam (80%)"
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
                                                    {mark.LG}
                                                </SPAN>
                                            </DIV>
                                            <DIV
                                                style={
                                                    (styles.valueCell,
                                                    styles.valueCellSize)
                                                }
                                            >
                                                <SPAN style={styles.text}>
                                                    {mark.GP}
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
                                    }}
                                >
                                    <SPAN style={styles.text}>{res.CGPA}</SPAN>
                                </DIV>
                                <DIV
                                    style={{
                                        ...styles.valueCell,
                                        ...styles.valueResultCell,
                                        width: "35pt",
                                        textAlign: "center",
                                    }}
                                >
                                    <SPAN style={styles.text}>{res.GPA}</SPAN>
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
export default SemesterFinalResultPDF;
