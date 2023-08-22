import React from "react";

const StudentListTable = ({ students }) => {
    const studentss = [
        {
            _id: "1",
            name: "student one",
            roll: "18102900",
        },
        {
            _id: "2",
            name: "student two",
            roll: "18102901",
        },
        {
            _id: "3",
            name: "student three",
            roll: "18102903",
        },
        {
            _id: "4",
            name: "student four",
            roll: "18102904",
        },
        {
            _id: "5",
            name: "student five",
            roll: "18102905",
        },
    ];
    return (
        <div className="overflow-x-auto flex justify-center">
            <table className="table table-zebra  w-full max-w-[75%]">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Session</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => {
                        return (
                            <tr key={student._id}>
                                <th>{index + 1}</th>
                                <td className="capitalize">
                                    {student.username}
                                </td>
                                <td>{student.roll}</td>
                                <td>{student.currentSession}</td>
                                <td>
                                    <button className="btn btn-xs bg-[#e46b6b] text-white hover:bg-[#f77b7b] text-xs">
                                        delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StudentListTable;
