const useGetYearSemester = (semesterValue) => {
    // console.log({ semesterValue });
    let year;
    let semester;
    switch (semesterValue) {
        case 1:
            year = "1st";
            semester = "1st";
            // year = "First";
            // semester = "First";
            break;
        case 2:
            year = "1st";
            semester = "2nd";
            // year = "First";
            // semester = "Second";
            break;
        case 3:
            year = "2nd";
            semester = "1st";
            // year = "Second";
            // semester = "First";
            break;
        case 4:
            year = "2nd";
            semester = "2nd";
            // year = "Second";
            // semester = "Second";
            break;
        case 5:
            year = "3rd";
            semester = "1st";
            // year = "Third";
            // semester = "First";
            break;
        case 6:
            year = "3rd";
            semester = "2nd";
            // year = "Third";
            // semester = "Second";
            break;
        case 7:
            year = "4th";
            semester = "1st";
            // year = "Fourth";
            // semester = "First";
            break;
        case 8:
            year = "4th";
            semester = "2nd";
            // year = "Fourth";
            // semester = "Second";
            break;
        default:
            break;
    }
    return { year, semester };
};

export default useGetYearSemester;
