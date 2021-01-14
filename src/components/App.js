import '../styles/App.css';
import Nav from './Nav'
import Dashboard from './Dashboard'
import Footer from './Footer'
import TitleAnimate from './TitleAnimate'
// import Title from './Title'
import NewQuestion from './NewQuestion'
import Leaderboards from './Leaderboards'
import Login from './Login'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'





import React, { Component, Fragment } from 'react'
// import LoadingBar from 'react-redux-loading'
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'





class App extends Component {
  // state = {
  //   users:{},
  //   animation: false
  // }
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <Router>
        <Fragment>
        <div className="App">
          
          <TitleAnimate />
          <Nav />
          <div className='border-body'>
              <LoadingBar className="loading"/>
            <hr className='style13' />
            <Route exact path='/home' render={() => (
              <Dashboard />
            )}/>

            {/* <h1> {`These are the users: ${user && Object.keys(user.id)} `} </h1> */}
            <Route exact path='/question' render={() => (  
              <NewQuestion/>
              
            )}/>
            <Route exact path='/leaderboards' render={() => (  
              <Leaderboards/>
              
            )}/>

          <Route exact path='/' render={() => (  
              <Login/>
              
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

export default connect(mapStateToProps)(App)