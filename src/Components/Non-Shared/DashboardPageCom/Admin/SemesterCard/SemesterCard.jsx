import { Link } from "react-router-dom";
import "./semesterCard.css";

const SemesterCard = ({ semesterNo, session }) => {
    return (
        <div className="semister-card">
            <div className="top">
                <div className="caption">
                    <h3 className="title">
                        <span className="number">{semesterNo}</span>-semester
                    </h3>
                    <div className=" flex flex-wrap gap-2">
                        <Link
                            to={`/dashboard/admin/session-list/${session}/${semesterNo}/course`}
                            className="badge badge-lg capitalize text-sm font-normal bg-primary hover:bg-secondary text-white rounded-sm"
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
