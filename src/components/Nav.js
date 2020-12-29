import { NavLink } from 'react-router-dom'

export default function Nav () {

  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
  
          <NavLink to='/dashboard' exact  activeClassName='active-tab' style={{ textDecoration: 'none'}}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/question' exact  activeClassName='active-tab'  style={{ textDecoration: 'none'}} >
            New Question
          </NavLink>
        </li>

        <li>
          <NavLink to='/leader-board' exact  activeClassName='active-tab'  style={{ textDecoration: 'none'}} >
            LeaderBoard
          </NavLink>
        </li>
      </ul>
      
    </nav>
    
  )
}