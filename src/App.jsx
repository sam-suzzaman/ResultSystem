import { RouterProvider } from "react-router-dom";
import Routers from "./Router/Routers";
import "./App.css";

function App() {
    return (
        <>
            <RouterProvider router={Routers} />
        </>
    );
}

export default App;
