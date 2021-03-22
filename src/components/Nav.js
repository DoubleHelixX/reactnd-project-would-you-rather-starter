import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import { setAuthedUser } from "../actions/authedUser";
import { Spin as Hamburger } from 'hamburger-react';

class Nav extends Component {
  handleLogOut = (e) => {
    e.preventDefault();
    let { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };
  render() {
    let { authedUser, authedUser_data } = this.props;
    let availScreenWidth  = window.screen.availWidth;
    let mobileScreen = availScreenWidth<=910;

    return (
      <nav className="nav">
         {authedUser !== null && mobileScreen && (
          <Hamburger direction="right"  size={20} color="#4FD1C5" onToggle={toggled => {
            let nav = document.getElementsByClassName('nav');
            let navLinks = document.getElementById('mobile-links');
        

            if (toggled) {
               // open a menu
               nav[0].classList.add("nav-down");
               nav[0].classList.remove("nav-up");
               navLinks.classList.remove("nav-links-left");
               navLinks.classList.add("nav-links-right");
            } else {
               // close a menu
               nav[0].classList.add("nav-up");
               nav[0].classList.remove("nav-down");
               navLinks.classList.remove("nav-links-right");
               navLinks.classList.add("nav-links-left");

            }
          }} />

         )
        }

        {authedUser !== null && !mobileScreen && (
          <ul className="nav-links">
            <li>
              <NavLink
                to="/home"
                isActive={(match, location) => {
                  //some additional logic to verify you are in the home URI
                  if (!location) return false;
                  const { pathname } = location;
                  return pathname === "/home" || pathname === "/";
                }}
                activeClassName="active-tab"
                className="non-active-tab"
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/question"
                isActive={(match, location) => {
                  //some additional logic to verify you are in the home URI
                  if (!location) return false;
                  const { pathname } = location;
                  return pathname === "/question";
                }}
                activeClassName="active-tab"
                className="non-active-tab"
                style={{ textDecoration: "none" }}
              >
                New Question
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/leaderboards"
                isActive={(match, location) => {
                  //some additional logic to verify you are in the home URI
                  if (!location) return false;
                  const { pathname } = location;
                  return pathname === "/leaderboards";
                }}
                activeClassName="active-tab"
                className="non-active-tab"
                style={{ textDecoration: "none" }}
              >
                LeaderBoards
              </NavLink>
            </li>
          </ul>
        )}
        {authedUser !== null && (
          <span className="li-logout">
            {` Welcome back, ${authedUser_data.name}`}
            <img
              className="nav-user-img"
              src={authedUser_data.avatarURL}
              alt="account-img"
            />

            <NavLink
              to="/"
              onClick={(event) => this.handleLogOut(event)}
              isActive={(match, location) => {
                //some additional logic to verify you are in the home URI
                if (!location) return false;
                const { pathname } = location;
                return pathname === "/";
              }}
              activeClassName="active-tab"
              className="non-active-tab"
              style={{ textDecoration: "none" }}
            >
              Logout
            </NavLink>
          </span>
        )}

        <div className='ham' id ='mobile-links'>
        <ul className="nav-links" >
            <li>
              <NavLink
                to="/home"
                isActive={(match, location) => {
                  //some additional logic to verify you are in the home URI
                  if (!location) return false;
                  const { pathname } = location;
                  return pathname === "/home" || pathname === "/";
                }}
                activeClassName="active-tab"
                className="non-active-tab"
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/question"
                isActive={(match, location) => {
                  //some additional logic to verify you are in the home URI
                  if (!location) return false;
                  const { pathname } = location;
                  return pathname === "/question";
                }}
                activeClassName="active-tab"
                className="non-active-tab"
                style={{ textDecoration: "none" }}
              >
                New Question
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/leaderboards"
                isActive={(match, location) => {
                  //some additional logic to verify you are in the home URI
                  if (!location) return false;
                  const { pathname } = location;
                  return pathname === "/leaderboards";
                }}
                activeClassName="active-tab"
                className="non-active-tab"
                style={{ textDecoration: "none" }}
              >
                LeaderBoards
              </NavLink>
            </li>
          </ul>
        
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  let authedUser_data = undefined;

  if (users.hasOwnProperty(authedUser)) {
    authedUser_data = users[authedUser];
    // console.log("THIS IS THE NAV", authedUser in users, authedUser_data);
  }
  // console.log("THIS IS THE NAV END", authedUser, "\n", authedUser_data);

  return {
    authedUser,
    authedUser_data: authedUser_data,
  };
}

export default connect(mapStateToProps)(Nav);
