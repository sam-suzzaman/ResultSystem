import { Link } from "react-router-dom";
import "./semesterCard.css";

const SemesterCard = ({ title }) => {
    return (
        <div className="semister-card">
            <div className="top">
                <div className="caption">
                    <h3 className="title "> {title}</h3>
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
            <div className="middle"></div>
            <div className="bottom"></div>
        </div>
    );
};

export default SemesterCard;
