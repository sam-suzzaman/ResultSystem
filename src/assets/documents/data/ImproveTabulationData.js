const ImproveResult = [];

for (let i = 0; i < 5; i++) {
    ImproveResult.push({
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
    });
}

export default ImproveResult;
