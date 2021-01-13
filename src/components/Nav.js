import { NavLink } from 'react-router-dom'
import * as DataAPI from '../utils/_DATA'


export default function Nav () {
  let users = DataAPI.users['sarahedo'];

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
      <span className='li-logout'>
         {` Welcome back, ${'Tommy'}`} 
         <img className ='nav-user-img' src={users.avatarURL } alt="account-img" />  

          <span>
            Logout
          </span>
        </span>
      
    </nav>
    
  )
}