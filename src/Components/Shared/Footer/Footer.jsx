import styled from "styled-components";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Wrapper>
            <div className="footer footer-center p-4 bg-base-100 text-primary shadow-sm shadw">
                <div>
                    <p className="font-roboto font-medium">
                        Copyright © {currentYear} - All right reserved by JKKNIU
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
