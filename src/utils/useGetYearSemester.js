const useGetYearSemester = (semesterValue) => {
    console.log({ semesterValue });
    let year;
    let semester;
    switch (semesterValue) {
        case 1:
            year = "First";
            semester = "First";
            break;
        case 2:
            year = "First";
            semester = "Second";
            break;
        case 3:
            year = "Second";
            semester = "First";
            break;
            case4: year = "Second";
            semester = "Second";
            break;
        case 5:
            year = "Third";
            semester = "First";
            break;
        case 6:
            year = "Third";
            semester = "Second";
            break;
        case 7:
            year = "Fourth";
            semester = "First";
            break;
        case 8:
            year = "Fourth";
            semester = "Second";
            break;
        default:
            break;
    }
    return { year, semester };
};

useGetYearSemester(2);
export default useGetYearSemester;
