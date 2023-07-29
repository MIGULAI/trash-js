import { Link } from "react-router-dom";
const MainPage = () => {
    return (
        <>
            <h1>What are you doing here?</h1>
            <Link to={"/number"} >Ok?</Link>
            <Link to={"/runButton"} >Run?</Link>
        </>
    )
}

export default MainPage