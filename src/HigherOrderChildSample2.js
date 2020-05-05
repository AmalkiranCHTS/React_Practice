import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderParentSample2'
// import withCounter from './HigherOrderParentSample2'

// OnHover Functionality
class HigherOrderChildSample2 extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }
    
    // incrementState = () => {
    //     this.setState( prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
    // Pushed this code to HigherOrderParentSample2.js for multiple times ReUse of this same code

    
    render() {
        // const {count} = this.state;
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h2 onMouseOver = {incrementCount}> Hovered {count} times</h2>
                {/* <h2 onMouseOver = {this.incrementCount }> {this.props.name} Hovered {count} times</h2> */}
                {/* <button onClick = {this.incrementState}>Clicked {count} </button> */}
                {/* <button onMouseOver = {this.incrementState}>Clicked {count} </button> */}
            </div>
        )
    }
}

export default UpdatedComponent(HigherOrderChildSample2,5)
// export default withCounter(HigherOrderChildSample2)