import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleStudentForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ExternalMark/SingleStudentForm";
import MultipleStudentForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ExternalMark/MultipleStudentForm";
import { ExternalMarkContextProvider } from "../../../../context/Admin/ExternalMarkContext";
import ThirdExaminerMarkForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ExternalMark/ThirdExaminerMarkForm";
import { ExternalThirdExamierMarkContextProvider } from "../../../../context/Admin/ExternalThridExaminerMarkContext";
import { MarkFormStepProvider } from "../../../../context/Admin/MarkFormStepContext";

const ExternalMarkAddPage = () => {
    return (
        <section className="">
            {/* <h2 className="text-xl text-center font-bold uppercase mt-2">
                Add mark
            </h2>
            <h4 className="text-sm font-medium text-center uppercase mt-1">
                external
            </h4> */}
            <div className="">
                <Tabs>
                    <TabList className="flex justify-center border-b border-[#c3c3c3]">
                        <Tab>
                            <div className="flex justify-center items-center ">
                                <span className=" font-bold text-lg">
                                    <AiOutlineUser />
                                </span>
                                <span className="font-medium capitalize ml-1 text-base">
                                    single
                                </span>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="flex justify-center items-center">
                                <span className=" font-bold text-lg">
                                    <AiOutlineUsergroupAdd />
                                </span>
                                <span className="font-medium capitalize ml-1 text-base">
                                    Multiple
                                </span>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="flex justify-center items-center">
                                <span className=" font-bold text-lg">
                                    <AiOutlineUsergroupAdd />
                                </span>
                                <span className="font-medium capitalize ml-1 text-base">
                                    3rd Examiner
                                </span>
                            </div>
                        </Tab>
                    </TabList>

                    {/* Single Student Tab Content */}
                    <TabPanel className="pt-8">
                        <MarkFormStepProvider>
                            <SingleStudentForm />
                        </MarkFormStepProvider>
                    </TabPanel>

                    {/* Multiple Students Tab Content */}
                    <TabPanel>
                        <ExternalMarkContextProvider>
                            <MultipleStudentForm />
                        </ExternalMarkContextProvider>
                    </TabPanel>
                    <TabPanel>
                        <ExternalThirdExamierMarkContextProvider>
                            <ThirdExaminerMarkForm />
                        </ExternalThirdExamierMarkContextProvider>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default ExternalMarkAddPage;
