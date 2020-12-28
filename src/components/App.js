import logo from '../logo.svg';
import '../styles/App.css';
import * as DataAPI from '../utils/_DATA'
import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import TitleAnimate from './TitleAnimate'
import Title from './Title'


import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as Constants from '../utils/Constants'





class App extends Component {
  state = {
    users:{},
    animation: false
  }
  
  componentDidMount() {
    DataAPI._getUsers()
    .then((users) => {
      this.setState(() => ({
        users,
        animation:true
      }))
    })
  }

  render() {
    const { users, animation } = this.state;
    const user = users.sarahedo;
    



    
      
    

  
    return (
      <Router>

        <div className="App">
      
        <TitleAnimate path='/' exact  />

        {/* <Title path='/ '   /> */}

        <Nav />


            {console.log('USERS: ', user && Object.keys(user.id))}
            <h1> {`These are the users: ${user && Object.keys(user.id)} `} </h1>
            
        </div>
      </Router>

      );
  }
}

export default App;
