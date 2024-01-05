import { useQuery } from "react-query";
import { fetchAllHandler } from "./fetchHandlers";

const useFetchData = (field, url) => {
    const { isLoading, isError, data, error } = useQuery(field, () =>
        fetchAllHandler(url)
    );

    return { loading: isLoading, data, isError, error };
};

export default useFetchData;
