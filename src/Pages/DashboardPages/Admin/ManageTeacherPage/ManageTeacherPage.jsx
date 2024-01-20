import React, { useState } from "react";
import styled from "styled-components";

import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import AddTeacherModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/ManageTeacherPageCom/AddTeacherModal";
import { useQuery } from "react-query";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";
import ResultErrorCom from "../../../../Components/Shared/ResultErrorCom/ResultErrorCom";

const ManageTeacherPage = () => {
    // States
    const [openModal, setOpenModal] = useState(true);
    const {
        isLoading,
        isError,
        data: teachers,
        error,
    } = useQuery("teachers-List", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/user/teachers`
        )
    );

    // Hooks
    const { pathname } = useLocation();

    if (teachers?.length === 0) {
        return <ResultErrorCom msg="Teacher list empty" />;
    }

    return (
        <Wrapper>
            {/* Top title row */}
            <div className="">
                <Breadcrumb location={pathname} />
                <div className="mt-4">
                    <SectionTitle title="Teachers" />
                </div>
            </div>

            {/* add teacher button row */}
            <div className="flex justify-end mt-4">
                <label
                    htmlFor="add_teacher_modal"
                    className="btn bg-primary btn-sm rounded-sm text-white hover:bg-secondary hover:shadow-md"
                >
                    <span className="text-base font-bold">
                        <AiOutlinePlus />
                    </span>
                    <span className="text-xs">add teacher</span>
                </label>
                {openModal && <AddTeacherModal setOpenModal={setOpenModal} />}
            </div>

            {/* Teachers table */}
            <div className="">
                {isLoading && <LoadingCom />}
                {!isLoading && (
                    <div className="overflow-x-auto flex justify-center mt-8">
                        <table className="table table-zebra  w-full max-w-[75%]">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Teacher Name</th>
                                    <th>Email</th>
                                    <th>Job Position</th>
                                    {/* <th>Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {teachers?.map((teacher, index) => {
                                    return (
                                        <tr key={teacher._id}>
                                            <th>{index + 1}</th>
                                            <td className="capitalize">
                                                {teacher.name}
                                            </td>
                                            <td className="number">
                                                {teacher?.email}
                                            </td>
                                            <td className="number">
                                                {teacher?.designation}
                                            </td>
                                            {/* <td>
                                                <label
                                                    htmlFor="confirm_modal"
                                                    className="btn btn-xs bg-[#e46b6b] text-white hover:bg-[#f77b7b] text-xs cursor-pointer rounded-sm"
                                                >
                                                    delete
                                                </label>
                                            </td> */}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section``;

export default ManageTeacherPage;
