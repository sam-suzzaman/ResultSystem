import React from "react";

const StudentListTable = () => {
    const students = [
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
                        <th>Name</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return (
                            <tr key={student._id}>
                                <th>{student._id}</th>
                                <td>{student.name}</td>
                                <td>{student.roll}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default StudentListTable;
