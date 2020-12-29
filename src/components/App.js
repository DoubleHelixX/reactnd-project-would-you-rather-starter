import logo from '../logo.svg';
import '../styles/App.css';
import * as DataAPI from '../utils/_DATA'
import * as Constants from '../utils/Constants'
import Nav from './Nav'
import Dashboard from './Dashboard'
import TitleAnimate from './TitleAnimate'
import Title from './Title'

import React, { Component, Fragment } from 'react'
// import LoadingBar from 'react-redux-loading'
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'





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
        <Fragment>
        {/* <LoadingBar /> */}
        <div className="App">
      
        <TitleAnimate path='/' exact  />

        {/* <Title path='/ '   /> */}

        <Nav />
        <div className='border'>

        <hr className='style13' />
        <Dashboard/>

            {console.log('USERS: ', user && Object.keys(user.id))}
            <h1> {`These are the users: ${user && Object.keys(user.id)} `} </h1>
            

        </div>
        </div>

      </Fragment>
      </Router>

      );
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default App;
