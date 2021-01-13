// import { NavLink } from 'react-router-dom'
import * as DataAPI from '../utils/_DATA'
import { Dropdown, DropdownButton } from 'react-bootstrap';

function selectUser(e){
    console.log(e.target.id);
    let dropdownBtn = document.getElementById('dropdown-basic-button');
    dropdownBtn.textContent = e.target.id;
    dropdownBtn.style.color='black';
}


export default function Login () {
  let users = DataAPI.users;
// console.log(users);
  return (
   <div  className='login-container'>
       
       <h2  className='login-header'>
        Welcome to the Would You Rather React/Redux App?
       </h2>
       <p  className='login-p'>
        Please Sign in to continue
       </p>
       <form  className='login-form'>
           <img  className='login-header-img' alt='login-header-img' />
           
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
        {Object.keys(users).map((x, i) =>(
        <Dropdown.Item className="dropdown-item" onClick={(event) => selectUser(event) } id={(users[Object.keys(users)[i]].name).toString()}>
            <img src={(users[Object.keys(users)[i]].avatarURL).toString()} alt={(users[Object.keys(users)[i]].name).toString()} />
            {(users[Object.keys(users)[i]].name).toString()}</Dropdown.Item>
        
        ))}
        </DropdownButton>
           

            <br/>
            <input className='login-submit' type="submit" value="Sign-In"/>
       </form>
   </div>
    
  )
}

