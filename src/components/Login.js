// import { NavLink } from 'react-router-dom'
import * as DataAPI from '../utils/_DATA'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import equal from 'fast-deep-equal'
import { setAuthedUser } from '../actions/authedUser'
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom'




function selectUser(e,id){
    console.log(e.target.id);
    let dropdownBtn = document.getElementById('dropdown-basic-button');
    dropdownBtn.textContent = e.target.id;
    dropdownBtn.style.color='black';
    dropdownBtn.setAttribute('data-user', id);
}


class Login extends Component {

    handleLogIn = (e) => {
        e.preventDefault();
        let signin = document.getElementById('dropdown-basic-button').getAttribute('data-user');
        let {dispatch} = this.props;
        dispatch(setAuthedUser(signin));
 
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('l', this.props.users != nextProps.users, this.props.users , nextProps.users)
    //     return this.props.users != nextProps.users;
    // }

    render() {

        let {users} =this.props;
        console.log('das', users, '\n', this.props);
        return (
            <div  className='login-container'>
                
                <h2  className='login-header'>
                    Welcome to the Would You Rather React/Redux App?
                </h2>
                <p  className='login-p'>
                    Please Sign in to continue
                </p>
                <form  onSubmit={(event) => this.handleLogIn(event)} className='login-form'>
                    <img  className='login-header-img' alt='login-header-img' />
                    <br/>
                    <label  className='login-label' for="users">Sign in</label>
                    <br/>
                    <DropdownButton id="dropdown-basic-button" title="Select User">
                        {Object.keys(users).map((x, i) =>(
                            <Dropdown.Item className="dropdown-item" onClick={(event) => selectUser(event, (users[Object.keys(users)[i]].id).toString()) } id={(users[Object.keys(users)[i]].name).toString()}>
                                <img src={(users[Object.keys(users)[i]].avatarURL).toString()} alt={(users[Object.keys(users)[i]].name).toString()} />
                                {(users[Object.keys(users)[i]].name).toString()}</Dropdown.Item>
                            
                        ))}
                    </DropdownButton>
                    <br/>
                    <input className='login-submit' type="submit" value="Sign-In"/>
                </form>
                <span className='login-signup'>
                <NavLink to='/signup'
                    isActive={(match, location) => {
                        //some additional logic to verify you are in the home URI
                        if(!location) return false;
                        const {pathname} = location;
                        console.log(pathname);
                        return pathname === "/home" || pathname === "/";
                        }
                    }
                     className='non-active-tab' style={{ textDecoration: 'none'}}>
                    Create a New User
            </NavLink>
                </span>
            </div>
        )
    }
}

function mapStateToProps ({ users, questions }) {
   console.log('first', users)
  
    return {
    
    users,
    questions
  }
  }

export default withRouter(connect(mapStateToProps)(Login))

