import { createBrowserRouter } from "react-router";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Examples from "./pages/Examples";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: LandingPage },
            { path: "examples", Component: Examples },
        ],
    },
]);
