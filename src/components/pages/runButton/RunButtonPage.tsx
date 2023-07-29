import RunButton from "../../inputs/runButton/RunButton"
import { useState } from "react"

const RunButtonPage = () => {
    const [buttonX, setButtonX] = useState<string>()
    const [buttonY, setButtonY] = useState<string>()

    const handleClick = () => {
        console.log(1);
        
    }
    return (
        <>
            <RunButton onClick={handleClick} coordiantsX={ buttonX? buttonX : '50%'} coordinatsY={buttonY? buttonY : '50%'}/>
        </>
    )
}

export default RunButtonPage