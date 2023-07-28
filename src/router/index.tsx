import MainPage from "../components/pages/main/MainPage";
import Number from "../components/pages/number/Number";

export const routes = [
    {path: "/" , element: <MainPage/>},
    {path: "/number", element:<Number/>}
];