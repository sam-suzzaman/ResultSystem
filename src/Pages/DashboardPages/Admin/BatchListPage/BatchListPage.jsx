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
                    <SectionTitle title="Session Records" />
                </div>
                <div className="session-card-container mt-8">
                    <SessionCard session="2022-23" student="35" />
                    <SessionCard session="2021-22" student="37" />
                    <SessionCard session="2020-21" student="32" />
                    <SessionCard session="2019-20" student="35" />
                    <SessionCard session="2018-19" student="33" />
                    <SessionCard session="2017-18" student="31" />
                </div>
            </section>
        </>
    );
};

export default BatchListPage;
