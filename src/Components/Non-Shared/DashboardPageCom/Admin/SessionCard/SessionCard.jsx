import "./sessionCard.css";
import { FaUserGraduate } from "react-icons/fa";
import { BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const SessionCard = ({ session, student }) => {
    return (
        <div class="session-card">
            <div class="session-card-inner">
                <div class="session-card-front">
                    <span className="icon text-6xl text-slate-100">
                        <FaUserGraduate />
                    </span>
                    <h3 className="text-white font-semibold text-lg capitalize mt-2">
                        session: {session}
                    </h3>
                </div>
                <div class="session-card-back px-2">
                    <span className="icon text-5xl text-slate-100 p-3 border-2 border-slate-100 rounded-full">
                        <FaUserGraduate />
                    </span>
                    <h4 className="capitalize font-medium text-xs mt-1">
                        session: {session}
                    </h4>
                    <h4 className="font-medium text-xs">{student} Students</h4>
                    <div className="session-card-divider"></div>
                    <Link
                        to="/dashboard/admin/batch-list/batch"
                        className="session-btn"
                    >
                        Details
                        <span className="text-lg">
                            <BiArrowToRight />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SessionCard;
