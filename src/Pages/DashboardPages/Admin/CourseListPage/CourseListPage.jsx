import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import { useLocation, useParams } from "react-router-dom";
import CourseListTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/CourseListTable/CourseListTable";
import { AiOutlinePlus } from "react-icons/ai";
import AddCourseModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddCourseModal/AddCourseModal";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";
import { useQuery } from "react-query";

const CourseListPage = () => {
    const { pathname } = useLocation();
    const { session, semester } = useParams();
    const [isShowAddCourseModal, setIsShowAddCourseModal] = useState(true);
    const {
        isLoading,
        isError,
        data: courseList,
        error,
    } = useQuery("courseList", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/course/${session}/EEE/${
                semester * 1
            }`
        )
    );

    useEffect(() => {
        setIsShowAddCourseModal(true);
    }, [courseList?.length]);

    if (isLoading) {
        console.log("loading");
        return <LoadingCom />;
    } else if (isError) {
        return <h2 className="font-bold text-lg">{error.message}</h2>;
    }

    return (
        <div>
            <div className="">
                <Breadcrumb location={pathname} />
            </div>
            <div className="mt-6 mb-6 ">
                <div className="mb-3 flex  gap-x-4 items-center border-b border-[#dadada] pb-1">
                    {/* <h3 className="text-center font-bold uppercase text-lg">
                        semester:{semester}
                    </h3> */}
                    <h4 className="text-center text-lg font-medium capitalize">
                        session: {session}
                    </h4>
                    <div className="text-lg">|</div>
                    <h4 className="text-center text-lg font-medium capitalize">
                        semester: {semester}
                    </h4>
                </div>
                <div className="flex justify-end mb-6">
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
                {isShowAddCourseModal && (
                    <CourseListTable
                        courseList={courseList}
                        setIsShowAddCourseModal={setIsShowAddCourseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default CourseListPage;
