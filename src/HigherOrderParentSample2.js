import React, { Component } from 'react'
// Parent of HOC from here data will be passed to HigherOrderChildSample2.js => OnMouseOver
// and 
// HigherOrderChildSample3.js => OnClick

// const  withCounter = OriginalComponent => {
const  UpdatedComponent = (OriginalComponent, incrementNumber) => {
        
    // class WithCounter extends React.Component {
    class NewComponent extends React.Component {
        // Here NewComponent maintains the state of count property 
        // and also a method to increment the count property
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCount = () => {
            this.setState( prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }

        render() {
            // return <OriginalComponent name = 'KiranCM' />
            return <OriginalComponent count = {this.state.count} incrementCount = {this.incrementCount} />
        }
    }
    return NewComponent
    // return WithCounter
}
export default UpdatedComponent
// export default withCounter
//Here this is Parent Component distributing data to two multiple Components 
//like HigherOrderChildSample2 onClick and HigherOrderChildSample2 onHover