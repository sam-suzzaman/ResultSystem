import React from "react";
import CourseListTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/CourseListTable/CourseListTable";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import StudentListTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/StudentListTable/StudentListTable";

const SemesterPage = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <div className="">
                <Breadcrumb location={pathname} />
            </div>
            <div className="mt-6">
                <div className="">
                    <h3 className="text-center font-bold capitalize text-xl mb-3">
                        course code and title
                    </h3>
                </div>
                <CourseListTable />
            </div>
            {/* <div className="mt-12 mb-12">
                <div className="">
                    <h3 className="text-center font-bold capitalize text-xl mb-3">
                        all student's list
                    </h3>
                </div>
                <StudentListTable />
            </div> */}
        </div>
    );
};

export default SemesterPage;
