import React from "react";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import CourseListTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/CourseListTable/CourseListTable";
import { AiOutlinePlus } from "react-icons/ai";
import AddCourseModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddCourseModal/AddCourseModal";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";
import { useQuery } from "react-query";

const CourseListPage = () => {
    const { pathname } = useLocation();
    const {
        isLoading,
        isError,
        data: courseList,
        error,
    } = useQuery("courseList", () =>
        getAllHandler("http://localhost:2020/api/v1/category/list")
    );

    // if (isLoading) {
    //     return <LoadingCom />;
    // } else if (isError) {
    //     return <h2 className="font-bold text-lg">{error.message}</h2>;
    // }

    return (
        <div>
            <div className="">
                <Breadcrumb location={pathname} />
            </div>
            <div className="mt-6 mb-6">
                <div className="mb-6">
                    <h3 className="text-center font-bold uppercase text-lg">
                        first semester Courses
                    </h3>
                    <h4 className="text-center text-sm font-medium capitalize">
                        session: 2017-18
                    </h4>
                </div>
                <div className="flex justify-end mb-4">
                    <label
                        htmlFor="add_course_modal"
                        className="badge badge-lg bg-[#3ab16a] text-lg capitalize cursor-pointer font-medium  rounded-sm text-white hover:bg-[#2e9657] hover:shadow-md"
                    >
                        <span className="text-base font-bold">
                            <AiOutlinePlus />
                        </span>
                        <span className="text-xs">add course</span>
                    </label>
                    <AddCourseModal />
                </div>
                <CourseListTable courseList={courseList} />
            </div>
        </div>
    );
};

export default CourseListPage;
