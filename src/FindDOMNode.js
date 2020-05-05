import React, { Component } from 'react'
import ReactDOM from 'react-dom';  

export class FindDOMNode extends Component {
    constructor() {
        super()
        this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);  
        this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);  
    }
    
    findDomNodeHandler1() {  
        var myDiv1 = document.getElementById('myDivOne');  
        ReactDOM.findDOMNode(myDiv1).style.color = 'red';  
    }  
    findDomNodeHandler2() {  
        var myDiv2 = document.getElementById('myDivTwo');  
        ReactDOM.findDOMNode(myDiv2).style.color = 'blue';  
    }  

    render() {
        return (
            <div>
                <h> findDOMNode </h>
                <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
                <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>  
                <h3 id = "myDivOne">JTP-NODE1</h3>  
                <h3 id = "myDivTwo">JTP-NODE2</h3>  
            </div>
        )
    }
}

export default FindDOMNode
