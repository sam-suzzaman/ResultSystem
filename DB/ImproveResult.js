const ImproveResult = [
    {
        _id: "00000",
        roll: "18102901",
        name: "student one",
        internalMark: 35,
        previousMarks: {
            _id: "00",
            finalExamMark: 45,
            TotalMark: 75,
            LG: "A-",
            GP: "3.75",
        },

        improvedMarks: {
            _id: "993",
            examinerOne: 45,
            examinerTwo: 45,
            examinerThree: 45,
            finalExamMark: 45,
            totalMark: 75,
            LG: "A-",
            GP: "3.75",
        },
        improvedGPA: "3.75",
        remark: "improved",
    },
    {
        _id: "00000",
        roll: "18102902",
        name: "student one",
        internalMark: 32,
        previousMarks: {
            _id: "00",
            finalExamMark: 48,
            TotalMark: 80,
            LG: "A-",
            GP: "3.75",
        },

        improvedMarks: {
            _id: "993",
            examinerOne: 45,
            examinerTwo: 40,
            examinerThree: 0,
            finalExamMark: 40,
            totalMark: 70,
            LG: "A",
            GP: "3.25",
        },
        improvedGPA: "3.75",
        remark: "improved",
    },
];

export default ImproveResult;
