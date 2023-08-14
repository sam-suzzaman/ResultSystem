const Breadcrumb = ({ location }) => {
    const breadcrumbs = location.split("/");
    return (
        <div className="text-xs breadcrumbs">
            <ul>
                <span className="capitalize underline-offset-0 cursor-default text-slate-500">
                    Home
                </span>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index}>
                        <span className="capitalize underline-offset-0 cursor-default text-slate-500">
                            {breadcrumb}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Breadcrumb;
