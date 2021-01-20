import '../styles/App.css';
import Nav from './Nav'
import Dashboard from './Dashboard'
import Footer from './Footer'
import TitleAnimate from './TitleAnimate'
// import Title from './Title'
import NewQuestion from './NewQuestion'
import Leaderboards from './Leaderboards'
import Login from './Login'
import Signup from './Signup'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'





import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'





class App extends Component {
 
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('lsda', this.props.loading != nextProps.loading, this.props.loading, nextProps.loading)
//     return this.props.loading != nextProps.loading;
// }

// componentDidUpdate(prevProps){

// }

  render() {
 const {loading} =this.props;
 
    return (
      <Router>
        <Fragment>
          <div className="App">
            
            <TitleAnimate />
            <Nav />
            <div className='border-body'>
              <LoadingBar className="loading"/>
              <hr className='style13' />
              
               {loading === true ?
               <span>
                 <Route exact path='/' component={Login} />
                 <Route exact path='/signup' component = {Signup}/>

               </span>
                 :
                 <span>
                  <Route exact path='/' render={({history}) => (
                    <Redirect to="/home" />
                    )}/>
                    <Route exact path='/home' component={Dashboard} />
                    <Route exact path='/question' component = {NewQuestion}/>
                    <Route exact path='/leaderboards' component = {Leaderboards}/>
                </span>


                
              }
            </div>
            <Footer/>
          </div>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps ({ authedUser }) {
  console.log('l', authedUser)
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)