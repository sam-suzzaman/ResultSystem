import { useQuery } from "react-query";
import { getAllHandler } from "./fetchHandlers";

const useFetchData = (field, url) => {
    console.log(url);
    const { isLoading, isError, data, error } = useQuery(field, () =>
        getAllHandler(url)
    );

    return { loading: isLoading, data, isError, error };
};

export default useFetchData;
