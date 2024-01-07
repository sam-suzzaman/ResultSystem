import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleStudentForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/LabMark/SingleStudentForm";
import MultipleStudentForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/LabMark/MultipleStudentForm";

import Wrapper from "../../../../assets/wrappers/Common/MarksTabWrapper";
import { MarkFormStepProvider } from "../../../../context/Admin/MarkFormStepContext";

const LabMarkAddPage = () => {
    return (
        <>
            <section className="">
                <div className="">
                    <Tabs>
                        <Wrapper>
                            <TabList className="">
                                <Tab>
                                    <div className="flex justify-center items-center">
                                        <span className=" font-bold text-lg">
                                            <AiOutlineUsergroupAdd />
                                        </span>
                                        <span className="font-medium capitalize ml-1 text-base">
                                            Add mark
                                        </span>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="flex justify-center items-center ">
                                        <span className=" font-bold text-lg">
                                            <AiOutlineUser />
                                        </span>
                                        <span className="font-medium capitalize ml-1 text-base">
                                            update
                                        </span>
                                    </div>
                                </Tab>
                            </TabList>
                        </Wrapper>

                        {/* Multiple Students Tab Content */}
                        <TabPanel className="mt-5">
                            <MarkFormStepProvider>
                                <MultipleStudentForm />
                            </MarkFormStepProvider>
                        </TabPanel>

                        {/* Single Student Tab Content */}
                        <TabPanel className="mt-5">
                            <MarkFormStepProvider>
                                <SingleStudentForm />
                            </MarkFormStepProvider>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    );
};

export default LabMarkAddPage;
