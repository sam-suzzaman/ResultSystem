import React from "react";

const CourseListTable = () => {
    const courses = [
        {
            _id: "1",
            courseCode: "EEE-101",
            courseTitle: "Electrical Circuits I",
            credits: 3.0,
        },
        {
            _id: "2",
            courseCode: "EEE-102",
            courseTitle: "Electrical Circuits I Lab",
            credits: 1.5,
        },
        {
            _id: "3",
            courseCode: "CSE-101",
            courseTitle: "Computer Programming",
            credits: 3.0,
        },
        {
            _id: "4",
            courseCode: "CSE-102",
            courseTitle: "Computer Programming Lab",
            credits: 1.5,
        },
        {
            _id: "5",
            courseCode: "CSE-104",
            courseTitle: "Computer Aided Engineering Drawing",
            credits: 3.0,
        },
        {
            _id: "6",
            courseCode: "PHY-101",
            courseTitle: "Physics",
            credits: 3.0,
        },
        {
            _id: "7",
            courseCode: "HUM-101",
            courseTitle: "Nazrul Studies",
            credits: 3.0,
        },
        {
            _id: "8",
            courseCode: "MATH-101",
            courseTitle: "Differential and Integral Calculus",
            credits: 3.0,
        },
    ];
    return (
        <div className="overflow-x-auto flex justify-center">
            <table className="table table-zebra  w-full max-w-[75%]">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Credits</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => {
                        return (
                            <tr key={course._id}>
                                <th>{course._id}</th>
                                <td>{course.courseCode}</td>
                                <td>{course.courseTitle}</td>
                                <td>{course.credits}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CourseListTable;
