import React from "react";

const StudentListTable = ({ students, setDeleteStudentID }) => {
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
                                    <label
                                        onClick={() => {
                                            setDeleteStudentID(student._id);
                                        }}
                                        htmlFor="confirm_modal"
                                        className="btn btn-xs bg-[#e46b6b] text-white hover:bg-[#f77b7b] text-xs cursor-pointer rounded-sm"
                                    >
                                        delete
                                    </label>
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
