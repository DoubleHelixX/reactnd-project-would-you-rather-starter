import logo from '../logo.svg';
import '../styles/App.css';
import * as DataAPI from '../utils/_DATA'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Footer from './Footer'
import TitleAnimate from './TitleAnimate'
import Title from './Title'
import NewQuestion from './NewQuestion'
import Leaderboards from './Leaderboards'


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
    const { users } = this.state;
    const user = users.sarahedo;
    



    
      
    

  
    return (
      <Router>
        <Fragment>
        {/* <LoadingBar /> */}
        <div className="App">
          
          <TitleAnimate />
          <Nav />
          <div className='border-body'>
            <hr className='style13' />
            <Route exact path='/home' render={() => (
              <Dashboard />
            )}/>

            {console.log('USERS: ', user && Object.keys(user.id))}
            {/* <h1> {`These are the users: ${user && Object.keys(user.id)} `} </h1> */}
            <Route exact path='/question' render={() => (  
              <NewQuestion/>
              
            )}/>
            <Route exact path='/leaderboards' render={() => (  
              <Leaderboards/>
              
            )}/>


        </div>
        <Footer/>

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
