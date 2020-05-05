import React, { Component } from 'react'

export class ForceUpdate extends Component {
    constructor(props) {
        super(props)
        this.forceUpdateState = this.forceUpdateState.bind(this);  
    }
    
    forceUpdateState() {
        this.forceUpdate(); // predefined method    
    }

    render() {
        return (
            <div>
                <h2> ForceUpdate </h2>
             <h1>Example to generate random number</h1>  
             <h3>Random number: {Math.random()}</h3>  
             <button onClick = {this.forceUpdateState}>ForceUpdate</button>  
            </div>
        )
    }
}

export default ForceUpdate
