import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleStudentForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddMarkPageCom/ImprovementMark/SingleStudentForm";

const ImprovementMarkAddPage = () => {
    return (
        <section className="">
            <h2 className="text-xl text-center font-bold uppercase mt-2">
                Add mark
            </h2>
            <h4 className="text-sm font-medium text-center uppercase mt-1">
                Improvement Result
            </h4>
            <div className="mt-8">
                <Tabs>
                    <TabList className="flex justify-center border-b border-[#c3c3c3]">
                        <Tab>
                            <div className="flex justify-center items-center ">
                                <span className=" font-bold text-lg">
                                    <AiOutlineUser />
                                </span>
                                <span className="font-medium capitalize ml-1 text-base">
                                    single student
                                </span>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="flex justify-center items-center">
                                <span className=" font-bold text-lg">
                                    <AiOutlineUsergroupAdd />
                                </span>
                                <span className="font-medium capitalize ml-1 text-base">
                                    Multiple students
                                </span>
                            </div>
                        </Tab>
                    </TabList>

                    {/* Single Student Tab Content */}
                    <TabPanel className="pt-8">
                        <SingleStudentForm />
                    </TabPanel>

                    {/* Multiple Students Tab Content */}
                    <TabPanel>{/* <MultipleStudentForm /> */}</TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default ImprovementMarkAddPage;
