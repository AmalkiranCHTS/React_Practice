import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            {/* donot write clickHandler() parenthesis like this
            clickHandler Since is a function and not a function call */}
        </div>
    )
}

export default FunctionClick
// This same onclick Handler as Class Component = > ClassClick.js