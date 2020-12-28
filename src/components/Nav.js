import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul className='nav-links'>
        <li>
  
          <NavLink to='/dashboard' exact activeClassName='active'style={{ textDecoration: 'none' }}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/question' activeClassName='active' style={{ textDecoration: 'none' }}>
            New Question
          </NavLink>
        </li>

        <li>
          <NavLink to='/leader-board' activeClassName='active' style={{ textDecoration: 'none' }}>
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}