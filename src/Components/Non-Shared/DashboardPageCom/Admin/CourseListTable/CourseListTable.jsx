import React from "react";
import { Link, useParams } from "react-router-dom";

const CourseListTable = ({ courseList }) => {
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
    const { session, semester } = useParams();

    if (courseList.length === 0) {
        return (
            <h2 className="font-bold text-center text-lg uppercase">
                -- there is no courses yet. --
            </h2>
        );
    }
    return (
        <div className="overflow-x-auto flex justify-center">
            <table className="table table-zebra  w-full max-w-[75%]">
                <thead>
                    <tr className="text-left">
                        <th>#</th>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Credits</th>
                        <th>Actions</th>
                        <th>Others</th>
                    </tr>
                </thead>
                <tbody>
                    {courseList?.map((course, index) => {
                        return (
                            <tr key={course.courseCode}>
                                <th>{index + 1}</th>
                                <td className="uppercase">
                                    {course.courseCode}
                                </td>
                                <td className="capitalize">
                                    {course.courseName}
                                </td>
                                <td>{course.credit}</td>
                                <td>
                                    <button className="badge capitalize text-xs font-normal btn-warning  text-white rounded-sm mr-3">
                                        update
                                    </button>
                                    <button className="badge capitalize text-xs font-normal bg-[#e96f6d] hover:bg-[#fa8b89] text-white rounded-sm">
                                        delete
                                    </button>
                                </td>
                                <td>
                                    <Link
                                        to={`/dashboard/admin/session-list/${session}/${semester}/add-mark/${course.courseCode}`}
                                        className="badge capitalize text-xs font-normal bg-[#2b9859] hover:bg-[#33b76a] text-white rounded-sm"
                                    >
                                        add marks
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CourseListTable;
