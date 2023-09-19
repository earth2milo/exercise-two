import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div> 
            <h2> Counter</h2>
            <p> the current count is {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increase </button>
            <button onClick={() => setCounter(counter - 1)}>Decrease </button>

        </div>
    )

}