import React, { Component } from 'react';
import logo from './randd.jpg';
import logo1 from './Amalkiran_logo.png';


class HeaderComponent extends Component{
    state = {
        count: "HEADER",
    }
    render() {
        return (
		// <div className="demo">
	    //         <label className="label">Hello App</label>
        // </div>
        <div class="header">
           <h1><img class="logo" src= {logo,logo1} width="65px" height="65px" />LOGIN {this.state.count}
           <button class="btn btn-link update_btn" onClick={() => this.setState({ 
            count: 'Header'
            })}>Update</button>
            </h1>
               <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item active">
                     <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link disabled" href="#">Disabled</a>
                     </li>
                  </ul>
                  <form class="form-inline mt-2 mt-md-0">
                     <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
               </div>
        </div>
        )
    }
}
export default HeaderComponent;