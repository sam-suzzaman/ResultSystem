import { Link, useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import { AiOutlinePlus } from "react-icons/ai";
import AddStudentModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddStudentModal/AddStudentModal";
import SemesterCard from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SemesterCard/SemesterCard";

import "./singleSessionPage.css";

const SingleSessionPage = () => {
    const { pathname } = useLocation();
    const { session } = useParams();
    // const [isShowAddStudentModal, setIsShowAddStudentModal] = useState(true);
    return (
        <div>
            <div>
                <Breadcrumb location={pathname} />
            </div>
            <div className="mt-4 mb-4">
                <SectionTitle title={`Session ${session}`} />
            </div>
            <div className="flex justify-end">
                <Link
                    to={`/dashboard/admin/${session}/student-list`}
                    className="btn bg-primary btn-sm rounded-sm text-white hover:bg-secondary hover:shadow-md font-medium text-xs mr-1"
                >
                    students list
                </Link>
                <div className="">
                    <label
                        htmlFor="add_student_modal"
                        className="btn bg-primary btn-sm rounded-sm text-white hover:bg-secondary hover:shadow-md"
                    >
                        <span className="text-base font-bold">
                            <AiOutlinePlus />
                        </span>
                        <span className="text-xs">add student</span>
                    </label>
                    <AddStudentModal session={session} />
                </div>
            </div>
            <div className="semester-card-container mt-8 mb-8">
                <SemesterCard semesterNo={1} session={session} />
                <SemesterCard semesterNo={2} session={session} />
                <SemesterCard semesterNo={3} session={session} />
                <SemesterCard semesterNo={4} session={session} />
                <SemesterCard semesterNo={5} session={session} />
                <SemesterCard semesterNo={6} session={session} />
                <SemesterCard semesterNo={7} session={session} />
                <SemesterCard semesterNo={8} session={session} />
            </div>
        </div>
    );
};

export default SingleSessionPage;
