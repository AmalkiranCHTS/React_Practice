import React, { Component } from 'react'


export class ApiCallUsingAxios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                posts: []
        }
    }
    
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    render() {
        return (
            <div>
                ApiCallUsingAxios
            </div>
        )
    }
}

export default ApiCallUsingAxios
