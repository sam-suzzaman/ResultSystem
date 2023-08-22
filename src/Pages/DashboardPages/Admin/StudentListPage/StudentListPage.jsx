import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import { useLocation, useParams } from "react-router-dom";
import StudentListTable from "../../../../Components/Non-Shared/DashboardPageCom/Admin/StudentListTable/StudentListTable";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteHandler, getAllHandler } from "../../../../utils/fetchHandlers";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";
import { toast } from "react-toastify";
import ConfirmModal from "../../../../Components/Shared/ConfirmModal/ConfirmModal";
import { useState } from "react";

const StudentListPage = () => {
    const { pathname } = useLocation();
    const { session } = useParams();
    const [deleteStudentID, setDeleteStudentID] = useState("");
    const queryClient = useQueryClient();

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

    const deleteMutation = useMutation({
        mutationFn: deleteHandler,
        onSuccess: (data, variable, context) => {
            queryClient.invalidateQueries("students");
            toast.success("Student Deleted");
        },
        onError: (error, variable, context) => {
            console.log(error);
            toast.error("Something Wrong");
        },
    });

    const handleDeleteProcess = (response) => {
        if (response) {
            deleteMutation.mutate({
                url: `https://student-management-delta.vercel.app/user/${deleteStudentID}`,
            });
        } else {
            return;
        }
    };

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

                    <StudentListTable
                        students={students}
                        setDeleteStudentID={setDeleteStudentID}
                    />
                </div>
            )}
            <ConfirmModal
                message="Student will removed permanently"
                handleDeleteProcess={handleDeleteProcess}
            />
        </div>
    );
};

export default StudentListPage;
