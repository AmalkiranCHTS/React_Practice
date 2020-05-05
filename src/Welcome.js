import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        // return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
        const {name,heroName} = this.props
        // const {state1,state2} = props
        return (
            <div>
                <h1>Welcome {this.name} to {heroName} </h1>
            </div>
        )
        
    }
}

export default Welcome
