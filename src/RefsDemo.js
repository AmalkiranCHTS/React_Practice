import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
             this.inputRef = React.createRef() 
             this.cbRef = null;
             this.setCbRef = (Element) => {
                this.cbRef = Element // callback Ref
             }
    }
    
    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        } // to focus on 2nd input element i.e., via callback(setCbRef here)
        // this.inputRef.current.focus()
        // console.log("hello", this.inputRef);        
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type = "text" ref={this.inputRef}></input>
                <input type = "text" ref={this.setCbRef}></input> 
                {/* sets our ref (serRef) */}
                {/* input element is implicitly passed as a parameter which is assigned to the callBack Ref Property. */}
                
                <button onClick = {this.clickHandler}> Click </button>
            </div> 
        )
    }
}

export default RefsDemo
