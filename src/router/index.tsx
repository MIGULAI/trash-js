import MainPage from "../components/pages/main/MainPage";
import Number from "../components/pages/number/Number";
import RunButtonPage from "../components/pages/runButton/RunButtonPage";

export const routes = [
    {path: "/" , element: <MainPage/>},
    {path: "/number", element:<Number/>},
    {path: "/runButton", element: <RunButtonPage/>}
];