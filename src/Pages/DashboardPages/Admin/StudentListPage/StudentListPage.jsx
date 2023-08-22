import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import { useLocation, useParams } from "react-router-dom";
import StudentListTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/StudentListTable/StudentListTable";
import { useQuery } from "react-query";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";

const StudentListPage = () => {
    const { pathname } = useLocation();
    const { session } = useParams();
    const {
        isLoading,
        isError,
        data: students,
        error,
    } = useQuery("students", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/user/EEE/${session}`
        )
    );
    if (isLoading) {
        return <LoadingCom />;
    }
    if (isError) {
        return (
            <h3 className="font-medium text-lg text-center">
                {error?.message}
            </h3>
        );
    }
    return (
        <div>
            <div className="">
                <Breadcrumb location={pathname} />
            </div>
            {students.length === 0 && (
                <h2 className="text-xl text-center font-bold mt-8 uppercase">
                    student list is empty
                </h2>
            )}
            {students.length !== 0 && (
                <div className="mt-12 mb-12">
                    <div className="">
                        <h3 className="text-center font-bold capitalize text-xl mb-3">
                            all student's list
                        </h3>
                    </div>

                    <StudentListTable students={students} />
                </div>
            )}
        </div>
    );
};

export default StudentListPage;
