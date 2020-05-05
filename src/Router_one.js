import React, { Component } from 'react'
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom'
import Route from 'react-router-dom/Route'

// const User = ({match}) => {
// return(<h1> Welcome User {match.params.username} </h1>)
// }

const User =(params) => {
    return(<h1> Welcome User {params.username} </h1>)
    }



export class Router_one extends Component {
    state = {
        loggedIn: false
    }
    loginHandle = () => {
        this.setState(prevState =>({
            loggedIn: !prevState.loggedIn
        }))
    }
    render() {
        return (
          <Router>
              <div>
                  <ul>
                  <li>
                        <NavLink to="/" exact activeStyle={
                        { color:'green' }
                        }>Home</NavLink>
                    </li>
                      <li> <NavLink to="/about" exact activeStyle = {
                          {color : 'green'}
                      }>About</NavLink> </li>
                      <li> <NavLink to="/user/KiranCM" exact activeStyle = {
                          {color : 'green'}
                      }>User KiranCM</NavLink> </li>
                      <li> <NavLink to="/user/jio" exact activeStyle = {
                          {color : 'green'}
                      }>User Jio</NavLink> </li>
                  </ul>
                <Prompt 
                    when = {!this.state.loggedIn}
                    message = {(location) => {
                        return location.pathname.startsWith('/user') ? 'Are you sure' : true
                    }}
                />
                  <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
                  <Route path="/" exact strict render={
                      () => {
                        return(<h> Welcome Home </h>);
                      }
                  }/> 
                  <Route path="/about" exact strict render={
                      () => {
                        return(<h> Welcome About </h>);
                      }
                  }/>
                  {/* <Route path="/user/:username" exact strict component={User}/>  */}
                  <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to='/'/>)
        )}/> 
              </div>
          </Router>
        )
    }
}

export default Router_one
