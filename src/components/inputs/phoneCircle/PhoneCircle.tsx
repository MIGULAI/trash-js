import React, { useEffect, useState } from 'react';
import classes from './PhoneCircle.module.css'

interface IDiggit {
    value: number;
    left: number;
    top: number;
}

interface IPhoneCircle {
    id: string | null | undefined;
    circleSize: number;
    callback: Function;
}

const PhoneCircle = ({ id, circleSize, callback }: IPhoneCircle) => {
    const [buttons, setButtons] = useState<IDiggit[]>()
    const [centerX, setCenterX] = useState<number>(0);
    const [centerY, setCenterY] = useState<number>(0);
    const [numberInTop, setNumberInTop] = useState<IDiggit | null>(null);
    const calc = (degrees: number) => {
        const radius = circleSize / 2.5;
        const numberOfDigits = 10; // Кількість цифр
        const angleStep = 360 / numberOfDigits; // Кутовий крок
        const digits: IDiggit[] = [];
        for (let i = 0; i < numberOfDigits; i++) {
            const angle = i * angleStep; // Кут для кожної цифри
            const digitX = radius * Math.cos(((angle + degrees) * Math.PI) / 180) - 15; // X-координата
            const digitY = radius * Math.sin(((angle + degrees) * Math.PI) / 180) + 21; // Y-координата
            digits.push({
                value: i,
                left: digitX,
                top: digitY
            })
        }

        return digits as IDiggit[]
    }
    const handleMouseDown = (event: any) => {
        const target = event.currentTarget;
        const container = target.parentNode;
        const containerRect = container.getBoundingClientRect();

        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;
        setCenterX(centerX);
        setCenterY(centerY);

    };
    const handleMouseMove = (e: any) => {
        if (centerX && centerY) {
            let x = 0;
            let y = 0;
            if (e.clientX && e.clientY) {
                x = e.clientX;
                y = e.clientY;
            } else {
                x = e.touches[0].clientX;
                y = e.touches[0].clientY;
            }
            const deltaX = x - centerX;
            const deltaY = y - centerY;
            // console.log(deltaY);

            const degrees = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            const digits = calc(-degrees)
            setButtons(digits)
            let maxTop: IDiggit = digits[0];

            digits.map(digit => {
                if (digit.top > 0) {
                    if (maxTop.top < digit.top) {
                        maxTop = digit
                    }
                }
                return digit;
            })
            setNumberInTop(maxTop)
            const distance = Math.sqrt(deltaX ** 2 + (y - centerY) ** 2);

            if (distance >= circleSize / 2) {
                handleMouseUp()
            }
        }
    };

    const handleMouseUp = () => {
        setCenterX(0);
        setCenterY(0);
        const digits = calc(0)
        setButtons(digits)
        callback(numberInTop?.value)
        setNumberInTop(null)
    };
    useEffect(() => {
        const digits: IDiggit[] = calc(0);
        setButtons(digits)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={classes.wraper}>
            <div
                className={classes.circleWrapper}
                style={{ width: circleSize, height: circleSize }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleMouseUp}
            >
                <div className={classes.circle}>
                </div>
                {
                    buttons?.map(el =>
                        <React.Fragment key={el.value}>
                            {
                                numberInTop && numberInTop.value === el.value
                                    ? <span
                                        style={{
                                            color: "#fff",
                                            border: "1px solid black",
                                            borderRadius: "50%",
                                            padding: '10px',
                                            backgroundColor: "black",
                                            left: `calc(50% + ${el.left}px)`,
                                            top: `calc(50% - ${el.top}px)`
                                        }}>{el.value}</span>
                                    : <span
                                        style={{
                                            color: "black",
                                            border: "1px solid black",
                                            borderRadius: "50%",

                                            padding: '10px',
                                            left: `calc(50% + ${el.left}px)`,
                                            top: `calc(50% - ${el.top}px)`
                                        }}>{el.value}</span>
                            }

                        </React.Fragment>

                    )
                }

            </div>
        </div>
    )
}
export default PhoneCircle