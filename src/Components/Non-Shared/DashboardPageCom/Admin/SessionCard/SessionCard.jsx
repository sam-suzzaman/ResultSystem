import "./sessionCard.css";
import { FaUserGraduate } from "react-icons/fa";
import { BiArrowToRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const SessionCard = ({ sessionData }) => {
    const { _id, session, department } = sessionData;
    return (
        <div className="session-card">
            <div className="session-card-front">
                <span className="icon text-5xl text-slate-100 p-3 border-2 border-slate-100 rounded-full">
                    <FaUserGraduate />
                </span>
                <h4 className="capitalize font-medium mt-1 text-lg ">
                    session: <span className="text-base number">{session}</span>
                </h4>
                <Link
                    to={`/dashboard/admin/session-list/${session}`}
                    className="session-btn mt-1"
                >
                    Details
                    <span className="text-[16px] ml-1">
                        <BiArrowToRight />
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default SessionCard;
