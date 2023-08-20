import { ToastContainer } from "react-toastify";

const ToastComponent = () => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
        />
    );
};

export default ToastComponent;
