import { Link } from "react-router-dom";
import "./semesterCard.css";

const SemesterCard = ({ title }) => {
    return (
        <div class="semister-card">
            <div class="top">
                <div class="caption">
                    <h3 class="title "> {title}</h3>
                    <div className=" flex flex-wrap gap-2">
                        <Link
                            to="/dashboard/admin/batch-list/batch/student-list"
                            className="badge text-xs font-normal bg-[#fa8740] hover:bg-[#ffb153] text-white rounded-sm"
                        >
                            students
                        </Link>
                        <Link
                            to="/dashboard/admin/batch-list/batch/course"
                            className="badge capitalize text-xs font-normal bg-[#2b9859] hover:bg-[#33b76a] text-white rounded-sm"
                        >
                            courses
                        </Link>
                    </div>
                </div>
            </div>
            <div class="middle"></div>
            <div class="bottom"></div>
        </div>
    );
};

export default SemesterCard;
