import { NavLink } from 'react-router-dom'
import * as DataAPI from '../utils/_DATA'
import { Dropdown, DropdownButton } from 'react-bootstrap';



export default function Login () {
  let questions = DataAPI.questions['8xf0y6ziyjabvozdd253nd'];
  let users = DataAPI.users;
console.log(users);
  return (
   <div  className='login-container'>
       
       <h2  className='login-header'>
        Welcome to the Would You Rather React/Redux App?
       </h2>
       <p  className='login-p'>
        Please Sign in to continue
       </p>
       <form  className='login-form'>
           <img  className='login-header-img'>
           </img>
           <br/>

           <label  className='login-label' for="users">Sign in</label>
           <br/>
            {/* <select id="users" name="users"> */}
            {/* <option hidden disabled selected value="Signin">Signin</option>
            {Object.keys(users).map((x, i) =>(
                <option value={users[Object.keys(users)[i]].name} style={{backgroundImage:(users[Object.keys(users)[i]].avatarURL).toString()}}>
                    {users[Object.keys(users)[i]].name} 
                    
                </option>
            ))}
            </select> */}

        <DropdownButton id="dropdown-basic-button" title="Select User">
        <Dropdown.Item className="dropdown-item" href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
           

            <br/>
            <input className='login-submit' type="submit" value="Submit"/>
       </form>
   </div>
    
  )
}

