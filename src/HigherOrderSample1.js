import React, { Component } from 'react'

export class HigherOrderSample1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementState = () => {
        this.setState( prevState => {
            return {count: prevState.count + 1}
        })
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <h2 onMouseOver = {this.incrementState}>Hovered {count} times</h2>
                {/* <button onClick = {this.incrementState}>Clicked {count} </button> */}
                {/* <button onMouseOver = {this.incrementState}>Clicked {count} </button> */}
            </div>
        )
    }
}

export default HigherOrderSample1
