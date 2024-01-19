import React, { useState } from "react";
import styled from "styled-components";

import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import AddTeacherModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/ManageTeacherPageCom/AddTeacherModal";

const ManageTeacherPage = () => {
    // States
    const [openModal, setOpenModal] = useState(true);

    // Hooks
    const { pathname } = useLocation();

    return (
        <Wrapper>
            {/* Top title row */}
            <div className="">
                <Breadcrumb location={pathname} />
                <div className="mt-4">
                    <SectionTitle title="Department Teachers" />
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
        </Wrapper>
    );
};

const Wrapper = styled.section``;

export default ManageTeacherPage;
