import { Route, Routes } from "react-router-dom"
import { routes } from "../router"


export const AppRouter = () => {
    return (
        <Routes>
            <Route>
                {
                    routes.map((el, i) =>
                        <Route key={i} path={el.path} element={el.element} />
                    )
                }
            </Route>
        </Routes>
    )
}