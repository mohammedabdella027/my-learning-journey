import { useState } from "react"
import React from 'react'

function IncreaseDecreaseCount() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrease = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        setCount((prevCount) => prevCount = 0);
    };

    return (
    <>
    <h3>Initial click count: {count}</h3>

    <button onClick={reset}>Reset count</button> <br />

    <button onClick={increase}>Increase count</button> <br />

    <button onClick={decrease}>Decrease count</button><br />
    </>
    )
}

export default IncreaseDecreaseCount
