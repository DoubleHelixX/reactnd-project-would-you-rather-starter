import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import { setAuthedUser } from "../actions/authedUser";

class Nav extends Component {
  handleLogOut = (e) => {
    e.preventDefault();
    let { dispatch } = this.props;
    dispatch(setAuthedUser(null));
  };
  render() {
    let { authedUser, authedUser_data } = this.props;

    return (
      <nav className="nav">
        {authedUser !== null && (
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
