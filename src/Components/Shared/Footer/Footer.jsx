import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Wrapper>
            <div className="footer footer-center p-4 px-4 md:px-8 bg-white border-t border-gray-400 text-primary">
                <div className=" w-full flex flex-row-reverse justify-between">
                    <div className="team_container flex justify-end">
                        <div className="team_card text-white text-sm border-r border-[#a0a0a0] pr-3">
                            <span className="mr-1 font-medium tracking-wide text-gray-900 text-[13px]">
                                Supervised By:
                            </span>
                            <Link
                                to="/"
                                className="font-medium tracking-wider text-primary text-[13px] number"
                            >
                                Dr. Md Mahbubur Rahman
                            </Link>
                        </div>
                        <div className="team_card text-white text-sm border-r border-[#a0a0a0] pr-3 pl-3">
                            <span className="mr-1 font-medium tracking-wide text-gray-900 text-[13px]">
                                Fronted:
                            </span>
                            <Link
                                to="/"
                                className="font-medium tracking-wider text-primary text-[13px] number"
                            >
                                Samsuzzaman
                            </Link>
                        </div>
                        <div className="team_card text-white text-sm pl-3">
                            <span className="mr-1 font-medium tracking-wide text-gray-900 text-[13px]">
                                Backend:
                            </span>
                            <Link
                                to="/"
                                className="font-medium number tracking-wider text-primary text-[13px]"
                            >
                                Lipon Chandra Roy
                            </Link>
                        </div>
                    </div>
                    <p className=" text-gray-700 text-[9pt] font-bold">
                        Copyright ©{" "}
                        <span className="number font-medium">
                            {" "}
                            {currentYear}
                        </span>
                        - reserved by Department of EEE
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

export default Footer;
