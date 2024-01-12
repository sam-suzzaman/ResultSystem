import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import SingleStudentForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ImprovementMark/SingleStudentForm";
// import MultipleStudentForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ImprovementMark/MultipleStudentForm";
import Wrapper from "../../../../assets/wrappers/Common/MarksTabWrapper";
import { MarkFormStepProvider } from "../../../../context/Admin/MarkFormStepContext";
// import ThirdExaminerMarkForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ImprovementMark/ThirdExaminerMarkForm";
import SingleLabMarkForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ImprovementMark/LabMarkSingleForm";

const LabImproveAddMarkPage = () => {
    return (
        <section className="">
            <div className="">
                <Tabs>
                    <Wrapper>
                        <TabList className="flex justify-center border-b border-[#c3c3c3]">
                            <Tab>
                                <div className="flex justify-center items-center ">
                                    <span className=" font-bold text-lg">
                                        <AiOutlineUser />
                                    </span>
                                    <span className="font-medium capitalize ml-1 text-base">
                                        add mark (single)
                                    </span>
                                </div>
                            </Tab>
                            {/* <Tab>
                                <div className="flex justify-center items-center">
                                    <span className=" font-bold text-lg">
                                        <AiOutlineUsergroupAdd />
                                        <AiOutlineUser />
                                    </span>
                                    <span className="font-medium capitalize ml-1 text-base">
                                        add mark (Multiple)
                                    </span>
                                </div>
                            </Tab> */}
                            {/* <Tab>
                                <div className="flex justify-center items-center">
                                    <span className=" font-bold text-lg">
                                        <AiOutlineUsergroupAdd />
                                        <AiOutlineUser />
                                    </span>
                                    <span className="font-medium capitalize ml-1 text-base">
                                        3rd examiner
                                    </span>
                                </div>
                            </Tab> */}
                        </TabList>
                    </Wrapper>

                    {/* Single Student Tab Content */}
                    <TabPanel className="mt-5">
                        <MarkFormStepProvider>
                            <SingleLabMarkForm />
                        </MarkFormStepProvider>
                    </TabPanel>

                    {/* Multiple Students Tab Content */}
                    {/* <TabPanel className="mt-5">
                        <MultipleStudentForm />
                        <MarkFormStepProvider>
                            <MultipleStudentForm />
                        </MarkFormStepProvider>
                    </TabPanel> */}

                    {/* <TabPanel className="mt-5">
                        <MultipleStudentForm />
                        <MarkFormStepProvider>
                            <ThirdExaminerMarkForm />
                        </MarkFormStepProvider>
                    </TabPanel> */}
                </Tabs>
            </div>
        </section>
    );
};

export default LabImproveAddMarkPage;
