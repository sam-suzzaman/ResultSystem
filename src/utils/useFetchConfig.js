const useFetchConfig = () => {
    const token = localStorage.getItem("access-token");
    const config = {
        headers: { token: `Bearer ${token}` },
    };
    return config;
};

export default useFetchConfig;
