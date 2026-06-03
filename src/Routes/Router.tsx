import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import LoginComponent from "../Login";
import DashboardComponent from "../Dashboard";

const authLoader = () => {
    const token = localStorage.getItem("token");

    if (!token) return redirect("login");

    return null;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "login",
        element: <LoginComponent />
    },
    {
        loader: authLoader,
        children: [
            {
                path: "dashboard",
                element: <DashboardComponent />
            }
        ],
    }
]);

export default router;