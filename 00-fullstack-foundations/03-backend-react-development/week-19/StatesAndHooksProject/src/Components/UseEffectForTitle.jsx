import React from 'react'
import { useState, useEffect } from 'react'

function UseEffectForTitle() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prevCount) =>
            prevCount + 1);
    }

    useEffect(function () {
        alert ("Component is mounted")
    }, []);

    useEffect(function () {
        document.title = "Tittle count: " + [count];
    })

    return (
    <>
    <button onClick={increase}>Click here</button>

    <h3>Count displayer: {count}</h3>
    </>
    )
}

export default UseEffectForTitle
