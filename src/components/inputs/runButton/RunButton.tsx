import { useEffect, useState } from "react"

interface IRunButton {
    onClick: Function,
    coordiantsX: string,
    coordinatsY: string
}

const RunButton = ({ coordiantsX, coordinatsY, onClick }: IRunButton) => {
    const [buttonX, setButtonX] = useState<string | number>(coordiantsX)
    const [buttonY, setButtonY] = useState<string | number>(coordinatsY)
    const generateRandomVlue = (max: number) => {
        const rand =  Math.floor(Math.random() * max)
        if(max  - rand < 100){
            return rand - 100;
        }
        return rand
    }
    const handlerMouseDown = () => {
        const x = window.innerHeight;
        const y = window.innerWidth;
        setButtonX(generateRandomVlue(x))
        setButtonY(generateRandomVlue(y))
    }
    useEffect(() => {
        if (typeof buttonX === 'number') {
            setButtonX(buttonX + 'px')
        }
        if (typeof buttonY === 'number') {
            setButtonY(buttonY + 'px')
        }
    }, [buttonX, buttonY])
    return (
        <input
            type="button"
            style={{
                position: "absolute",
                top: buttonX,
                left: buttonY
            }}
            value={'Хрін попадеш'}
            onMouseDown={handlerMouseDown}
            onClick={() => onClick()}
        />
    )
}

export default RunButton