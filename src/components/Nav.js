import { NavLink } from 'react-router-dom'
import * as DataAPI from '../utils/_DATA'
import { connect } from 'react-redux'
import React, { Component } from 'react'




class Nav extends Component {
  
  render() {
  let users = DataAPI.users['sarahedo'];
  let {authedUser_data} = this.props;

  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
  
          <NavLink to='/home'
            isActive={(match, location) => {
              //some additional logic to verify you are in the home URI
              if(!location) return false;
              const {pathname} = location;
              console.log(pathname);
              return pathname === "/home" || pathname === "/";
              }
            }
             activeClassName='active-tab' className='non-active-tab' style={{ textDecoration: 'none'}}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/question' 
            isActive={(match, location) => {
              //some additional logic to verify you are in the home URI
              if(!location) return false;
              const {pathname} = location;
              console.log(pathname);
              return pathname === "/question";
              }
            }
            activeClassName='active-tab' className='non-active-tab' style={{ textDecoration: 'none'}} >
            New Question
          </NavLink>
        </li>

        <li>
          <NavLink to='/leaderboards' 
            isActive={(match, location) => {
              //some additional logic to verify you are in the home URI
              if(!location) return false;
              const {pathname} = location;
              console.log(pathname);
              return pathname === "/leaderboards";
              }
            }
            activeClassName='active-tab' className='non-active-tab' style={{ textDecoration: 'none'}} >
            LeaderBoards
          </NavLink>
        </li>

        
      </ul>
     {authedUser_data !== undefined && (
       <span className='li-logout'>
         {` Welcome back, ${authedUser_data.name}`} 
         <img className ='nav-user-img' src={authedUser_data.avatarURL } alt="account-img" />  

          <span>
            Logout
          </span>
        </span>
        )}
      
    </nav>
    
  )}
}

function mapStateToProps ({ users, authedUser }) {
  let authedUser_data=undefined;
  if (authedUser in users){
    authedUser_data = users[authedUser];
    console.log('THIS IS THE NAV', authedUser in users, authedUser_data)
  }
     return {
     authedUser,
     authedUser_data: authedUser_data
 }
 }

export default connect(mapStateToProps)(Nav)