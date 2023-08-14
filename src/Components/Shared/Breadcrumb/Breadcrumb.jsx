const Breadcrumb = ({ location }) => {
    const breadcrumbs = location.split("/");
    return (
        <div className="text-xs sm:text-sm breadcrumbs">
            <ul>
                <span className="capitalize underline-offset-0 cursor-default">
                    Home
                </span>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <span className="capitalize underline-offset-0 cursor-default">
                            {breadcrumb}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumb;
