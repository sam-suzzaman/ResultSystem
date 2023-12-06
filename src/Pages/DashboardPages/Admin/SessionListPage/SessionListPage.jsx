import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import SessionCard from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SessionCard/SessionCard";

import "./SessioListPage.css";
import { AiOutlinePlus } from "react-icons/ai";
import AddSessionModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddSessionModal/AddSessionModal";
import { getAllHandler } from "../../../../utils/fetchHandlers";
import { useQuery } from "react-query";
import LoadingCom from "../../../../Components/Shared/LoadingCom/LoadingCom";
import { useState } from "react";

const SessionListPage = () => {
    const { pathname } = useLocation(); // required for Breadcumbs
    const [openAddSessionModal, setOpenAddSessionModal] = useState(true);
    const {
        isLoading,
        isError,
        data: sessions,
        error,
    } = useQuery("sessionList", () =>
        getAllHandler(
            `https://student-management-delta.vercel.app/session/department/EEE`
        )
    );

    if (isLoading) {
        return <LoadingCom />;
    }

    if (isError) {
        return <h2 className="font-bold text-lg">{error?.message}</h2>;
    }

    return (
        <>
            <div>
                <Breadcrumb location={pathname} />
            </div>
            <section className="mt-4">
                <div className="">
                    <SectionTitle title="Session Records" />
                </div>
                <div className="flex justify-end mt-4">
                    <label
                        htmlFor="add_session_modal"
                        className="btn bg-primary btn-sm rounded-sm text-white hover:bg-secondary hover:shadow-md"
                    >
                        <span className="text-base font-bold">
                            <AiOutlinePlus />
                        </span>
                        <span className="text-xs">add session</span>
                    </label>
                    {openAddSessionModal && (
                        <AddSessionModal
                            setOpenAddSessionModal={setOpenAddSessionModal}
                        />
                    )}
                </div>
                <div className="session-card-container mt-6">
                    {sessions?.map((session) => {
                        return (
                            <SessionCard
                                sessionData={session}
                                key={session._id}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default SessionListPage;
