import React, { Component } from 'react'
import FRInput from './FRInput'
// Forward Ref using FRParentInput => FRInput
export class FRParentInput extends Component {
    constructor(props) {
        super(props)
             this.inputRef = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click to Focus</button>
            </div>
        )
    }
}

export default FRParentInput
