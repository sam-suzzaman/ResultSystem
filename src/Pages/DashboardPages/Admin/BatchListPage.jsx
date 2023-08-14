import { useLocation } from "react-router-dom";
import Breadcrumb from "../../../Components/Shared/Breadcrumb/Breadcrumb";

const BatchListPage = () => {
    const locationValue = useLocation();
    console.log(locationValue);

    return (
        <>
            <div>
                <Breadcrumb location={locationValue.pathname} />
            </div>
            <h3>Batch list</h3>
        </>
    );
};

export default BatchListPage;
