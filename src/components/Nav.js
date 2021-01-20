import { NavLink } from 'react-router-dom'
import * as DataAPI from '../utils/_DATA'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'




class Nav extends Component {

  handleLogOut = (e) => {
    e.preventDefault();
    let {dispatch} = this.props;
    dispatch(setAuthedUser(null));

}
  render() {
  let users = DataAPI.users['sarahedo'];
  let {authedUser_data} = this.props;

  return (
    <nav className='nav'>
     {authedUser_data !== undefined && (
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
         )}
     {authedUser_data !== undefined && (
       <span className='li-logout'>
         {` Welcome back, ${authedUser_data.name}`} 
         <img className ='nav-user-img' src={authedUser_data.avatarURL } alt="account-img" />  

         
          <NavLink to='/' onClick={(event) => this.handleLogOut(event)}
            isActive={(match, location) => {
              //some additional logic to verify you are in the home URI
              if(!location) return false;
              const {pathname} = location;
              console.log(pathname);
              return pathname === "/";
              }
            }
            activeClassName='active-tab' className='non-active-tab' style={{ textDecoration: 'none'}} >
                Logout
          </NavLink>
        </span>
        )}
      
    </nav>
    
  )}
}

function mapStateToProps ({ users, authedUser }) {
  let authedUser_data=undefined;
  console.log('THIS IS THE NAV',authedUser)

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