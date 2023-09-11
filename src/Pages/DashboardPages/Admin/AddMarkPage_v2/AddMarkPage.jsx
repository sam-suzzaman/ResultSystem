import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import "./AddMarkPage.css";

const AddMarkPage = () => {
    const { pathname } = useLocation();
    return (
        <>
            <section className="add_mark_page_wrapper">
                <Breadcrumb location={pathname} />
                <div className="mt-6">
                    <SectionTitle title="add marks" />
                </div>

                <div className="external-add-mark-page-card-container mt-16">
                    <Link to="/dashboard/admin/add-mark/internal">
                        <div className="mark-card">
                            <h3 className="">internal</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard/admin/add-mark/external">
                        <div className="mark-card">
                            <h3 className="">external</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard/admin/add-mark/lab">
                        <div className="mark-card">
                            <h3 className="">lab</h3>
                        </div>
                    </Link>
                    <Link to="/dashboard/admin/add-mark/improvement">
                        <div className="mark-card">
                            <h3 className="">Improvement</h3>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default AddMarkPage;
