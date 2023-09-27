import { RouterProvider } from "react-router-dom";
import Routers from "./Router/Routers";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProviderWrapper } from "./context/Admin/UserContext";

// Create a client
const queryClient = new QueryClient();

function App() {
    return (
        <>
            <UserContextProviderWrapper>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={Routers} />
                </QueryClientProvider>
            </UserContextProviderWrapper>
        </>
    );
}

export default App;
