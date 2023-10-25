import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";

const GetMarkPage = () => {
    const { pathname } = useLocation();
    return (
        <>
            <section className="add_mark_page_wrapper">
                <Breadcrumb location={pathname} />
                <div className="mt-6">
                    <SectionTitle title="Get marks" />
                </div>

                <div className="external-add-mark-page-card-container mt-16">
                    {/* <Link to="/dashboard/admin/get-mark/internal">
                        <div className="mark-card">
                            <h3 className="">internal</h3>
                        </div>
                    </Link> */}
                    {/* <Link to="/dashboard/admin/get-mark/course-final">
                        <div className="mark-card">
                            <h3 className="">Course Final</h3>
                        </div>
                    </Link> */}
                    <Link to="/dashboard/admin/get-mark/semester-final">
                        <div className="mark-card">
                            <h3 className="">Semester Final</h3>
                        </div>
                    </Link>
                    {/* <Link to="/dashboard/admin/add-mark/improvement">
                        <div className="mark-card">
                            <h3 className="">Improvement</h3>
                        </div>
                    </Link> */}
                </div>
            </section>
        </>
    );
};

export default GetMarkPage;
