// import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { NavLink } from "react-router-dom";
// import equal from "fast-deep-equal";

function selectUser(e, id) {
    e.preventDefault();

    console.log('Selected User: ', e.target.id);
    let dropdownBtn = document.getElementById("dropdown-basic-button");
    dropdownBtn.textContent = e.target.id;
    dropdownBtn.style.color = "black";
    dropdownBtn.setAttribute("data-user", id);
}

class Login extends Component {
  handleLogIn = (e) => {
    e.preventDefault();
    let signin = document
      .getElementById("dropdown-basic-button")
      .getAttribute("data-user");
    let { dispatch } = this.props;
    dispatch(setAuthedUser(signin));
    const { history } = this.props;
            history.push("/home");
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //     console.log('l', this.props.users != nextProps.users, this.props.users , nextProps.users)
  //     return this.props.users != nextProps.users;
  // }

  render() {
    let { users } = this.props;
    return (
      <div className="login-container" key= "login-container">
        <h2 className="login-header" key="login-header">
          Welcome to the Would You Rather React/Redux App?
        </h2>
        <p className="login-p" key="login-p">Please Sign in to continue</p>
        <form
          onSubmit={(event) => this.handleLogIn(event)}
          className="login-form"
          key="login-form"
        >
          <img className="login-header-img" alt="login-header-img" key="login-header-img"/>
          <br />
          <label className="login-label" htmlFor="users" key="login-label">
            Sign in
          </label>
          <br />
          <DropdownButton id="dropdown-basic-button" title="Select User">
            {Object.keys(users).map((x, i) => (
              <Dropdown.Item
                className="dropdown-item"
                key={"dropdown-item"+i}
                onClick={(event) =>
                  selectUser(event, users[Object.keys(users)[i]].id.toString())
                }
                id={users[Object.keys(users)[i]].name.toString()}
              >
                <img
                  src={users[Object.keys(users)[i]].avatarURL}
                  alt={users[Object.keys(users)[i]].name.toString()}
                  key={"dropdown-item-img"+i}
                />
                {users[Object.keys(users)[i]].name.toString()}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <br />
          <input className="login-submit" type="submit" value="Sign-In" key="login-submit"/>
        </form>
        <span className="login-signup">
          <NavLink
            to="/signup"
            isActive={(match, location) => {
              //some additional logic to verify you are in the home URI
              if (!location) return false;
              const { pathname } = location;
              return pathname === "/signup";
            }}
            className="non-active-tab"
            style={{ textDecoration: "none" }}
          >
            Create a New User
          </NavLink>
        </span>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {

  return {
    users,
    questions,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
