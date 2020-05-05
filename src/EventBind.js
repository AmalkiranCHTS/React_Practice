import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // this.clickHandler = this.clickHandler.bind(this) // not for 1st and 4th way
        //Only for 3rd way .. 2nd  doubt
    }
    
    // clickHandler() {
    //     // this.setState({
    //     //     message: 'Good Bye'
    //     // })
    //     // this keyword within our event Hnadler is undefined so this give error when we use 
    //     // <button onClick={this.clickHandler}>Click</button>
    //     //  So we use Bind keyword

    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this) 
    //     //for 1st and 2nd way and 3rd way        
    // }

    // 4th way
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <h1> Event Handling</h1>
                <div>{this.state.message}</div>
                {/* 1st way <button onClick={this.clickHandler.bind(this)}>Click using Event Bind</button>*/  }
                {/* 2nd way <button onClick={() => this.clickHandler()}>Click using Event Bind</button> */}
                
                {/* <button onClick={this.clickHandler}>Click using Event Bind</button> */}
                {/* 3rd way */}

                {/* { 4rd way} */}
                <button onClick={this.clickHandler}>Click using Event Bind</button>
                

                {/*Here we are Calling the event Handler and returning the value that's why using parenthesis clickHandler() */}
                {/* /this changes message from Hello to Good Bye on Click */}
            </div>

            
            

        )
    }
}

export default EventBind


{/*
1) way/approach

constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
clickHandler() {
    this.setState({
     message: 'Good Bye'
    })
}

<button onClick={this.clickHandler.bind(this)}>Click using Event Bind</button>


2) way / approach

constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }

clickHandler() {
    this.setState({
     message: 'Good Bye'
    })
}

<button onClick={() => this.clickHandler()}>Click using Event Bind</button> // using arrow funs in render methods()
//has some performnce issues 
3) way / approach


constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this) // doubt 
    }


clickHandler() {
    this.setState({
     message: 'Good Bye'
    })
}


<button onClick={this.clickHandler}>Click using Event Bind</button>
// binding in constructor


4) using arrow function as a class property
method in class

constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        
    }

clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

<button onClick={this.clickHandler}>Click using Event Bind</button>


*/}