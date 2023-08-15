import React from "react";
import CourseListTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/CourseListTable/CourseListTable";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";

const SemesterPage = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <div className="">
                <Breadcrumb location={pathname} />
            </div>
            <div className="mt-6">
                <div className="">
                    <h3 className="text-center font-bold capitalize text-xl mb-6">
                        course code and title
                    </h3>
                </div>
                <CourseListTable />
            </div>
        </div>
    );
};

export default SemesterPage;
