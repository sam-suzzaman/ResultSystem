import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import { AiOutlinePlus } from "react-icons/ai";
import AddStudentModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddStudentModal/AddStudentModal";

const SingleBatchPage = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <div>
                <Breadcrumb location={pathname} />
            </div>
            <div className="mt-4 mb-4">
                <SectionTitle title="Session 2017-18" />
            </div>
            <div className="flex justify-end">
                <label
                    htmlFor="add_student_modal"
                    className="btn bg-[#3ab16a] btn-sm rounded-sm text-white hover:bg-[#2e9657] hover:shadow-md"
                >
                    <span className="text-base font-bold">
                        <AiOutlinePlus />
                    </span>
                    <span className="text-xs">add student</span>
                </label>
                <AddStudentModal />
            </div>
        </div>
    );
};

export default SingleBatchPage;
