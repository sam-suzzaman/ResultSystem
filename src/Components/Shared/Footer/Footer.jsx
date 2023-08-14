const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <div>
                <p>Copyright © {currentYear} - All right reserved by JKKNIU</p>
            </div>
        </footer>
    );
};

export default Footer;
