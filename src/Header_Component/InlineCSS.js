import React, { version } from 'react'

    const heading = {
        fontSize: '20px',
        color: 'red'
    }
// In react InlineCSS is specified as an object :

function InlineCSS() {
    return (
        <div>
            {/* <h1 className = 'styles.success'> Success1 </h1>
            <h1 className = 'error'> Error1 </h1> */}
            <h2 style={heading}> InlineCSS </h2>
        </div>
    )
}

export default InlineCSS

// Inline styles are not Specified as a astring instead they are specified with an Object Whose Key is the Camelcased version of the 
// styling and the values is usaually a String.