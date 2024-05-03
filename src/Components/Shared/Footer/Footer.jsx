import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Wrapper>
            <div className="footer footer-center p-4 px-4 md:px-8 bg-white border-t border-gray-400 text-primary">
                <div className=" w-full flex justify-center">
                    <p className=" text-gray-700 text-[9pt] font-bold">
                        Copyright ©{" "}
                        <span className="number font-medium">
                            {" "}
                            {currentYear}
                        </span>
                        - reserved by Department of Electrical and Electroinc
                        Engineering
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
