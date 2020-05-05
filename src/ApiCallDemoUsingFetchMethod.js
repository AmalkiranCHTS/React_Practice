import React, { Component } from 'react'

export class ApiCallDemoUsingFetchMethod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items : [],
             isLoaded : false
        }
    }
    //  Api demo https://jsonplaceholder.typicode.com/users
    // covid-19 API https://api.covid19api.com/summary
    // https://api.covid19india.org/data.json
    // https://jsonplaceholder.typicode.com/posts
    // https://api.npms.io/v2/search?q=react
    // https://covid19.mathdro.id/api

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
              .then(res => res.json())
              .then(json => {
                  this.setState({
                      isLoaded: true,
                      items: json
                  })
              })
    }
    
    render() {
        var {isLoaded, items} = this.state;
        // var {isLoaded} = this.state;
        if(!isLoaded)
    {
        return <div> Loading </div>
    }
    else {
        return (
            <div>
                <h1> Data Has Been Loaded</h1>
                <ul>
                    {/* this.state.items.map(item => ( */}
                    {items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                     {/* {items.map(function(index,value){
                        return <li key={value}>{index.id}{index.name}</li>
                    } */}
                </ul>
            </div>
        )
        }
    }
}

export default ApiCallDemoUsingFetchMethod

// if not used 
// var {isLoaded, items} = this.state;
// in render() method then in map use
// this.state.items.map...this
// else items.map
// skjd