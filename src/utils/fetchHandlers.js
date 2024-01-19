import axios from "axios";
import useFetchConfig from "./useFetchConfig";

export const fetchAllHandler = async (url) => {
    const config = useFetchConfig();
    const response = await axios.get(url, config);
    return response?.data;
};
export const getAllHandler = async (url) => {
    const config = useFetchConfig();
    const response = await axios.get(url, config);
    return response?.data?.result;
};

export const getSingleHandler = async (url) => {
    const config = useFetchConfig();
    const response = await axios.get(url, config);
    return response.data.result;
};

export const postHandler = async ({ url, body }) => {
    const config = useFetchConfig();
    const response = await axios.post(url, body, config);
    return response.data.result;
};

export const updateHandler = async ({ url, body }) => {
    const config = useFetchConfig();
    const response = await axios.put(url, body, config);
    return response.data;
};

export const deleteHandler = async ({ url }) => {
    const config = useFetchConfig();
    const response = await axios.delete(url, config);
    return response.data.result;
};
