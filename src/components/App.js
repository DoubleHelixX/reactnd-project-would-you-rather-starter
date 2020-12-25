import logo from '../logo.svg';
import '../App.css';
import * as DataAPI from '../utils/_DATA'
import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'




class App extends Component {
  state = {
    users:{}
  }
  
  componentDidMount() {
    DataAPI._getUsers()
    .then((users) => {
      this.setState(() => ({
        users
      }))
    })
  }

  render() {
    const { users } = this.state;
    const user = users.sarahedo;
    const text = document.getElementsByClassName('Heading-div');
    // while(true){
    //   text.style
    // }
  
    return (
      <Router>

        <div className="App">
      
          <div className = "Heading-div">Would you Rather ? ? ? <span> (React/Redux App)  By: Thomas Rivera </span></div>

        <Nav />


            {console.log('USERS: ', user && Object.keys(user.id))}
            <h1> {`These are the users: ${user && Object.keys(user.id)} `} </h1>
            
        </div>
      </Router>

      );
  }
}

export default App;
