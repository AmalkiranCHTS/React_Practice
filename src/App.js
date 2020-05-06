import React, { Component } from 'react';
import HeaderComponent from './Header_Component/headerComponent';
import $ from '../node_modules/jquery/dist/jquery.min';

import './App.css';
import Counter from './Counter';
import Greet from './Greet';
import Welcome from './Welcome';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import Mapping from './Header_Component/Mapping';
import Stylesheet from './Header_Component/Stylesheet'
import InlineCSS from './Header_Component/InlineCSS'
import './appStyles.css'
import styles from './appStyles.module.css'
import RefsDemo from './RefsDemo';
import FRParentInput from './FRParentInput';
import ApiCallDemoUsingFetchMethod from './ApiCallDemoUsingFetchMethod';
import ApiCallUsingAxios from './ApiCallUsingAxios';
import moduleName from 'module'
import ForceUpdate from './ForceUpdate';
import FindDOMNode from './FindDOMNode';
import { findDOMNode } from 'react-dom';
import PropValidation from './PropValidation';
import PropTypes from 'prop-types';
import HigherOrderSample1 from './HigherOrderSample1';
import HigherOrderChildSample2 from './HigherOrderChildSample2';
import HigherOrderChildSample3 from './HigherOrderChildSample3';
import Router_one from './Router_one';
import PostForm from './PostForm';
import Sidebar from './Sidebar';
import { MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";
import MenuBar from './Header_Component/SidebarComponent/MenuBar';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Component/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import SideBaar from './Component/SideBaar';
import ReactDOM from 'react-dom'; 
import SidebarMd from './SidebarMd'

const Test = (props) => {
   return(
      <div>
         <h1>{props.str}</h1>
         <h1>{(props.bool ? 'bool' : 'no bool')}</h1>
         <h1>{props.strOrNum}</h1>
         <div>{
            props.arr.map((val) => {
                  return <li key={val}>{val}</li>
               }
            )
         }</div>
         <div>{
            props.arrOfObj.map((val) => {
                  return <li key={val.age}>{val.name}</li>
               }
            )
         }</div>
         <h2>{props.children}</h2>
      </div>
   )
}

Test.propTypes = {
   str: PropTypes.string,
   bool: PropTypes.bool,
   strOrNum: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
   arr: PropTypes.arrayOf(PropTypes.number),
   arrOfObj: PropTypes.arrayOf(PropTypes.shape(
      {
         name: PropTypes.string,
         age: PropTypes.number
      }
   )),
   children: PropTypes.string
}

// - - - - - - - SlidingMe  - - - - - - -
// class SlidingMenu extends React.Component{
//    constructor(props){
//      super(props);
//    }
//    render(){
//      return(
//        <div className={"sliding-menu animated " + this.props.slideClass}>
//          <button type="button" onClick={this.props.onClick}>
//            <span className="glyphicon glyphicon-arrow-left"></span>
//          </button>
//          {this.props.children}
//        </div>
//      );
//    }
//  }
 
//  class App extends React.Component{
//    constructor(props) {
//      super(props);
//      this.state = {
//        toggleMenu: false
//      }
//      this.handleClick = this.handleClick.bind(this);
//    }
   
//    handleClick() {
//      console.log(this.state.toggleMenu);
//      this.setState({toggleMenu: !this.state.toggleMenu});
//    }
   
//    render(){
//      let slideClass;
//      this.state.toggleMenu
//        ? slideClass = 'slideInLeft slide-menu'
//        : slideClass = 'slideInRight';
     
//      return(
//        <div className="main-container">
//          <button type="button" onClick={this.handleClick}>
//            <span className="glyphicon glyphicon-menu-hamburger"></span>
//          </button>
//          <SlidingMenu slideClass={slideClass} onClick={this.handleClick}>
//          <ul class="list-unstyled components mb-5">
//          <li class="active">
//          <a href="#"><span class="fa fa-home"></span> Home</a>
//          </li>
//          <li>
//          <a href="#"><span class="fa fa-user"></span> About</a>
//          </li>
//          <li>
//          <a href="#"><span class="fa fa-sticky-note"></span> Blog</a>
//          </li>
//          <li>
//          <a href="#"><span class="fa fa-cogs"></span> Services</a>
//          </li>
//          <li>
//          <a href="#"><span class="fa fa-paper-plane"></span> Contacts</a>
//          </li>
//          </ul>
//          </SlidingMenu>
//        </div>
//      );
//    }
//  }
 
//  const element = <h1>Welcome</h1>;
//  ReactDOM.render(<App />, document.getElementById("root"));
class App extends React.Component {
   
  render() {
     return (
         <div>
            <SidebarMd/>
            {/* <BrowserRouter>
               <Sidebar /> 
            </BrowserRouter> */}
      
         </div>
      //   <React.Fragment>
      //       <Router> 
      //          <NavigationBar />

      //          <SideBaar />
               
      //             <Switch>
      //                <Route exact path="/" component={Home} />
      //                <Route path="/about" component={About} />
      //                <Route component={NoMatch} />
      //             </Switch>
      //       </Router>
      //   </React.Fragment>
      //   {/* <BrowserRouter>
      //       <MenuBar />
      //   </BrowserRouter> */}
          
        
      //   {/* <PostForm />
      //   <Router_one /> */}
      //   {/* <Animation/> */}
      //   {/* <HigherOrderChildSample2 />
      //   <HigherOrderChildSample3 /> */}
      //   {/* <HigherOrderSample1/> */}
      //   {/* <Test  str={'KiranCM'}
      //   bool
      //   strOrNum = {'Amalkiran.C.Marshanalli'}
      //   arr = {[1,2,3]}
      //   arrOfObj = {[{name:'john', age: 10}, {name:'kiran', age: 24}]}
      //   >children</Test>  */}
      //   {/* strOrNum = {'Amalkiran.C.Marshanalli'}/> */}
      //      <PropValidation str={'KiranCM'}/>
      //      {/* <FindDOMNode/> */}
      //      {/* <ForceUpdate/> */}
      //      {/* <ApiCallUsingAxios /> */}
      //      {/* <FRParentInput /> */}
      //      {/* <ApiCallDemoUsingFetchMethod /> */}
      //      {/* <RefsDemo /> */}
      //      {/* <h1 className = 'error'> Error </h1> */}
      //      {/* <h1 className = 'styles.success'> Success </h1>
      //      <Stylesheet primary={true}/>
      //      <InlineCSS/>
      //      <HeaderComponent />
      //      <Content/> */}
           
      //      {/* <Counter/>
      //      <Greet name = "Amalkiran" heroName="KiranCM"/>
      //      <Welcome name="Welcome" heroName="KiranCM"></Welcome>
      //      <FunctionClick/>
      //      <ClassClick/>
      //      <EventBind/> */}
      //      {/* <Mapping/>
      //      <Footer/> */}
         
     );
  }
} // Class App End
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
// - - - - - - - SlidingMe  - - - - - - -

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
            <footer>© a kirancm product</footer>
         </div>
      );
   }
 }

export default App;


// Mapping.js Parent -> Person.js child
