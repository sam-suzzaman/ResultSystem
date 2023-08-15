import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import SessionCard from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SessionCard/SessionCard";

import "./BatchListPage.css";

const BatchListPage = () => {
    const { pathname } = useLocation(); // required for Breadcumbs

    return (
        <>
            <div>
                <Breadcrumb location={pathname} />
            </div>
            <section className="mt-4">
                <div className="">
                    <SectionTitle title="Batch Records" />
                </div>
                <div className="session-card-container mt-8">
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                </div>
            </section>
        </>
    );
};

export default BatchListPage;