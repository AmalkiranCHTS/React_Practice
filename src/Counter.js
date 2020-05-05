import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
    super(props)

    this.state = {
         count: 0
    }
}

increment() {
    // this.state.count = this.state.count + 1
    // console.log(this.state.count)

    // this.setState({
    //     count: this.state.count + 1
    // }, 
    // () => console.log('CallBack value', this.state.count))
    // console.log(this.state.count)
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
    console.log(this.state.count)
}

incrementFIve() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()

    // for(var i=0; i<5; i++){
        
    //     this.increment()
    // }
}

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
            <button onClick = {() => this.incrementFIve()}>Increment</button>

            </div>
        )
    }
}

export default Counter
