import React, { Component } from 'react';
import HeaderComponent from './Header_Component/headerComponent';
import $ from '../node_modules/jquery/dist/jquery.min';

import './App.css';

class App extends React.Component {
   
  render() {
     return (
        <div>
           <HeaderComponent />
           <Content/>
           <Footer/>
        </div>
     );
  }
}
// class Header extends React.Component {
//    state = {
//       count: "HEADER",
//       returnedString: "https://image.shutterstock.com/image-vector/internet-design-logoicon-template-600w-1037418430.jpg",
//    }
// //   render() {
//    //   return (
//    //      <div class="header">
//    //         <h1><img class="logo" src= {logo,logo1} width="65px" height="65px" />LOGIN {this.state.count}
//    //         <button class="btn btn-link update_btn" onClick={() => this.setState({ 
//    //          count: 'Header'
//    //          })}>Update</button>
//    //          </h1>
//    //             <div class="collapse navbar-collapse" id="navbarCollapse">
//    //                <ul class="navbar-nav mr-auto">
//    //                   <li class="nav-item active">
//    //                   <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//    //                   </li>
//    //                   <li class="nav-item">
//    //                   <a class="nav-link" href="#">Link</a>
//    //                   </li>
//    //                   <li class="nav-item">
//    //                   <a class="nav-link disabled" href="#">Disabled</a>
//    //                   </li>
//    //                </ul>
//    //                <form class="form-inline mt-2 mt-md-0">
//    //                   <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
//    //                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//    //                </form>
//    //             </div>
//    //      </div>
//    //   );
// // }
//    render() {
//       return (
//           <div className="Header">
//                <p>This is the parent component</p>
//                <HeaderComponent />
//           </div>
//       );
//   }
// }


class Content extends React.Component {
  render() {
     return (
        <div class=" row main_form"> 
         <div class="col">
            <a href="#" class="fb btn">
               <i class="fa fa-facebook fa-fw"></i> Login with Facebook
               </a><br/>
            <a href="#" class="twitter btn">
               <i class="fa fa-twitter fa-fw"></i> Login with Twitter
            </a><br/>
            <a href="#" class="google btn"><i class="fa fa-google fa-fw">
               </i> Login with Google+
            </a><br/>
         </div>
         <div class="vl">
            <span class="vl-innertext">or</span>
         </div>
            <div class="col">
               <form action="/action_page.php" method="get">
                  <div class="input-container">
                     <i class="fa fa-user icon"></i><label for="fname">First name:</label>
                     <input type="text" id="fname"  class="border border-info rounded" name="fname" placeholder="Firstname"/><br/><br/>
                  </div>
                  <div class="input-container">
                     <i class="fa fa-envelope icon"></i><label for="lname">Email Id:</label>
                     <input type="text" id="lname"  class="border border-info rounded email" name="lname" placeholder="Email"/><br/><br/>
                  </div>
                  <div class="input-container">
                     <i class="fa fa-key icon"></i><label for="lname">Password:</label>
                     <input class="input-field" type="password" placeholder="Password" name="psw" />
                  </div>

                  <input type="submit" class="btn btn-success" value="Submit"/>
                  </form>
            </div>
        </div>
     );
  }
}

class Footer extends React.Component {
   render() {
      return (
         <div class="card-footer text-muted">
            <footer>Footer</footer>
            <p>The content text!!!</p>
         </div>
      );
   }
 }

export default App;